/*
 # normalize.ts
 # Normalization Utilities
 */

/**
 # Module Dependencies
 */

type NormalObject = { [key: string]: number } & { [key: number]: number };
// type NormalArray = number[];

/**
 # Methods
 */

/**
 * Normalizes an array of values to the defined scaling value (default 1)
 * @param {array} collection     An array of numbers.
 * @param {number} scale         Scale that the sum of the array should add up to.
 */
export function scaleNormalArray(collection: number[], scale = 1): number[] {
  const sum = collection.reduce((a, b) => a + b, 0);
  return collection.map(v => (v / sum) * scale);
}

/**
 * Normalizes an array of values to 1.
 * @param {array} collection     An array of numbers.
 */
export function normalizeArray(collection: number[]) {
  return scaleNormalArray(collection, 1);
}

/**
 * Normalizes an object containing only numerical values to the defined scaling value (default 1)
 * @param {object} object   An object containing only number values.
 * @param {number} scale    Scale that the sum of the values of the object should add up to.
 */
export function scaleNormalObject(object: NormalObject, scale = 1) {
  const sum = Object.keys(object).reduce((a, b) => a + object[b], 0);
  return Object.keys(object).reduce(
    (a, b) => ({ ...a, [b]: (object[b] / sum) * scale }),
    {}
  );
}

/**
 * Normalizes an object of values to 1.
 * @param {array} collection     An array of numbers.
 */
export function normalizeObject(object: NormalObject) {
  return scaleNormalObject(object, 1);
}

/**
 * Normalizes an object or an array of values to the defined scaling value (default 1)
 * @param {array} collection     An object or an array of numbers.
 * @param {number} scale         Scale that the sum of the array or object should add up to.
 */
export function scale(collection: number[] | NormalObject, scale = 1) {
  let result: number[] | NormalObject;
  if (Array.isArray(collection)) {
    result = scaleNormalArray(collection, scale);
  } else {
    result = scaleNormalObject(collection, scale);
  }
  return result;
}

/**
 * Normalizes an object or an array of values to 1.
 * @param collection  An object or an array of numbers.
 */
export function normalize(collection: number[] | NormalObject) {
  return scale(collection, 1);
}
