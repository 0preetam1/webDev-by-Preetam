const user = {
    username : "Preetam",
    price : 999 ,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "suraj"
// user.welcomeMessage()
// console.log(this);  //{}

// function chai(){
//      let username = "Preetam"
//      console.log(this);
// }
// chai()


// function chai(){
//     let username = "Preetam"
//     console.log(this.username);  //undefined -> function ke andar "this" function nhi kaam kar raha Hai.
// }
// chai()
  

//arrowFunction

// const chai = () => {
//     let username = "Preetam"
//     console.log(this);
// }
// chai()  
// uyndefined

// BROWSER KE ANDAR GLOBAL EXECUTION CONTEXT KA `THIS` VALUE "WINDOW OBJECT" AATA HAI . DIFFERENT ENVIRONMENT MAIN ISS KA VALUE DIFFERENT HOTA HAI.

// const addTwo = (num1 , num2) => {
//     return num1 + num2 // this is called imlicit return 
// }


// const addTwo = (num1 , num2) =>  num1 + num2  // this is known as explicit return 


// const addTwo = (num1 , num2) =>  (num1 + num2)  

const addTwo = (num1 , num2) =>  ({username : "Preetam"}) 

console.log(addTwo(2,8));

// const myArray = [2,3,4,5,6]

// myArray.forEach()
