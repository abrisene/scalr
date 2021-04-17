/*
 # types.d.ts
 # Scalr Type Declarations
 */

/**
 # Declarations
 */

export type ScalableObject = { [key: string]: number } & {
  [key: number]: number;
};

export type ScalableCollection = number[] | ScalableObject;
