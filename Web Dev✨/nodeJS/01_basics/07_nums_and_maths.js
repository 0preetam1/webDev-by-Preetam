  const score = 400
  // console.log(score);

  const balance = new Number(100)
  // console.log(balance);

   console.log(balance.toString().length);
  // console.log(balance.toFixed(2));

  const otherNumber = 123.896

  // console.log(otherNumber.toPrecision(2));

  const hundred = 100000000
  // console.log(hundred.toLocaleString('en-IN'));

  // ****************MATH*******************

  // console.log(Math);
  // console.log(Math.abs(-4));
  // console.log(Math.round(5.7));
  // console.log(Math.ceil(4.2));
  // console.log(Math.floor(4.9));
  // console.log(Math.min(4,3,6,9));
  // console.log(Math.max(2,8,9));

  
  // "random" keyword se value 0 se 1 ke bich me aata hai
  console.log(Math.random());
  console.log((Math.random()*10) + 1);
  console.log(Math.floor((Math.random())*10)+ 1);

  const min = 10
  const max = 30

  //Here to get maximum or minimum value & to not to get zero Formula is: "max - min + 1"
  
console.log(Math.floor(Math.random() * (max - min + 1))+min) 

//upar ye sab kiya to get value greater than min


