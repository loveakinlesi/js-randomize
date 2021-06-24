"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.array = exports.boolean = exports.floatArray = exports.intArray = exports.float = exports.int = void 0;
// generate integer from range
function int(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // return integer
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.int = int;
// generate float from range
function float(min, max, dp) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    if (dp === void 0) { dp = 2; }
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // return float
    return +(Math.random() * (max - min) + min).toFixed(dp);
}
exports.float = float;
// generate integer Array from range and length
function intArray(count, min, max) {
    if (count === void 0) { count = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    var result = [];
    // loop through "count" times
    for (var i = 0; i < count; i++) {
        // add integer to result array
        result.push(int(min, max));
    }
    // return array of integers
    return result;
}
exports.intArray = intArray;
// generate float Array from range and length
function floatArray(count, min, max, dp) {
    if (count === void 0) { count = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    if (dp === void 0) { dp = 2; }
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number' || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    var result = [];
    // loop through "count" times
    for (var i = 0; i < count; i++) {
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
function array(array, count) {
    if (count === void 0) { count = 1; }
    // add runtime check for use in JavaScript
    if (!Array.isArray(array) || typeof count !== 'number') {
        throw new Error('Invalid Inputs');
    }
    // get array length
    var length = array.length;
    var result = [];
    // loop through "count" times
    for (var i = 0; i < count; i++) {
        // generate random integer in range[0, array length]
        var rand = Math.round(Math.random() * (length - 1));
        // add integer to resut array 
        result.push(array[rand]);
    }
    return result;
}
exports.array = array;
// generate shuffled array from array
function shuffle(array) {
    // add runtime check for use in JavaScript
    if (!Array.isArray(array)) {
        throw new Error('Invalid Inputs');
    }
    // get array length   
    var length = array.length;
    var result = [];
    // List of value indices
    var list = [];
    // loop through "array length" times
    for (var i = 0; i < length; i++) {
        // generate random integer in range[0, array length]
        var x = int(0, length - 1);
        // check if value is already in list
        while (list.includes(x)) {
            // if already in list, generate new value
            x = int(0, length - 1);
        }
        // if not, add to list
        list.push(x);
    }
    // loop through "list length" times
    for (var i = 0; i < length; i++) {
        // ad to array value to result
        result.push(array[list[i]]);
    }
    // return shuffled array
    return result;
}
exports.shuffle = shuffle;
