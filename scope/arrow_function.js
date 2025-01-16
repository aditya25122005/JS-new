// const user={
//     name:"Aditya",
//     price: 100000000,


//     welcomeMessage:function(){
//         console.log(`Hello, ${this.name}, Welcome to the world of corporate`);

//     }
// }


// user.welcomeMessage();
// user.name=" Jai Shri Ram"
// user.welcomeMessage();

// console.log(user);
// console.log(this);


// function chai(){
//     let name="Hitesh";
//     console.log(this.name);   //this object ke andar kaam karta hai
    
// }
// chai();


const chai= ()=>{
    let userName="Aditya";
    console.log(this.userName);  //undefined
    console.log(this);  //{}
    
}

// chai();

const add =(num1,num2)=>  (num1+num2);
//curly bracket me return likhna hi padega
//parenthesis me nhi likha padega
// console.log(add(3,6));



const arr=[2,3,5,5,6];
arr.forEach(function(item,index){
    console.log(item+1);
    
})




