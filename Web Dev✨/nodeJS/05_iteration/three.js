// for of

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

// here we should name the elements greet , num instead of i, j for readability of code.

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
   // console.log(`Each char is ${greet}`);
}


// Map :

// it is known for its unique value and follows the order entered by user .  

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")

console.log(map);

for (const [key , value] of map) {
    //console.log(key , ':-' , value);
}

const myObject = {
    game1 : "ludo" , 
    game2 :  "chess"
}

// for (const [key , value] of  myObject) {
//     console.log(key , ":-" , value);
// }  // here myObject is not iterable

