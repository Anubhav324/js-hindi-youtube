// const userEmail="abhi@1.ai"
// if (userEmail) {
//     console.log("got email");
    
// }else{
//     console.log("dont have email");
    
// }
//falsy value

//false,0,-0, BigInt 0n,"",null,undefined,nan

//truthy value
//"0",'false'," ",[],{},function(){}
// const userEmail=[]
// // if (userEmail.length===0) {
// //     console.log("array is Empty");
    
// // }
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
   // console.log('object is empty');
    
}

//Nullish Coalescing Operator(??): null defined

let val1;
//val1=5??10
//val1=null??1
//val1=undefined ?? 15
val1=null??10??15

//console.log(val1);


//Terniary Operator

//condition ? true:false
const iceTeaPrice=100
iceTeaPrice <=80 ?  console.log("less than 80"):console.log("greater than 80");

