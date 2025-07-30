import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuoteData } from 'src/app/models/quote-data.model';

@Component({
  selector: 'app-quote-results',
  templateUrl: './quote-results.component.html',
  styleUrls: ['./quote-results.component.scss'],
})
export class QuoteResultsComponent implements OnInit {
  @Input() quoteData!: QuoteData;
  @Output() previous = new EventEmitter<void>();
  @Output() startOver = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
    this.calculateQuote();
  }

  get annualPrice(): number {
    return this.calculateQuote();
  }

  get monthlyPrice(): number {
    return Math.round(this.annualPrice / 12);
  }

  get savings(): number {
    return Math.round(this.annualPrice * 0.25);
  }

  private calculateQuote(): number {
    let basePrice = 800;
    const year = parseInt(this.quoteData.vehicle.year, 10);

    if (year >= 2020) basePrice += 200;
    else if (year >= 2015) basePrice += 100;
    else if (year < 2010) basePrice -= 100;

    const age = this.quoteData.driver.age;
    if (age === '16-25') basePrice += 300;
    else if (age === '26-35') basePrice += 100;
    else if (age === '56-65' || age === '65+') basePrice -= 100;

    const experience = this.quoteData.driver.experience;
    if (experience === '0-2') basePrice += 200;
    else if (experience === '20+') basePrice -= 150;

    const violations = this.quoteData.driver.violations;
    if (violations === '1') basePrice += 150;
    else if (violations === '2') basePrice += 300;
    else if (violations === '3+') basePrice += 500;

    const liability = this.quoteData.coverage.liability;
    if (liability === '250/500/250') basePrice += 200;
    else if (liability === '100/300/100') basePrice += 100;
    else if (liability === '50/100/50') basePrice += 50;

    if (this.quoteData.coverage.collision) basePrice += 300;
    if (this.quoteData.coverage.comprehensive) basePrice += 250;

    return Math.max(400, basePrice);
  }

  onPreviousClick() {
    this.previous.emit();
  }

  onStartOverClick() {
    this.startOver.emit();
  }
}
