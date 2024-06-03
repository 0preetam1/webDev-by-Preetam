

function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("e");
    console.log("e");
    console.log("t");
    console.log("a");
    console.log("m");
}

// sayMyName()  : it is called "reference"
// function declare karte waqt jo value rehta hai ussse "parameter" and jo call karte waqt rehta hai usse "arguement" bolte hain

// function addTwoNumbers(number1 , number2){
//      console.log(number1 + number2);
// }
// addTwoNumbers(2 , 5)

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers( 6 , 7)
//console.log("Result : " , result);

function logInUserMessage (username = "sam"){
    // if(username === undefined)
        if(!username){
        console.log("Please enter a username");
        return
    }
      return `${username} just logged in`
}

// console.log(logInUserMessage("hitesh"));
//console.log(logInUserMessage());



// FUNCTIONS WITH OBJECTS AND ARRAY : 

function calculateCartPrice(val1, val2 ,...num1){
    return num1 
}

//console.log(calculateCartPrice(200 , 300 , 400 , 500 ));

const user = {
    username : "Preetam",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject(
    {
        username : "sabyasachi",
        price : 399
    }
)

const myNewArray = [199 , 399, 411 , 898]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([199 , 399, 411 , 898]));