// function abc(){
//     this.username = "John";
//     this.mob=9999;
// }

// let p1= new abc("sam", 9999);
// let p2= new abc("adi",1111);
// console.log(p1);
// console.log(p2);
// // Classes are syntactical sugar of constructor function
// // Constructor function -- > To create object



// class Person2{
//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }

// }
// let p3= new Person2("aditya",19,"pink");
// let p4= new Person2("abc",20,"blue");
// console.log(p3);
// console.log(p4);

// //Prototype



//--------Direct Calling-----------

//  console.log(typeof null);

// function sam(){
//     console.log(this);
// }
// sam(); 
 
//----------Method Calling / Object Calling-------------
// let obj={
//     a:10,
//     fn:function(){
//         console.log(this); 
//     }
// }
// obj.fn();



// let obj={
//     a:10,
//     fun:function(){
//         console.log(this,'1');
//         function ans(){
//             console.log(this,"2");
            
//         }
//         ans()
        
//     }
// }
// obj.fun();


//------------Constructor-----------

// function sam(name){
// this.name= name
// this.kaam="AAAA";
// }
// let p1= new sam("abc");
// let p2= new sam("def");
