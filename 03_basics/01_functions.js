function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("o");
    
}
//sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    // console.log(number1+number2);//no execution after result
    return number1+number2
}
const result= addTwoNumber(3,4)
// addTwoNumber(3,"a")
//console.log("result:",result);//undefined
function loginuserMessage(username){
    if(username===undefined){
        console.log("please enter name")
        return
    }
    return `${username}just logged in`
}
//console.log(loginuserMessage("anubhav"))
//(...)rest/spread operator
function calculatecartPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatecartPrice(200,400,500,1000));
const user={
    username:"Anubhav",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}//
//handleobject(user)
// handleobject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,300,400,6000]
function returnsecondValue(getArray){
    return getArray[1];
}
console.log(returnsecondValue(myNewArray));
