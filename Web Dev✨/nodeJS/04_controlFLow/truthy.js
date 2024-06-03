const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//    Falsy values : false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN

//   Truthy values : "0" , 'false' , " " , [] , {} , function(){} i.e emptyfunction


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0 ){
    console.log("object is empty");
}


//  Some Important statements: (check in google console):
// =>  false == 0 then true.
// =>  false == "" then true.
// =>   0  == "" then true.

// *********************************************************************************************


// Nullish Coalescing Operator (??): null undefined

// in this operator , the null value is avoided and the other value is selected to avoid error in code .

// let val1;
// val1 = 5 ?? 34        //5
// val1 = null ?? 5      //5
// val1 = undefined ?? 10      //10
// val1 = null ?? 5 ?? 10      //5

//console.log(val1);


// TERNIARY OPERATOR
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");


