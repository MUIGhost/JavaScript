// ********************* SHOPPING CART PROBLEM **************************** //

// function calculateCartPrice(...num1){ // ... rest operator (also known as spread operator)
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 500));  // [ 200, 300, 500 ] returns in an array

// Interview question
function calculateCartPrice(val1, val2, ...num1){ // ... rest operator (also known as spread operator)
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 1000));  // [ 500, 1000 ]

const user = {
    username: "shri",
    prices: 2000,
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)

handleObject({
    username: "John",
    price: 399
})

const myArray = [200, 400, 500, 1000]

function returnSecondValue(getArray){
    console.log(`The second number in the array is ${getArray[1]}`);
    
    //return getArray[1]
    
}
console.log(returnSecondValue(myArray)); // The second number in the array is 400

 //console.log(returnSecondValue(myArray));
 