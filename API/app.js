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
    console.log("jksj");
})
.catch((msg)=>{
    console.log("aaaa");
} )      


console.log("Hello");
console.log(fun());
