const myNumbers = [1,2,3]

// reduce using fucntions
// const myTotal = myNumbers.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

// using arrow functions
const myTotal = myNumbers.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 3000
    },
    {
        itemName: "ds course",
        price: 10000
    },
]

const myList = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(myList);
