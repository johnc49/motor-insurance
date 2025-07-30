import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  mileage: string;
}

@Component({
  selector: 'app-vehicle-info-step',
  templateUrl: './vehicle-info-step.component.html',
  styleUrls: ['./vehicle-info-step.component.scss'],
})
export class VehicleInfoStepComponent implements OnInit, OnChanges {
  @Input() data!: VehicleInfo;
  @Output() update = new EventEmitter<Partial<VehicleInfo>>();
  @Output() next = new EventEmitter<void>();

  errors: { [K in keyof VehicleInfo]?: string } = {};
  years: string[] = [];
  carMakes: string[] = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'Nissan',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Hyundai',
    'Kia',
    'Mazda',
    'Subaru',
    'Lexus',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 30 }, (_, i) =>
      (currentYear - i).toString()
    );
  }

  ngOnChanges() {
    this.errors = {};
  }

  handleInputChange(field: keyof VehicleInfo, value: string) {
    this.update.emit({ [field]: value });
    if (this.errors[field]) {
      this.errors[field] = '';
    }
  }

  validateForm(): boolean {
    const newErrors: { [K in keyof VehicleInfo]?: string } = {};

    if (!this.data.year) newErrors.year = 'Year is required';
    if (!this.data.make) newErrors.make = 'Make is required';
    if (!this.data.model) newErrors.model = 'Model is required';
    if (!this.data.mileage) newErrors.mileage = 'Annual mileage is required';

    this.errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  handleNext() {
    if (this.validateForm()) {
      this.next.emit();
    }
  }
}
