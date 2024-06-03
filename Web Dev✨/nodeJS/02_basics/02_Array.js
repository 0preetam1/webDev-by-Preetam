const pogo_hero = [ "chhotabheem" , "chutki" , "kalia" , "jaggu"]
const cn_hero = ["tom" , "jerry" , "oggy"]

// pogo_hero.push(cn_hero)

// console.log(pogo_hero);
//  [
//     'chhotabheem',
//     'chutki',
//     'kalia',
//     'jaggu',
//     [ 'tom', 'jerry', 'oggy' ]  
//   ]
// console.log(pogo_hero[4][2]);
//oggy


const all_heros = pogo_hero.concat(cn_hero)

//console.log(all_heros);
// [ 'chhotabheem', 'chutki', 'kalia', 'jaggu', 'tom', 'jerry',
//  'oggy' ]

// Spread Operator
const all_new_heros = [...pogo_hero , ...cn_hero]
//console.log(all_new_heros);

const another_arr = [1,2,3, [4,5,6], [7,8,9,[ 2,4,6 ]]]
const real_another_arr = another_arr.flat(Infinity)
 //console.log(real_another_arr);


 //console.log(Array.isArray("Preetam"))
 //console.log(Array.from("Preetam")); 
 //['P', 'r', 'e','e', 't', 'a','m']
 //console.log(Array.from({name:"Preetam"}));
// Interesting : [] -> empty

let score = 100
let score1 = 200
let score3 = 300

console.log(Array.of(score,score1,score3));
//convverts to a array



