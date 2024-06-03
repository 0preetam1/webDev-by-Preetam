// Singleton
//Object.create


// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Preetam",
    "full name" : "Preetam Sahoo",
    age : 21,
    location: "Bhubaneswar",
     // for symbol data type
     [mySym] : "mykey1",
    email : "preetam@google.com",
    isLoggedIn: false,
    LastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "preetam2sahoo@gmail.com"
//console.log(JsUser["email"]);

//if you don't want to change in object by someOne  then use : freeze
//Object.freeze(JsUser)
JsUser.email = "preetam@chatgpt"
//console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS user"
 )};
//string interpolation
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());