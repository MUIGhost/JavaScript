// *************** NUMBERS ***************** //

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 23.55
// console.log(otherNumber.toPrecision(3)) // 23.6

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-in')); //1,00,000

// ****************** MATHS ******************** //

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.3)); // 4
// console.log(Math.min(4,3,6,8)); // 3
// console.log(Math.max(4,3,6,8)); // 8

console.log(Math.random()); // any decimal random value 
console.log(Math.random()*10); // decimal shifted to 10
console.log((Math.random()*10) +1 ); // decimal shifted to 10 and added 1

const min = 10
const max = 20

Math.random()

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // here all the values will be above min i.e >10 


