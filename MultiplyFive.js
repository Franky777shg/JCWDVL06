let start = -1; // 10 * (5 ^ 2) = 250

// "3"

// using **
// let result = start * 5 ** start.toString().length;

// using Math.pow()
let result = start * Math.pow(5, Math.abs(start).toString().length);

// console.log(start.toString().length);

console.log(result);
