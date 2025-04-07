/**
 * Math: some function for working number
 * round
 * ceil
 * floor
 * trunc
 * random
 */

let myNum = 3.67

//console.log(Math.round(myNum))
// console.log(Math.ceil(3.03));
// console.log(Math.floor(3.99));

// console.log(Math.trunc(3.02));
// console.log(Math.trunc(3.99));

//Random method would generate a decimal number randomly between 0 and 1
let max_number = 10
let min_number = 1
console.log(Math.round(Math.random().toPrecision(2)*(max_number-min_number)+min_number));

