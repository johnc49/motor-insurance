import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  LucideAngularModule,
  Shield,
  Star,
  Clock,
  Car,
  CircleCheckBig,
} from 'lucide-angular';
import { QuoteFormModule } from '../quote-form/quote-form.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    HomeRoutingModule,
    QuoteFormModule,
    LucideAngularModule.pick({ Shield, Star, Clock, Car, CircleCheckBig }),
  ],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
