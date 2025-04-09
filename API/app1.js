function fun(){
    let condn = true;
    return new Promise((resolve, reject)=>{
        if(condn){
            resolve("Success");
        }else{
            reject("Failure");
        }
    })
}
fun()
.then((msg)=>{

    console.log("You are in 1st then");
    return msg;
})
.then((msg)=>{
    console.log("You are in 2nd then")
})
.catch((msg)=>{
    console.log("You are in catch");
} )      


console.log("Hello");
console.log(fun());
