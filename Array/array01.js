//*****************ARRAY******************** */
const myArr=[1,"Aditya",[1,2,3],5,6,7];
// console.log(myArr[2][1]); // Output: 2
myArr.push([1,2],67);
// console.log(myArr);

const books=["RAMAYANA","MAHABHARATA","GEETA","RAMCHARITMANAS"];
// console.log(books[0]); // Output: RAMAYANA
//Array Methods
// books.push(3,4);
// books.push("ManuSmriti");
// books.unshift(9);  // add ele at 0 index
// books.shift();   // remove that added element
// console.log(books.includes(3));
// console.log(books.indexOf("MAHABHARATA"));

// const another=books.join();
// console.log(another);

// console.log(typeof another);

// console.log("A",books);

// const myn1=books.slice(1,3);
// console.log(myn1);

// console.log("B",books);


const myn2=books.splice(1,3);
console.log("C",books);
console.log(myn2);             //splice removes the elements from the array and returns them in an array 







// console.log(books);





// let ans=books.map(function(item,index){
//     return item+" is a great book";
// })
// console.log(ans);



// const newArr=myArr;
// newArr[1]="Tarun";
// console.log(newArr);
// console.log(myArr);


