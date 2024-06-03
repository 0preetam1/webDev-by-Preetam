  // IF

//   const isUserloggedIn = true
//   const temperature = 41

//   if ( temperature == 40 ){
//     console.log("less than 50");
//   } else {
//     console.log("temperature is greater than 50");
//   }

//   console.log("execute");
  // <,>,>= , <= , == , != , === ,!==

//   const score = 200

//   if(score > 100){
//     let power = "fly" 
//     console.log(`user power ${power}`);
//   }
//   console.log(`user power ${power}`);

const balance = 1000 

// if(balance > 500) console.log("test") ; //,console.log("test2"); Ek sath dono ko comma deke likhna not good practice

// if(balance > 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else {
//     console.log("greater than 750");
// }
    

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

 if(UserloggedIn && debitCard){
    console.log("Allow to buy course");
 }

 if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
 }