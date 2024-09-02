// Define LengthUnits and WeightUnits interfaces
export interface LengthUnits {
  millimeter: number;
  centimeter: number;
  meter: number;
  kilometer: number;
  inch: number;
  foot: number;
  yard: number;
  mile: number;
}

export interface WeightUnits {
  milligram: number;
  gram: number;
  kilogram: number;
  ounce: number;
  pound: number;
}

// Use union type for Units
export type Units = LengthUnits | WeightUnits;

export type Tabs = "length" | "weight" | "temperature";

// ConvertProps now uses generic keys of Units for type safety
export type ConvertProps = {
  value: number;
  from: keyof Units;
  to: keyof Units;
};
