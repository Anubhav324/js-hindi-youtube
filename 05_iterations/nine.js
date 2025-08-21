const myNum=[1,2,3]
// const myTotal=myNum.reduce(function (acc,curval){
//     console.log(`acc  ${acc} and cur  ${curval}`);
    
//     return acc+curval
// },0)
const myTotal=myNum.reduce((acc,curval) => acc+curval,0)
console.log(myTotal);
const shoppingCart=[
    {
        itemname:"js course",
        price:1999
    },
     {
        itemname:"py course",
        price:2999
    }, {
        itemname:"c course",
        price:3999
    },
     {
        itemname:"rb course",
        price:7999
    },
]
const prices=shoppingCart.reduce((acc,val) => acc+val.price,0)
console.log(prices);
