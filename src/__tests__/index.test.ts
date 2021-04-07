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
} from '..';

/**
 # Constants
 */

const sumArray = (a: number[]) => a.reduce((a, b) => a + b, 0);
const sumObj = (o: { [key: string]: number }) =>
  Object.keys(o).reduce((a, b) => a + o[b], 0);

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
  expect(sumObj(objNrmA)).toBeCloseTo(1);
  expect(sumObj(objNrmB)).toBeCloseTo(1);
});

test('Arrays scale properly.', () => {
  expect(sumArray(arrayScA)).toBeCloseTo(6);
});

test('Objects scale properly.', () => {
  expect(sumObj(objScA)).toBeCloseTo(6);
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
