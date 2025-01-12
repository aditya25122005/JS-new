//*****************OBJECTS**************** */
//singleton -->  when created from constructor
//other way --> multiple instances of same object 


//object literal
//Object.create     -->Through constructor


//**********SYMBOL******** */

const mysym=Symbol("key1");

const JS_user={
    sname:"Aditya",
    "full Name":"Aditya Maheshwari",
    age:20,
    [mysym]:"MyKey1",                       //way to declare symbol in object
    lastLoggedIn:["MONDAY","FRIDAY"],
    address:{
        street:"123 Main St",
        city:"Anytown",
        state:"CA",
        zip:"12345",
        
        },
    id:123,    
}

// console.log(JS_user.sname);
// console.log(JS_user.address.state);


// let obj2=JS_user;
// console.log(obj2.address.city);


// JS_user.address.city = "Capetown";
// console.log(JS_user.address.city);
// console.log(obj2.address.city);
// console.log(JS_user.lastLoggedIn);
// console.log(JS_user["lastLoggedIn"]);  //Point To Remember

// console.log(JS_user["full Name"]);

// console.log(typeof(JS_user[mysym]));   //not as symbol when used as -->mysym:"MyKey1"
// //***********freeze************* */
// Object.freeze(JS_user);
// JS_user.age=30;            //Value will not change after freeze
// console.log(JS_user.age);  //20

// console.log(JS_user);


JS_user.greeting=function(){
    console.log("Hello JS User");
    
}
console.log(JS_user.greeting());  

// console.log(JS_user.greeting);  //function not executed only reference is back

JS_user.greeting2=function(){
    console.log(`hello JS USER, ${this.sname}`);
    
}
console.log(JS_user.greeting2());
