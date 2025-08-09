let a=300
if (true){
    let a=10
    const b=20
    var c=10
}
//console.log(a);
//console.log(b);

//console.log(c);//var should not come out but it came
function one(){
    const username="anubhav"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website);//loop ke bahar chote loop ke bahar
    two()

}
//one()
if (true){
    const username="anubhav"
    if (username==="anubhav"){
        const website="youtube"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);***

//+++++++++++++++++interseting
addone(5)// no error
function addone(num){
    return num+1
}
//addone(5)
addtwo(5)//error
const addtwo=function(num){
    return num+2
}
//addtwo(5)