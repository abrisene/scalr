/*
 # main.d.ts
 # Scalr Main Type Declaration
 */

/**
 # Declarations
 */

declare type ScalableObject = { [key: string]: number } & {
  [key: number]: number;
};
declare type ScalableCollection = number[] | ScalableObject;
