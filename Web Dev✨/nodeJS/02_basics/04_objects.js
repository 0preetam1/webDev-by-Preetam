// Singleton Object
//const tinderUser1 = new Object()

// NonSingleton Object
const tinderUser = {}

tinderUser.id = "abs143"
tinderUser.name = "Hardy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

 const regularUser = {
    email :" preetam2sahoo@gmail.com" ,
    fullname : {
        userfullname:{
            firstname: "Preetam",
            lastname: "sahoo"
        }
    },
    isLoggedIn : "false"
 }

 //console.log(regularUser.fullname.userfullname.firstname);


 const obj1 = { 1: "a" , 2: "b"}
 const obj2 = { 3: "a" , 4: "b"}
 const obj3 = { 5: "a" , 6: "b"}

 //const obj4 = Object.assign({}, obj1 , obj2 , obj3)
 const obj4 = {...obj1 , ...obj2 , ...obj3}

 //console.log(obj4);

 const users = [
    {
        id : "1",
        email: "p@gmail.com"
    },
    {
        id : "1",
        email: "p@gmail.com"
    },
    {
        id : "1",
        email: "p@gmail.com"
    }
 ]

 users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('name'));


 // Object de-structure :

 const course = {
    coursename : "js in hindi",
    price : "999" ,
    courseInstructor : "Preetam"
 }

 //course.courseInstructor

 const {courseInstructor : instructor } = course

 //console.log(courseInstructor);
 console.log(instructor);

 // json is nothing but as java script object

//  {
//     "name" : "Hitesh",
//     "course" : "chai aur javascript" , 
//     "price" : "free"
//  }

[
    {},
    {},
    {}
]