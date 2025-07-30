import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-driver-info-step',
  templateUrl: './driver-info-step.component.html',
  styleUrls: ['./driver-info-step.component.scss'],
})
export class DriverInfoStepComponent implements OnChanges {
  @Input() data!: {
    age: string;
    experience: string;
    violations: string;
    zipCode: string;
  };

  @Output() update = new EventEmitter<any>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  errors: Record<string, string> = {};
  constructor() {}

  ngOnChanges() {
    this.errors = {}; // Reset errors if data changes
  }

  handleInputChange(field: string, value: string) {
    this.update.emit({ [field]: value });
    if (this.errors[field]) {
      this.errors[field] = '';
    }
  }

  validateForm(): boolean {
    const newErrors: Record<string, string> = {};

    if (!this.data.age) newErrors['age'] = 'Age is required';
    if (!this.data.experience)
      newErrors['experience'] = 'Driving experience is required';
    if (!this.data.violations)
      newErrors['violations'] = 'This field is required';
    if (!this.data.zipCode) newErrors['zipCode'] = 'ZIP code is required';
    else if (!/^\d{5}$/.test(this.data.zipCode))
      newErrors['zipCode'] = 'Please enter a valid 5-digit ZIP code';

    this.errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  handleNext() {
    if (this.validateForm()) {
      this.next.emit();
    }
  }

  handlePrevious() {
    this.previous.emit();
  }
}
