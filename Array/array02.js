//********************************ARRAY********************** */
const marvelheroes=["Thor", "Ironman","SpiderMan"];
const dc=["SuperMan","Flash","Batman"];
// marvelheroes.push(dc);
// console.log(marvelheroes);

// const conc=marvelheroes+dc;
// console.log(typeof conc);   //string

const sum=marvelheroes.concat(dc);            //concat
console.log(typeof sum);


const allNewHeroes=[...marvelheroes,...dc];  //spread
console.log(allNewHeroes);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
                                                //infinity can also be written
const usable_another_array=another_array.flat(1);
console.log(usable_another_array);

console.log(Array.isArray("Aditya"));
console.log(Array.isArray([1,2,3]));
console.log(Array.from("ADITYA"));
console.log(Array.from({name:"RAMAN"}));  //[]  ->interesting


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]
