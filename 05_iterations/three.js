//for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}
const greetings="hello world"
for (const greet of greetings) {
    //console.log(`each character is ${greet}`);
    
}
//maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"united")
map.set('FR',"France")
map.set('IN',"India")//no duplicate

//console.log(map);

// for (const [key,value] of map) {
//     console.log(key,":",value);
    
// }
const myObject={
    'game1':'nfs',
    'game2':'spiderman'
}
for (const [key,value] of myObject) {
   // console.log(key,":",value);
    //objects not iterable this way
}