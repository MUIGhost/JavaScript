// for of 

// ["", "", ""] // strings values in an array
// [{}, {}, {}] // objects in an array

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello, Mom"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United Stated of America")
map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':', value); 
// }

const myObject = {
    game1: 'NFS',
    game2: 'GOW'
}

for (const [key, value] of myObject) {
    console.log(key, ':', value);  // TypeError: myObject is not iterable
}