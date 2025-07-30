import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverInfoStepComponent } from './driver-info-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DriverInfoStepComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [DriverInfoStepComponent],
})
export class DriverInfoStepModule {}
