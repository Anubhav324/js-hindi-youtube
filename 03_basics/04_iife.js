//Immediately Invoked Function Expression(IIFE)
(function chai(){
    //named iife
    console.log(`db connected`);
    
})();//end krna jaruri hai kyunki isko pta nhi context stop kaha krna hai
(  (name) =>{
    console.log(`db connected to ${name}`);
    
})('anubhav')

