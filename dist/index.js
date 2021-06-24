"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = exports.boolean = exports.floatArray = exports.intArray = exports.float = exports.int = void 0;
// generate integer from range
function int(min = 0, max = 100) {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // return integer
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.int = int;
// generate float from range
function float(min = 0, max = 100, dp = 2) {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // return float
    return +(Math.random() * (max - min) + min).toFixed(dp);
}
exports.float = float;
// generate integer Array from range and length
function intArray(count = 0, min = 0, max = 100) {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    let result = [];
    // loop through "count" times
    for (let i = 0; i < count; i++) {
        // add integer to result array
        result.push(int(min, max));
    }
    // return array of integers
    return result;
}
exports.intArray = intArray;
// generate float Array from range and length
function floatArray(count = 0, min = 0, max = 100, dp = 2) {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number' || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    let result = [];
    // loop through "count" times
    for (let i = 0; i < count; i++) {
        // add float to result array
        result.push(float(min, max, dp));
    }
    // return array of floats
    return result;
}
exports.floatArray = floatArray;
// generate random boolean
function boolean() {
    // return boolean
    return Boolean(Math.round(Math.random()));
}
exports.boolean = boolean;
// generate array of elements from array and length
function array(array, count = 1) {
    // add runtime check for use in JavaScript
    if (!Array.isArray(array) || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // get array length
    const length = array.length;
    let result = [];
    // loop through "count" times
    for (let i = 0; i < count; i++) {
        // generate random integer in range[0, array length]
        const rand = Math.round(Math.random() * (length - 1));
        // add integer to resut array 
        result.push(array[rand]);
    }
    return result;
}
exports.array = array;
