const coding=["js","py","rb","java","cpp"]
// coding.forEach(function (item) {
//     console.log(item);
    
// }  )

coding.forEach( (item) =>{
    //console.log(item);
    
}) 
//object inside array
const myCoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"pythin",
        languagefilename:"py"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
]
myCoding.forEach((item) =>{
    console.log(item.languagename);
    
})

