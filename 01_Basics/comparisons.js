console.log("2" > 1);
console.log("02" > 1);

// be advised! below conversions are subjected to confusion 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true 

// be advised! below conversions are subjected to confusion 
console.log(undefined == 0); // false 
console.log(undefined >= 0); // false 
console.log(undefined > 0); // false 


// === (strict check)
console.log("2" == 2); // true 
console.log("2" === 2); // false 