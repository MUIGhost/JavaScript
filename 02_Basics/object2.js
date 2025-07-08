// const teamsUser = new Object()  // {} singleton object
 const teamsUser = {} // {} non singleton object 

 teamsUser.id = "1234xyz"
 teamsUser.name = "Shri"
 teamsUser.isLoggedIn = false

//  console.log(teamsUser);
 
//objects inside objects
const regUser ={
    email: "abc@google.com",
    fullname: {
        userfullname: {
            firstname: "shriyog",
            lastname: "more",
        }
    }
}

//objects inside objects
// console.log(regUser.fullname); // { userfullname: { firstname: 'shriyog', lastname: 'more' } }
// console.log(regUser.fullname.userfullname); // { firstname: 'shriyog', lastname: 'more' }
// console.log(regUser.fullname.userfullname.lastname); // more

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1,obj2) 
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} // using spread operator 
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

users[1].email
console.log(teamsUser); // { id: '1234xyz', name: 'Shri', isLoggedIn: false }

console.log(Object.keys(teamsUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(teamsUser)); // [ '1234xyz', 'Shri', false ]
console.log(Object.entries(teamsUser)); // [ [ 'id', '1234xyz' ], [ 'name', 'Shri' ], [ 'isLoggedIn', false ] ]


console.log(teamsUser.hasOwnProperty('isLoggedIn')); // true
