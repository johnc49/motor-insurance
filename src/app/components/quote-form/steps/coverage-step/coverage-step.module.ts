import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoverageStepComponent } from './coverage-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Info } from 'lucide-angular';

@NgModule({
  declarations: [CoverageStepComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Info }),
    FormsModule,
  ],
  providers: [],
  exports: [CoverageStepComponent],
})
export class CoverageStepModule {}
