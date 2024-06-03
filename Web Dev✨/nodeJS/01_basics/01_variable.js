const accountId = "345333"
let accountEmail = "preetam@gmail.com"
var password = "1234"
accountCity = "Jaypur"
let accountState;  //value nahi doge toh undefined ho jayega



 accountEmail = "prem@gmail.com"
 password = "1974"
accountCity = "Bhubaneswar"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope 
and functional scope.
*/

console.table([accountId, accountEmail, password, accountCity , accountState])
