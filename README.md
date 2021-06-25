# js-randomize

## Table of Contents

 - **[Overview](#overview)**
 - **[Installation](#installation)**
 - **[Usage](#usage)**
 - **[Contributing](#contributing)**
 - **[License](#license)**


## Overview
js-randomize is a simple javascript utility to generate random values in your code.


## Installation
Using npm:
```zsh
$ npm install js-randomize
```


## Usage

```js

const random = require('js-randomize');

var randomInteger1 = random.int();
// randomInteger1 is an integer in range [0, 100] 

var randomInteger2 = random.int(1,10);
// randomInteger2 is an integer in range [1, 10] 


var randomFloat1 = random.float();
// randomFloat1 is a float in range [0, 100] to 2 d.p

var randomFloat2 = random.float(1,10);
// randomFloat2 is a float in range [1, 10] to 2 d.p

var randomFloat3 = random.float(1,10, 3);
// randomFloat3 is a float in range [1, 10]  to 3 d.p



var randomIntegerArray1 = random.intArray(5, 1, 30);
// randomIntegerArray1 is an array of 5 integers in range [1, 30]

var randomIntegerArray2 = random.floatArray(5, 1, 30, 3);
// randomIntegerArray2 is an array of 5 integers in range [1, 30] to 3 d.p


var randomBoolean = random.boolean();
// randomBoolean is a boolean

const array = [1,2,3,4,5];
var randomArray1 = random.array(array);
// randomArray1 is an array of 1 element from array

var randomArray2 = random.array(array, 3);
// randomArray2 is an array of 3 elements from array


```

### Typescript
```ts

import random from 'js-randomize';

randomInteger: Number = random.int();

or

import { int, float, boolean, array, shuffle } from 'js-randomize';
randomInteger1: Number = int(1, 3);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE)

<!-- ### Keywords -->
