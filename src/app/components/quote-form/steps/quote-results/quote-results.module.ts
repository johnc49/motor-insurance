import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuoteResultsComponent } from './quote-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Mail } from 'lucide-angular';

@NgModule({
  declarations: [QuoteResultsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Mail }),
  ],
  providers: [],
  exports: [QuoteResultsComponent],
})
export class QuoteResultsModule {}
