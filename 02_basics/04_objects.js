//const tinderuser= new Object()///singleton object
const tinderuser = {}
tinderuser.id="123abc"
tinderuser.name="ANUBHA"
tinderuser.isLoggedIn=false
//console.log(tinderuser);
const regularuser={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anubhav",
            lastName:"singh"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);
const obj1={
    1:"A",2:"b"
}
const obj2={
    3:"c",4:"b"
}
//const obj3= {obj1,obj2}//same as array object ke andar object
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);
const users=[
    {
        id:1,
        email:"ft@gmail.com"
    },
    {
        id:3,
        email:"ht@gmail.com"
    },{
        id:2,
        email:"at@gmail.com"
    },
]
// users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));





const course={
    coursename:"javas",
    price:"999",
    courseInstructor:"anubha"
}
//course.courseInstructor
const {courseInstructor:instructor}= course
console.log(instructor);


//json(api)


// {
//     "name":"anubhav",
//     "coursename":"javas",
//     "price":"free"

// }

// ///api array ke format me
// [
//     {},
//     {},
//     {},
// ]




