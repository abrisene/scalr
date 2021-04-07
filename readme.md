## scalr [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/scalr.svg)](https://badge.fury.io/js/scalr) [![GitHub version](https://badge.fury.io/gh/abrisene%2Fscalr.svg)](https://badge.fury.io/gh/abrisene%2Fscalr)

Scalr is a lightweight module for normalizing and scaling numbers stored within arrays and objects to arbitrary unit lengths.

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

### normalize(collection: number[] | NormalObject)

Normalizes an object or an array so that all of the contained values add up to 1.

```typescript
normalize([1, 1, 1, 1]);          // => [0.25, 0.25, 0.25, 0.25]
normalize({ a: 4, b: 4, c: 8 });  // => { a: 0.25, b: 0.25, c: 0.5 }
```

### scale(collection: number[] | NormalObject, scale = 1)

Normalizes an object or an array so that all of the contained values add up to the unit value of the provided scale.

```typescript
scale([1, 1], 3);                 // => [1.5, 1.5]
scale({ a: 2, b: 8 }, 2);         // => { a: 0.4, b: 1.6 }
```


For documentation of underlying methods, please see the [docs](https://abrisene.github.io/scalr/modules.html).
