import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CoverageInfo } from './steps/coverage-step/coverage-step.component';

interface QuoteData {
  vehicle: {
    year: string;
    make: string;
    model: string;
    mileage: string;
  };
  driver: {
    age: string;
    experience: string;
    violations: string;
    zipCode: string;
  };
  coverage: {
    liability: string;
    collision: boolean;
    comprehensive: boolean;
  };
}

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  // @Input() onBack: () => void = () => {};

  currentStep = 1;
  totalSteps = 4;

  quoteData: QuoteData = {
    vehicle: { year: '', make: '', model: '', mileage: '' },
    driver: { age: '', experience: '', violations: '', zipCode: '' },
    coverage: { liability: '', collision: false, comprehensive: false },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  goBackHome() {
    this.router.navigate(['/home']);
  }

  get progress(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get stepTitles() {
    return [
      'Vehicle Information',
      'Driver Details',
      'Coverage Options',
      'Your Quote',
    ];
  }

  updateQuoteData(section: keyof QuoteData, data: any) {
    this.quoteData = {
      ...this.quoteData,
      [section]: { ...this.quoteData[section], ...data },
    };
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  resetForm() {
    this.currentStep = 1;
    this.quoteData = {
      vehicle: { year: '', make: '', model: '', mileage: '' },
      driver: { age: '', experience: '', violations: '', zipCode: '' },
      coverage: { liability: '', collision: false, comprehensive: false },
    };
  }
}
