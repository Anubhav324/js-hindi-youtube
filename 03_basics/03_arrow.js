const user={
    username:"anubhav",
    price:199,

    wlecomemessage:function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this); //current context
        
        
    }
}
// user.wlecomemessage()
// user.username="sam"
// user.wlecomemessage()
//console.log(this);//empty because no context 
//in browser it shows window which is global object in browser

// function chai(){
//     let username="anubhav"
//     console.log(this.usename);//undefined object me kr skte the aise
    
// }
// chai()

const chai=() =>{
    let username="hitesh"
    console.log(this);
}
//chai()
// const addtwo=(num1,num2) =>{
//     return num1+num2
//const addtwo=(num1,num2) => num1+num2
//const addtwo=(num1,num2) => (num1+num2)
const addtwo=(num1,num2) => ({username:"anubhav"})


console.log(addtwo(4,2))
