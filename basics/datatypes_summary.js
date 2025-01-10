//primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//reference (Non-Primitive)

// Array, Objects

// const score=100; 
// const isloggedIn=false;
// const outsideTemp=null;


// const id=Symbol('123')
// const anotherId=Symbol('123');
// console.log(id===anotherId); // false

// console.log(typeof booleanIsLoggedIn);

// const Big=12345678912345;
// console.log(Big);


// const heroes=["Bheem","Arjun","Yudhisthir","Nakul","Sahadev"];
// let myobj={
//     name:"hitesh",
//     age:22,
// }

// const f=function(){
//     console.log("Hello Aditya");
// }

// console.log(typeof f);

//**********Memory*********** */
//Stack(primitive), Heap(Non-primitive)
// stack -> Copy
// heap->reference
let name="Aditya";
let sname=name;
sname="Ram";
console.log(sname);
console.log(name);


let obj={
    UPI:123,
    name:"Aditya",
}

let obj2=obj;
obj2.name="Ram";


console.log(obj2.name);
console.log(obj.name);