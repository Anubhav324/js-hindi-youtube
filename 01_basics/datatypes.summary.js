//primitive datatype

const { captureOwnerStack } = require("react");

//7 types: string, number,boolean,null,uundefined,symbol,bigint



//Reference/non primitive

//aarray,objects, functions
// const heros=["ironman","hulk","sipder"]
// let myObj={
//     name:"anubha",
//     age:22,
// }
// const myFunction=function(){
//     console.log("hello");
    
// }
// console.log(typeof myFunction);
//++++++++++++++++++++++++

//stack(primitve),heap(non primitive)
let myName="anubhav"
let anotherName=myName
console.log(myName);
console.log(anotherName);
//stack(copy of variable) heap(reference of original value)
