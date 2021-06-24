
// generate integer from range
export function int(min: Number = 0, max: Number = 100): Number {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' ) {
       throw new Error('Invalid Inputs')
    }
    // return integer
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

// generate float from range
export function float(min: Number = 0, max: Number = 100, dp: Number=2): Number {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number') {
       throw new Error('Invalid Inputs')
    }
    // return float
    return +(Math.random() * (max - min) + min).toFixed(dp)
}

// generate integer Array from range and length
export function intArray( count: Number = 0, min: Number = 0, max: Number = 100): Number[] {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof count !== 'number'  ) {
       throw new Error('Invalid Inputs')
    }
    let result: Number[] = []
    // loop through "count" times
    for(let i = 0; i < count; i++){
        // add integer to result array
        result.push(int(min, max))
    }
    // return array of integers
    return result
}

// generate float Array from range and length
export function floatArray( count: Number= 0, min: Number= 0, max: Number= 100, dp: Number= 2): Number[] {
    // add runtime check for use in JavaScript
    if (typeof max !== 'number' || typeof min !== 'number' || typeof dp !== 'number' || typeof count !== 'number'  ) {
       throw new Error('Invalid Inputs')
    }
    let result: Number[] = [];
    // loop through "count" times
    for(let i = 0; i < count; i++){
        // add float to result array
        result.push(float(min, max, dp))
    }
    // return array of floats
    return result
}

// generate random boolean
export function boolean(): boolean {
    // return boolean
    return Boolean(Math.round(Math.random()));    
}


// generate array of elements from array and length
export function array(array: any[], count: Number=1): any[] {
    // add runtime check for use in JavaScript
    if (!Array.isArray(array) || typeof count !== 'number'  ) {
        throw new Error('Invalid Inputs')
     }
    // get array length
    const length = array.length;

    let result: any[] = [];
    // loop through "count" times
     for(let i = 0; i < count; i++){
         // generate random integer in range[0, array length]
         const rand = Math.round(Math.random()*(length-1))
         // add integer to resut array 
         result.push(array[rand])
     }
    return result
}


