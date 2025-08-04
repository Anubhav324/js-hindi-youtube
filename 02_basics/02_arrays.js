const marvel_heros=["thor","spiderman","ironman"]
const dc_heros=["superan","flash","batman"]
//marvel_heros.push(dc_heros)//array ke andar array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_arrays=[...marvel_heros,...dc_heros]
//console.log(all_new_arrays);
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_arrar= another_array.flat(Infinity)
// console.log(real_another_arrar);


console.log(Array.isArray("anubhav"));
console.log(Array.from("anubha"));
console.log(Array.from({name:"anubha"}));//interseting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

