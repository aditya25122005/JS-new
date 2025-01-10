const name="Aditya";
const repocount=15;

// console.log(name+repocount+"value");   //outdated

//backticks

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('Newgame');

console.log(gameName.length);
console.log(gameName.endsWith("Game"));
let arr=gameName.split('');
console.log(arr);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
console.log(gameName.substring(3,5));
console.log(gameName.substring(3));
console.log(gameName.toUpperCase());
console.log(gameName.slice(-7,-4));

const newString1="000-aditya-&&&  ";
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.replace("000","Mahe "));

console.log(newString1.includes("&&&"));

console.log(newString1.split("-"));


