//**********Function***** */

function calculateCartprice(...num1){
    return num1;
}

console.log(calculateCartprice(200,400,500));

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

    

}
handleObject(user);


const arr=[1,2,3,4,5];
function myfunc(getArray){
    return getArray[2];
}
console.log(myfunc(arr));
