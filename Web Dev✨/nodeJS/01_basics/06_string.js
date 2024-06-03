const name = "preetam"
const repoCount = 50

//console.log(name + repoCount + "Value");
//use thatics and concept of string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('preetam-f-c')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.italics());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8 ,4)
// console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://preetam.com/preetam%20choudhary"

console.log(url.replace('%20' , '_'));
console.log(url.includes('suraj'));

console.log(gameName.split('-'));