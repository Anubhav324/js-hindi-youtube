//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
       // console.log("5 is");
        
    }
   // console.log(i);
    
}
for (let i = 0; i <=10; i++) {
    //console.log(`outer loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
       // console.log(`inner loop value ${j} outer loop value is ${i}`); 
      // console.log(i+'*'+j+'='+i*j);
          
    }    
}
const  myarray=["flash","superman","batman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
   // console.log(element);
    
    
}


//break and continue

// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue// break only 1 time 
    }
    console.log(`value of i is ${index}`);
    
}