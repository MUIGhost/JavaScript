// Primitive types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 


const score = 100
const scoreValue = 123.45
console.log(typeof scoreValue); // number

const isLoggedIn = false
const outSideTemp = null
console.log(typeof outSideTemp); // object ?*
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(typeof bigNumber); // Symbol

console.log(id === anotherID); // false

const bigNumber = 1234567890n //BigInt
console.log(typeof bigNumber);

// Reference Types (Non Primitive)

// Arrays, Objects, Functions 

const people = ["Ramesh", "Mahesh", "Hitesh"] // array

let myObj = {
    name: "Shri",
    age: 21,
} // Object

const myFunction = function(){
    console.log("Hello, Mom");
    
}

console.log(typeof myFunction); // function , but spelled as object function

//Notes: https://262.ecma-international.org/5.1/#sec-11.4.3