import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { QuoteFormComponent } from './quote-form.component';
import { QuoteFormRoutingModule } from './quote-form-routing.module';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';
import { CoverageStepModule } from './steps/coverage-step/coverage-step.module';
import { DriverInfoStepModule } from './steps/driver-info-step/driver-info-step.module';
import { QuoteResultsModule } from './steps/quote-results/quote-results.module';
import { VehicleInfoStepModule } from './steps/vehicle-info-step/vehicle-info-step.module';

@NgModule({
  declarations: [QuoteFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    QuoteFormRoutingModule,
    CoverageStepModule,
    DriverInfoStepModule,
    QuoteResultsModule,
    VehicleInfoStepModule,
    LucideAngularModule.pick({ ArrowLeft }),
  ],
  providers: [],
  exports: [QuoteFormComponent],
})
export class QuoteFormModule {}
