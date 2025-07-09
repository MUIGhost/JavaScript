// chceking scope on browser console is different than the global scope in the codespace using node

// global scpope
var c = 300
let a = 300

// block scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner: ", a); // inner:  10
    
}

//console.log(a); // 300
// console.log(b);
//console.log(c);


function one() {
    const username = " Shri"

    function two(){
        const website = "google"
        console.log(username);
        
    }
    console.log(website);

    two()
    
}

// one()

if(true){
    const username = "shri"
    if (username === "shri") {
        const website = " google"
       // console.log(username + website); shri google
        
    }
    // console.log(website); // not executable because cannot access beyond the scope
    
}

// console.log(username); // not executable because outside the scope


// --------------------------- Interesting ----------------------------- //

console.log(addOne(5)) // it gets executed because of function declaration
function addOne(num){
    return num + 1

}

addTwo(5) // Cannot access 'addTwo' before initialization, because here we've declared a function and also holding it in a variable (hoisiting concept)  
const addTwo = function(num){
    return num + 2
}

