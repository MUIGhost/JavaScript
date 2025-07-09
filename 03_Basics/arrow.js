
const user = {
    username: "Shri",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage() // Shri, welcome to website
// user.username = "John"
// user.welcomeMessage() // John, welcome to website
//console.log(this);

// function coffee() {
//     let username = "Shriyog"
//     console.log(this.username); // undefined 
    
// }

// coffee()

// const coffee = function(){
//     let username = " Shriyog"
//     console.log(this.username); // undefined
     
// }
// coffee()

const coffee = () => {
    let username = " Shriyog"
    console.log(this); // {}
     
}
// coffee()

// basic arrow function
// syntax of arrow function () => {}
// Explicit return

// const addTwom = (num1, num2) => {
//     return num1 + num2
// } 

// console.log(addTwom(3,4));

// Implicit return 

// const addTwom = (num1, num2) => (num1 + num2)

// console.log(addTwom(3,4));


// Notes: If curly braces {} are used then writing return is must
// Notes: If parenthisis () are used then you don't have to write return 

// const addTwom = (num1, num2) => {username: "Shriyog"} // wrong way to return a object 

const addTwom = (num1, num2) => ({username: "Shriyog"}) // correct way to return a object is to wrap the {} in ()
console.log(addTwom(3,4));


