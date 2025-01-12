// const tinderUser=new Object();   //singleton object
const tinderUser={};              //Non singleton
// console.log(tinderUser);   //{}
// console.log(tinderUser);  //{}


tinderUser.id="abc123";
tinderUser.name="John Doe";
tinderUser.isLoggedin=true;

// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    full_name:{
        userFullName:{
            first_name:"Aditya",
            middle_name:"kumar",
            last_name:"Maheshwari",
        }
    }
}
// console.log(regularUser.full_name.userFullName);

const obj1={
    1:"a",
    2:"b",

}
const obj2={
    3:"a",
    4:"b",
}

const obj4={
    5:"a",
    6:"b",
}

// const obj3={obj1,obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//***********assign************* */

//______________________Target__sources__
// const obj3=Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

//*********spread********** */
const obj3={...obj1,...obj2,...obj4};
console.log(obj3);

const user=[
    {
    id:1,
    email:"abc@gmail.com",
    },
    {
    id:1,
        email:"bbc@gmail.com",
    },
    {
    id:1,
        email:"abc@gmail.com",
    },
    {
    id:1,
        email:"abc@gmail.com",
    }

]

console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser))  // Array is returned of keys
console.log(Object.values(tinderUser))  // Array is returned of values
console.log(Object.entries(tinderUser));  
console.log(tinderUser.hasOwnProperty('isLoggedin'));
