import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehicleInfoStepComponent } from './vehicle-info-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VehicleInfoStepComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [VehicleInfoStepComponent],
})
export class VehicleInfoStepModule {}
