import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CoverageInfo {
  liability: string;
  collision: boolean;
  comprehensive: boolean;
}

@Component({
  selector: 'app-coverage-step',
  templateUrl: './coverage-step.component.html',
})
export class CoverageStepComponent implements OnInit {
  @Input() data!: CoverageInfo;
  @Output() update = new EventEmitter<Partial<CoverageInfo>>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  errors: { [K in keyof CoverageInfo]?: string } = {};

  constructor() {}

  ngOnInit(): void {}

  handleInputChange(field: keyof CoverageInfo, value: any) {
    this.update.emit({ [field]: value });
    if (this.errors[field]) {
      this.errors[field] = '';
    }
  }

  validateForm(): boolean {
    const newErrors: { [K in keyof CoverageInfo]?: string } = {};
    if (!this.data.liability) {
      newErrors.liability = 'Liability coverage is required';
    }
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
