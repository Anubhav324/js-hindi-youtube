//singleton

//object literals
//Object.create
const mySim=Symbol("key1")



const jsuser={
    name:"Anubhav",
    "full name":"Anubhav singh",//this can not be accessed by dot
    [mySim]:"mykey1",//does not make it symbol(type shows string)
    age:19,
    location:"jaipur",
    email:"anubh@google.com",
    isLoggedon:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["mySim"])
// console.log(typeof jsuser.mySim)
// console.log(jsuser[mySim])

jsuser.email="abhi@goog.com"
//Object.freeze(jsuser)
jsuser.greeting= function(){
    console.log("Helllo Js user");//double console ki wajah se undefined aa  rha
}
//console.log(jsuser.greeting);//[Function(anonymous)]
console.log(jsuser.greeting());
jsuser.greetingtwo= function(){
    console.log(`Helllo Js user,${this.name}`);
}
jsuser.greetingtwo();
