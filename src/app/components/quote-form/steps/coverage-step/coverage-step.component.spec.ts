import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageStepComponent } from './coverage-step.component';

describe('CoverageStepComponent', () => {
  let component: CoverageStepComponent;
  let fixture: ComponentFixture<CoverageStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverageStepComponent]
    });
    fixture = TestBed.createComponent(CoverageStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
