//Immediately Invoked Function Expression(IFFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })();

// ( (name)=> {
//     console.log(`DB CONNECTED TO ${name}`);
// }) ("RAMANKANT")
// Global scope ke pollution se problem hoti hai kai baar
// then we use iffy 


const f1=()=>{
    console.log("DB CONNECTED");
}

f1();


(
    ()=>{
        console.log("DB CONNECTED");
    }
)();