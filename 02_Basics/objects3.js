const course = {
    coursename: "learning js",
    price: "99",
    courseteacher: "Shriyog"

}

// course.teacher (one of the methods, but not mostly used)

const {courseteacher: teacher} = course // object de-structure 
console.log(teacher);  // Shriyog

// // this section is for react not for js (for understanding only)
// const navbar = ({company}) => {  // destructing of a object 

// }

// navbar(company = "Meta")


