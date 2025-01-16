//closure
function fun(){
    var a=10;
    var b=20;
    function foo(){
        console.log(a);
        console.log(b);       
    }
    foo();

}
fun();





//output: 10 20




function fun(){
    var a=10;
    var b=20;

    function foo(){
        a++;
        b++;
        console.log(a);
        console.log(b);
        
        
    }
    return foo;
}
function fun(){
    
}