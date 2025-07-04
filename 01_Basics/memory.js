// types of memory: Stack (Primitive), Heap (Non - primitive)

let myName = "shri"

let anotherName = myName
anotherName = "Shree"

console.log(anotherName);
console.log(myName);


// how heap works 
let userOne = {
    userEmail: "abc@gmail.com", 
    upi: "abc@ybl"
}
 // heap 
let userTwo = userOne
userTwo.email = "xyz@google.com"

console.log(userOne.email); // xyz@google.com
console.log(userTwo.email); // // xyz@google.com



