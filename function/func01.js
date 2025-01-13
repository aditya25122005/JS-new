//**********Function********* */
function print(){
    console.log("ADITTYA");
    console.log("MAHESHWARI");
    
    
}
function add( a,b){
    return a+b;
}

print();
let ans=add(2,3);
console.log(ans);


console.log(add(3,3));
let username="Aditya";
function loggedIn(username="sam"){
    if(username===undefined){  //(!username)
        console.log("Please Enter a userName");
        
    }
    // return;
    return `${username} ,Just logged in.`

}

console.log(loggedIn());

