// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1)

// console.log(null > 0);  
// console.log(null == 0);
// console.log(null >= 0);
// The reason is that an equality check == and comparisons < > >= <= work differently. Comparisons convert null to a Number, treating it as 0; thats why (Null >= 0) is true and null>0 is false.

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);
//above all false

//===
console.log("2" === 2);
// above is false because it also checks datatype.Always avoid these type coversion(line10-18)
