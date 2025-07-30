import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInfoStepComponent } from './driver-info-step.component';

describe('DriverInfoStepComponent', () => {
  let component: DriverInfoStepComponent;
  let fixture: ComponentFixture<DriverInfoStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverInfoStepComponent]
    });
    fixture = TestBed.createComponent(DriverInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
