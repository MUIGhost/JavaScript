// ****************** SINGLETON *****************//

// Object.create // contructor method (makes a singleton )

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Shri",
    "full name": "Shriyog More",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "shri@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Friday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym]) // string


// jsUser.email = "shriyog@meta.com" // to change the values
// Object.freeze(jsUser) // freezed 
// jsUser.email = "shri@cloud.com" // can't change as freezed above
// console.log(jsUser);

jsUser.greeting  = function(){
    console.log("hello jsUser");
    
}

jsUser.greetingTwo  = function(){
    console.log(`hello jsUser, ${this.name}`); // hello jsUser, Shri
    
}
console.log(jsUser.greetingTwo());



