// THE SCOPE UNDER LOOP IS CALLED BLOCK SCOPE AND OUTSIDE OF LOOP IS CALLED GLOBAL SCOPE.

//var c = 300
let a = 400
if(true){
    let a = 10
    const b = 20
    //var c = 30

    //console.log("Inner:",a);
}

//console.log(a);
//console.log(b);
//console.log(c); //30
  
// "var" keyword loop ke bahar bhi execute ho raha hai , thats why we use "let" , "const" keyword.


function one(){
    const username = "Preetam"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website); not possible
    two()
}
 // one()

 if(true){
    const username = "Preetam"
    if(username === "Preetam"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
 }
// console.log(username);

//********************INTERESTING******************* */hoisting case:

console.log(addOne(5));
function addOne(num){
    return num + 1
}

//In above type function declaration we can acess functiion call from top and below .

//But below function declaration  i.e when function is declared by a variable , we can only access it from below . If you acess it from upper it will show error.


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7));

