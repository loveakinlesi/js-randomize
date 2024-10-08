# [1.2.0](https://github.com/loveakinlesi/js-randomize/compare/v1.1.1...v2.0.0) (2024-09-14)


### Features

* :technologist: complete revamp of project ([626ebd9](https://github.com/loveakinlesi/js-randomize/commit/626ebd95c911647da5a2453c9dd40aa1f478d08e))

### Breaking Changes

- **Function Renaming**: 
  - `int()` is now `integer()`
  - `array()` is now `sample()`

### New Features

- **Enhanced Randomization Methods**:
  - **`integer()`**: Generates a random integer between `min` and `max`.
  - **`float()`**: Generates a random float between `min` and `max` with precision.
  - **`intArray()`**: Generates an array of random integers.
  - **`floatArray()`**: Generates an array of random floats with precision.
  - **`pick()`**: Picks a single random element from an array.
  - **`sample()`**: Picks a specified number of non-repeating elements from an array.
  - **`shuffle()`**: Shuffles the elements in an array.
  - **`string()`**: Generates a random string of specified length.

- **Improved Error Handling**: More precise error messages for invalid inputs.

### Bug Fixes

- **Enhanced Validation**: Added thorough runtime validation to ensure correct inputs.

## [1.1.1] - 2021-06-25

Initial release.
