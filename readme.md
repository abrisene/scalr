## scalr [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)  

[![npm version](https://badge.fury.io/js/scalr.svg)](https://badge.fury.io/js/scalr) [![GitHub version](https://badge.fury.io/gh/abrisene%2Fscalr.svg)](https://badge.fury.io/gh/abrisene%2Fscalr) [![Build Status](https://travis-ci.com/abrisene/scalr.svg?branch=main)](https://travis-ci.com/abrisene/scalr)

Scalr is a lightweight module of pure functions for normalizing and scaling numbers stored within arrays and objects to arbitrary unit lengths.

All inputs are treated as immutable.

```typescript
import { normalize, scale } from 'scalr';

normalize([1, 1, 1, 1]);          // => [0.25, 0.25, 0.25, 0.25]
normalize({ a: 4, b: 4, c: 8 });  // => { a: 0.25, b: 0.25, c: 0.5 }
scale([1, 1], 3);                 // => [1.5, 1.5]
scale({ a: 2, b: 8 }, 2);         // => { a: 0.4, b: 1.6 }
```

## Installation

Run:

```
npm install -s scalr
```


## API

### Scaling & Normalization


#### normalize(collection: number[] | { [key: string | number]: number })

Normalizes an object or an array so that all of the contained values add up to 1.

```typescript
normalize([1, 1, 1, 1]);          // => [0.25, 0.25, 0.25, 0.25]
normalize({ a: 4, b: 4, c: 8 });  // => { a: 0.25, b: 0.25, c: 0.5 }
```


#### scale(collection: number[] | { [key: string | number]: number }, scale = 1)

Normalizes an object or an array so that all of the contained values add up to the unit value of the provided scale.

```typescript
scale([1, 1], 3);                 // => [1.5, 1.5]
scale({ a: 2, b: 8 }, 2);         // => { a: 0.4, b: 1.6 }
```


### Validation

Because we're working with floating point numbers, these validation methods need to define an acceptable tolerance of variability between the sum of the values in the data structure and 1. This defaults to Number.EPSILON.


#### isNormalized(collection: number[] | { [key: string | number]: number }, tolerance = Number.EPSILON)

Validates whether or not an array or object of values is normalized. 
```typescript
isNormalized([0.2, 0.2, 0.2], 3); // => TRUE
isNormalized({ a: 0.2, b: 0.8 }); // => TRUE
```


#### isScaled(collection: number[] | { [key: string | number]: number }, scale = 1, tolerance = Number.EPSILON)

Validates whether or not an array or object of values is scaled to a unit value.

```typescript
isScaled([1, 1, 1], 3);           // => TRUE
isScaled({ a: 0.5, b: 1 }, 2);    // => TRUE
```

### Other Functions

For documentation of underlying functions, please see the [docs](https://abrisene.github.io/scalr/modules.html).
