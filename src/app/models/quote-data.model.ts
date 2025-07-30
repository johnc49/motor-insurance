// src/app/models/quote-data.model.ts

export interface DriverInfo {
  age: string;
  experience: string;
  violations: string;
  zipCode: string;
}

export interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  mileage: string;
}

export interface CoverageInfo {
  liability: string;
  collision: boolean;
  comprehensive: boolean;
}

export interface QuoteData {
  driver: DriverInfo;
  vehicle: VehicleInfo;
  coverage: CoverageInfo;
}
