# RandomZ

## Table of Contents

 - **[Overview](#overview)**
 - **[Installation](#installation)**
 - **[Usage](#usage)**
 - **[Contributing](#contributing)**
 - **[License](#license)**


## Overview
RandomZ is a simple javascript utility to generate random values in your code.


## Installation
Using npm:
```zsh
$ npm install randomz
```


## Usage

```js

const randomz = require('randomz');

var randomInteger1 = randomz.int();
// randomInteger1 is an integer in range [0, 100] 

var randomInteger2 = randomz.int(1,10);
// randomInteger2 is an integer in range [1, 10] 


var randomFloat1 = randomz.float();
// randomFloat1 is a float in range [0, 100] to 2 d.p

var randomFloat2 = randomz.float(1,10);
// randomFloat2 is a float in range [1, 10] to 2 d.p

var randomFloat3 = randomz.float(1,10, 3);
// randomFloat3 is a float in range [1, 10]  to 3 d.p



var randomIntegerArray1 = randomz.intArray(5, 1, 30);
// randomIntegerArray1 is an array of 5 integers in range [1, 30]

var randomIntegerArray2 = randomz.floatArray(5, 1, 30, 3);
// randomIntegerArray2 is an array of 5 integers in range [1, 30] to 3 d.p


var randomBoolean = randomz.boolean();
// randomBoolean is a boolean

const array = [1,2,3,4,5];
var randomArray1 = randomz.array(array);
// randomArray1 is an array of 1 element from array

var randomArray2 = randomz.array(array, 3);
// randomArray2 is an array of 3 elements from array


```

### Typescript
```ts

import randomz from 'randomz';

randomInteger: Number = randomz.int();

or

import { int, float, boolean, array, shuffle } from 'randomz';
randomInteger1: Number = int(1, 3);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE)

<!-- ### Keywords -->
