# js-randomize

[![🚀 Publish](https://github.com/loveakinlesi/js-randomize/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/loveakinlesi/js-randomize/actions/workflows/publish.yml) ![](https://badgen.net/bundlephobia/min/js-randomize?color=green) ![](https://badgen.net/npm/v/js-randomize) ![](https://badgen.net/npm/types/js-randomize) 


> **⚠️ Breaking Changes in Version 2.0.0**  
> Version 2.0.0 of `js-randomize` introduces breaking changes. Please refer to the [CHANGELOG](CHANGELOG.md) for details on what has changed and how to adapt your code.


## Table of Contents

- **[Overview](#overview)**
- **[Installation](#installation)**
- **[Usage](#usage)**
- **[Contributing](#contributing)**
- **[License](#license)**

## Overview

`js-randomize` is a lightweight TypeScript library that provides utility functions for generating random integers, floats, booleans, arrays, and strings. It supports custom random number generators and is perfect for applications like games, testing, or simulations.

## Installation

To install using `pnpm`:

```bash
pnpm add js-randomize
```

Or, using `npm`:

```bash
npm install js-randomize
```

## Usage

### Importing

Since the package is now ESM-only, use the `import` syntax to include it in your project:

```ts
import { Randomize } from 'js-randomize';

const randomize = new Randomize(); // Use the default Math.random() or pass a custom random generator
```

### Generating Random Integers

```ts
const randomInt = randomize.integer(1, 10);
// randomInt is an integer between 1 and 10 (inclusive)
```

### Generating Random Floats

```ts
const randomFloat = randomize.float(0, 1, 3);
// randomFloat is a float between 0 and 1 with 3 decimal places
```

### Generating an Array of Random Integers

```ts
const randomIntArray = randomize.intArray(5, 1, 100);
// randomIntArray is an array of 5 random integers between 1 and 100
```

### Generating an Array of Random Floats

```ts
const randomFloatArray = randomize.floatArray(5, 0, 1, 2);
// randomFloatArray is an array of 5 random floats between 0 and 1 with 2 decimal places
```

### Generating a Random Boolean

```ts
const randomBool = randomize.boolean();
// randomBool is either true or false
```

### Picking a Random Element from an Array

```ts
const array = ['apple', 'banana', 'cherry'];
const randomElement = randomize.pick(array);
// randomElement is a random item from the array
```

### Sampling Multiple Non-Repeating Elements from an Array

```ts
const randomSample = randomize.sample(array, 2);
// randomSample contains 2 random non-repeating items from the array
```

### Shuffling an Array

```ts
const shuffledArray = randomize.shuffle(array);
// shuffledArray is a shuffled version of the original array
```

### Generating a Random String

```ts
const randomString = randomize.string(8);
// randomString is a random 8-character string (alphanumeric by default)
```

### Using a Custom Random Generator

You can also provide a custom random generator function:

```ts
const customRandomFn = () => 0.5;
const customRandomize = new Randomize(customRandomFn);

const randomInt = customRandomize.integer(1, 10);
// With the custom random function, the result will always be 5
```

## TypeScript Usage

```ts
import { Randomize } from 'js-randomize';

const randomize = new Randomize();
const randomInt: number = randomize.integer(1, 10);
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change. Make sure to update tests as appropriate.

## License

[MIT](./LICENSE)