const myHeroes = ["thor", "hulk", "vision"]
const myDc = ["Batman", "flash", "superman"]

//myHeroes.push(myDc)

// console.log(myHeroes); // [ 'thor', 'hulk', 'vision', [ 'Batman', 'flash', 'superman' ] ]
// console.log(myHeroes[3][1]); // flash

// const allHeroes = myHeroes.concat(myDc) // [ 'thor', 'hulk', 'vision', 'Batman', 'flash', 'superman' ]
// console.log(allHeroes);

// Spread operator 

const allNewHeroes = [...myHeroes, ...myDc] // [ 'thor', 'hulk', 'vision', 'Batman', 'flash', 'superman' ]
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]]

const realArray = anotherArray.flat(Infinity) // 
console.log(realArray);


console.log(Array.isArray("Shri")); //false
console.log(Array.from("Shri")); // [ 'S', 'h', 'r', 'i' ]

console.log(Array.from({name: "Shri"})); // [] it will give an empty array because we've to declare whether to convert the keys or the values, in this case it is unable to convert it hence and empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]




