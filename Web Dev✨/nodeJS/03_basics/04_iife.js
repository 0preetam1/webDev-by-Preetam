// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) :

//Global scope ke pollution se bachane ke liye hum local scope me IIFE use karte hain i.e ({})();.

(function chai(){
    // called as named IIFE
    console.log('DB Connected');
})();

((name) => {
    // called as simple IIFE
    console.log(`DB Connected two ${name}`);
})('preetam');
