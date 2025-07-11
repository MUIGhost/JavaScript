// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     // console.log(element);
    
// }

// console.log(element); // ReferenceError: element is not defined

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner Loop value ${i} and outer loop value ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j); // this print tables from 0 to 10
        
        
//     }
    
// }

// Loops in an array
// let myArray = ["Shriyog", "Aryan", "Shivraj"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {  // never use <= in a array as it will give undefined as well
//     const element = myArray[index];
//     console.log(element);  
// }


// break and continue in loops

// for (let i = 1; i < 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break // goes out of the loop
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue // just detects and continue with the loop
    }
    console.log(`Value of i is ${i}`);
    
}