// ****************** DATES *************** //

let myDate = new Date()
// console.log(myDate.toString()); // Mon Jul 07 2025 07:58:38 GMT+0000 (Coordinated Universal Time
// console.log(myDate.toISOString()); // 2025-07-07T07:58:38.415Z
// console.log(myDate.toJSON()); // 2025-07-07T07:58:38.415Z
// console.log(myDate.toLocaleString()); // 7/7/2025, 7:58:38 AM
// console.log(myDate.toTimeString()); // 07:58:38 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Mon, 07 Jul 2025 07:58:38 GMT

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 6, 7) // in JS months start from 0
// let myCreatedDate = new Date(2025, 6, 7, 1, 38) // Mon, 07 Jul 2025 01:38:00 GMT
let myCreatedDate = new Date("2025-07-07") // 7/7/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); // Mon Jul 07 2025


let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1751876439489 (milliseconds)
// console.log(myCreatedDate.getTime()); // 1751846400000
// console.log(Math.round(Date.now()/1000)); // 1751876555

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})