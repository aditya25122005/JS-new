var a=10;
function fun(){
    console.log(a);  //10
    var a=20;
    function foo(){
        a++; //21
        console.log(a);  //21
        var a=30;
        console.log(a);
        
                
    }
    foo();
}
fun();
// console.log([]==[]==0);   
// console.log([]==0);  //== compare after type conversion

// console.log(3-"1");


//explicit type conversion

// console.log(1+ +"5");
// const a= Number("5");

// console.log(typeof a);

// const b=Boolean(1);
// console.log(b);
// console.log(typeof b);


// const c=String(7);
// console.log(typeof c);

//difference between == and ===
// == performs type conversion before comparison
// === does not perform type conversion before comparison
// console.log(1==1);
// console.log(1==='1'); //false because of different data types



// console.log([]=="");  //true

// console.log(String([]));

// console.log(Number(""));

// console.log(0=="");  //different adtatype ->  change "" to 0 and return true
// console.log(Number("    "));  //0

// console.log(0=="    ");  //true 
// //No ascii value in JS 

// console.log(""=="    "); //false --> same datatype -> No type Conversion 
// console.log([]==[]); //same datatype --> Address is compared hence false
// console.log([]==0); //different datatype --> type conversion happens hence true
//pass by value   (primitive datatype)
//pass by reference --> //address is passed     (Non Primitive)



//  console.log({} =={});  //false

 //Dfference between undefined not defined null and NaN

 //NaN
// var a="a";
// console.log(a++);


 //Hoisting : It is a default behaviour of Javascript where all the declaration are moved to the top of their scope.

 

 //how JS Engine execute JS file

 //memory creation phase 
 //code execution phase
 //memory deallocation phase    






