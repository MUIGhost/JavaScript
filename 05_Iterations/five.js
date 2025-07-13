const coding = ["js", "rudby", "cpp", "go"]

// normal function

// coding.forEach(function (item){
//      console.log(item);
     
// } )

// arrow function

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// printing its item, index, arrary
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "GoLang",
        languageFile: "go"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})