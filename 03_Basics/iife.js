//  Immediately Invoked Function Expressions (IIFE)
// Definition: Many times we face problems due to the pollution of global scope, to handle this pollution (varibales, declarations, etc) we use iife 

// standard IIFE
(function coffee() {
    console.log(`DB CONNECTED`);
    
})();

// arrow function iifee
 
(() => {
    console.log(`DB CONNECTED TWO`);
    
})();

// named iffe
((name) => { // here named is parameter 
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO Shri
    
})('Shri');

// Notes: To write 2 iffe's in a single file use ; at the end of each as shown above