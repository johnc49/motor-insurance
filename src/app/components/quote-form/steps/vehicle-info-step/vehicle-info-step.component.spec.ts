import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoStepComponent } from './vehicle-info-step.component';

describe('VehicleInfoStepComponent', () => {
  let component: VehicleInfoStepComponent;
  let fixture: ComponentFixture<VehicleInfoStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleInfoStepComponent]
    });
    fixture = TestBed.createComponent(VehicleInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
