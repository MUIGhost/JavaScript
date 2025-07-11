// if
// <, >, <=, >=, = (operator assignment), == (equal), != (not equal), === (strict equal, also checks the datatype), !== (anti pattern strict check)

const isUserLoggedIn = true
const tempreature = 42

// if (tempreature === 42){
//     console.log("less than 50");
    
// } else {
//     console.log("temprature is greater than 50");

// }
// console.log("Execute");


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);

// short hand notation 

// const balance = 1000

// if (balance > 500) console.log("test"); console.log("test2"); // Bad practice

// if (balance < 500){
//     console.log("less than");

// } else if (balance < 750){
//     console.log("Less than 500");
 
// } else if (balance < 900){
//     console.log("Less than 750");
    
// } else {
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allowed to buy courses");
       
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user is logged in");
    
}