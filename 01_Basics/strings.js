const name = "shri"
const repoCount = 30

//console.log(name + repoCount + " Value"); // never use this syntax its outdated

// there is a strikethrough on the varibale names in JS which often indicates that the variable or property is deprecated.
// Deprecated means not recommended: Deprecated features are still available but are not the preferred way to do things and may be removed in future versions.

// `` these are called backticks these are used because of string interpolation
// in string interpolation you create place holders "${}" for your variables so that you can directely place your variable values inside it 

console.log(`my name is ${name} and this is my repocunt ${repoCount}`);

const gameName = new String('MUIGHOST-dot-com') 
// console.log(gameName); // [String: 'MUIGhost']

// console.log(gameName.__proto__); // empty 
// console.log(gameName.length); // 8
// console.log(gameName.toLocaleLowerCase()); // muighost
console.log(gameName.charAt(2)); // I (showcases the letter that index position)
console.log(gameName.indexOf('t')); // I (showcases the index position of a letter)

// it doesn't obeys negative values which means no reverse slicing 
const newString = gameName.substring(0, 4) // slicing 
console.log(newString); // MUIG

// it obeys the negative values which means reverse slicing 
const anotherString = gameName.slice(-7, 4) // reverse slicing 
console.log(anotherString); // UIG


const newStringOne = " shri  " // unnecessary space
console.log(newStringOne); // with spaces
console.log(newStringOne.trim()); // without spaces 


const url = "https://shri.com/shri%20more"
console.log(url.replace('%20', '-')); // https://shri.com/shri-more
console.log(url.includes('shri')); // true

console.log(gameName.split('-')); // [ 'MUIGHOST', 'dot', 'com' ]





