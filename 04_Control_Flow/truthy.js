

const userEmail = ""

// if (userEmail) {
//     console.log("Got user Email");
    
// } else{
//     console.log("don't have user Email");
    
// }

// // detection of an empty array 
// if (userEmail.length === 0) {
//     console.log("Array is Empty"); // Array is Empty
    
// }

// // detection of an empty object 
// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty"); // object is empty
// }


// Nullish Coalescing Operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // undefined
val1 = null ?? 10 ?? 15 // 10

console.log(val1);


// Terniary Operator 

// condition ? true : false 

const coffeePrice = 100

coffeePrice <= 80 ? console.log("less than 80") : console.log("more than 80");

