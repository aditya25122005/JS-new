//***********************DATE************** */
// let mydate=new Date();
// console.log(mydate);

// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.getFullYear());
// console.log(mydate.getMilliseconds());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getMonth());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

// let newdate=new Date(2024,0,23,5,3);
// console.log(newdate.toLocaleString());

// let newdate1=new Date("01-01-2025");
// console.log(newdate1.toLocaleString());


// let mytimeStamp=Date.now();
// console.log(mytimeStamp);
// console.log(newdate1.getTime());

// console.log(Math.floor(Date.now()/1000));


let newdate2=new Date();
// console.log(newdate2);
// console.log(newdate2.getDay());
// console.log(newdate2.getDate());
// console.log(newdate2.getHours());
// console.log(newdate2.getMinutes());

let obj=newdate2.toLocaleString("default",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    
    })
    console.log(obj);
    






















