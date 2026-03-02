// assignment_1 -------------------------------------

console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(100000.00); // 100000
console.log(parseInt(100000)); // 100000
console.log(2e5 / 2); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(Math.trunc(100000.5252)); // 100000
console.log(Math.floor(100000.3)); // 100000

// assignment_2 -------------------------------------

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// assignment_3 -------------------------------------

console.log(Number.MAX_SAFE_INTEGER.toString().length); //16

// assignment_4 -------------------------------------

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// assignment_5 -------------------------------------

let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

// assignment_6 -------------------------------------

let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10

// assignment_7 -------------------------------------

console.log(Math.floor(Math.random() * 5));; // 0 || 1 || 2 || 3 || 4
