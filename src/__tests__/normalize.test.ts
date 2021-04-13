/*
 # index.test.js
 # Scalr Index Test
 */

/**
 # Module Dependencies
 */

import {
  scaleNormalArray,
  scaleNormalObject,
  normalizeArray,
  normalizeObject,
  scale,
  normalize,
  sumArray,
  sumObject,
  isScaled,
  isNormalized,
} from '..';

/**
 # Constants
 */

const arrayA = [1, 1, 1];
const arrayB = [1, 2, 3];

const arrayNrmA = normalizeArray(arrayA);
const arrayNrmB = normalizeArray(arrayB);

const arrayScA = scaleNormalArray(arrayA, 6);

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 2, c: 3 };

const objNrmA = normalizeObject(objA);
const objNrmB = normalizeObject(objB);

const objScA = scaleNormalObject(objA, 6);

/**
 # Tests
 */

test('Arrays normalize properly.', () => {
  expect(sumArray(arrayNrmA)).toBeCloseTo(1);
  expect(sumArray(arrayNrmB)).toBeCloseTo(1);
});

test('Objects normalize properly.', () => {
  expect(sumObject(objNrmA)).toBeCloseTo(1);
  expect(sumObject(objNrmB)).toBeCloseTo(1);
});

test('Arrays scale properly.', () => {
  expect(sumArray(arrayScA)).toBeCloseTo(6);
});

test('Objects scale properly.', () => {
  expect(sumObject(objScA)).toBeCloseTo(6);
});

test('Generic normalization works with arbitrary arrays and objects.', () => {
  expect(normalize(arrayA)).toStrictEqual(arrayNrmA);
  expect(normalize(arrayB)).toStrictEqual(arrayNrmB);
  expect(normalize(objA)).toStrictEqual(objNrmA);
  expect(normalize(objB)).toStrictEqual(objNrmB);
});

test('Generic scaling works with arbitrary arrays and objects.', () => {
  expect(scale(arrayA, 6)).toStrictEqual(arrayScA);
  expect(scale(objA, 6)).toStrictEqual(objScA);
});

test('Validation functions detect scaled structures properly.', () => {
  expect(isScaled(scale(arrayA, 6), 6)).toEqual(true);
  expect(isScaled(scale(arrayB, 25.33), 25.33)).toEqual(true);
  expect(isScaled(scale(arrayA, 600.5), 600.5)).toEqual(true);
  expect(isScaled(scale(arrayB, 0.3355), 0.3355)).toEqual(true);
  expect(isScaled(scale(objA, 6), 6)).toEqual(true);
  expect(isScaled(scale(objB, 25.33), 25.33)).toEqual(true);
  expect(isScaled(scale(objA, 600.5), 600.5)).toEqual(true);
  expect(isScaled(scale(objB, 0.3355), 0.3355)).toEqual(true);
});

test('Validation functions detect normalized structures properly.', () => {
  expect(isNormalized(normalize(arrayA))).toEqual(true);
  expect(isNormalized(normalize(arrayB))).toEqual(true);
  expect(isNormalized(normalize(objA))).toEqual(true);
  expect(isNormalized(normalize(objB))).toEqual(true);
});
