const name="anubahv"
const repoCount=50
//console.log(name+repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('anubhav-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)//can use negative value

const newStringOne="  anubhav  "
console.log(newStringOne);
console.log(newStringOne.trim());//remove start and end space
 
const url="https;//anubh.com/anubhav%20singh"//browser convert space to %20

console.log(url.replace('%20','-'));


console.log(gameName.split('-'));
