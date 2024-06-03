// Dates

let myDate = new Date()
// console.log(myDate);
// O/P:  2024-05-20T07:41:12.401Z
// console.log(myDate.toString());
// O/P: Mon May 20 2024 13:11:12 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());
// O/P:  Mon May 20 2024
// console.log(myDate.toISOString());
// O/P: 2024-05-20T07:41:12.401Z
// console.log(myDate.toJSON());
// O/P: 2024-05-20T07:41:12.401Z
// console.log(myDate.toLocaleDateString());
// O/P:  20/5/2024
//console.log(myDate.toLocaleString());
// O/P:  20/5/2024, 1:11:12 pm
//console.log(myDate.toLocaleTimeString());
// O/P:   1:11:12 pm
//console.log(typeof myDate); 
//object

//let myCreatedDate = new Date(2023 , 0 , 20)
//let myCreatedDate = new Date(2024 , 0 , 20 , 5 , 30)
//let myCreatedDate = new Date("2024-05-20")
let myCreatedDate = new Date("02-12-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now

// console.log(myTimeStamp());
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    year: "2-digit"

})