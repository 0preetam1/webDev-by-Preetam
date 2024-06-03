// reduce function

const myNums = [1 , 2, 3]

// const myTotal = myNums.reduce(function(acc , currval) {
//     console.log(`accumulator: ${acc} and current value: ${currval}`);
//     return acc + currval
// }, 0)
// here, 0 = initial value
 
const myTotal = myNums.reduce((acc , currval) => acc+currval , 0)

//console.log(myTotal);

const shopingCart = [
    {
        itemName : "js course",
        price    : 2999
    },
    {
        itemName : "c++ course",
        price    : 999
    },
    {
        itemName : "py course",
        price    : 1999
    },
    {
        itemName : "cyber security course",
        price    : 7999
    }
]

const totalPrice = shopingCart.reduce((acc , item) => acc + item.price , 0 )

console.log(totalPrice);