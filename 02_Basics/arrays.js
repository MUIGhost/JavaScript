// ****************** ARRAYS ****************** //

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Flash", "Batman"]

const myArray2 = new Array(1,2,3,4)
// console.log(myArray[2]); // 2


// ************** ARRAY METHODS ****************** //

// myArray.push(6) // pushes 6 in array
// myArray.pop(6) // pushes 6 in array

// myArray.unshift(9) // adds 9 to the staring of the array
// myArray.shift(9) // remove the the newely added 9

// console.log(myArray.includes(3)); // true
// console.log(myArray.indexOf(3)); // 3

// const newArray = myArray.join()

// console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray);  // 0,1,2,3,4,5

// ***************** SLICE AND SPLICE ********************** //

console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5 ]. (orginal array)

const myn1 = myArray.slice(1, 3) // Slice 

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArray ); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArray.splice(1, 3) // Splice 
console.log("C ", myArray); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] 





