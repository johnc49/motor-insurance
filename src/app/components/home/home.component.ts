import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showQuoteForm = false;
  constructor(private readonly location: Location, private router: Router) {}
  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  getQuote() {
    this.router.navigate(['/get-quote']);
  }
}
