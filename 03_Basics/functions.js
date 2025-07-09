function myName (){
console.log("S");
console.log("h");
console.log("r");
console.log("i");
}

// myName() // () executes the code, ad without () it just stays there 


// when we create a definition of a function the input we consider are called parameters 
// And when we call that function and pass a value then those are called arguments 
// function addTwoNumbers(num1, num2){ // (num1, num2) these are parameters 

//     console.log(num1 + num2);  
// }

// addTwoNumbers(3,5) // this is giving an argument 

// declaring inside a variable 

function addTwoNumbers(num1, num2){ 
    
    // let result = num1 + num2
    // return result
    // console.log("shri"); // also in functions there is a by default script that after result it wouldn't print anything

    return num1 + num2
    
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

// using if statement 
// Method 1: (Begineers)
// function logInUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter user name");
//         return  // Please enter user name
//     }
//     return `${username} just logged in `
// }

//  // console.log(logInUserMessage("shri")) // shri just logged in 
//  // console.log(logInUserMessage("")) // just logged in 
//  console.log(logInUserMessage()) // undefined just logged in 

// // Method 2: (advanced)
//  function logInUserMessage(username){
//     if(!username){  // ! means not equal to same as above but advanced 
//         console.log("Please enter user name");
//         return  // Please enter user name
//     }
//     return `${username} just logged in `
// }

// console.log(logInUserMessage())


// Considering username cannot be empty 

 function logInUserMessage(username = "Shriyog"){
    if(!username){  // ! means not equal to same as above but advanced 
        console.log("Please enter user name");
        return  // Please enter user name
    }
    return `${username} just logged in `
}

console.log(logInUserMessage()) // Shriyog just logged in 