// for (let i = 0; i < 10; i++) {
//    console.log(i);    
// }
// //filter out
// const arr=[34,67,23,12];
// const ans=arr.filter(function(item,index){
//     return item>20;
// })

// console.log(ans);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }
// //reverse a number
let num=12345;
let r=0;
let rem;
while(num>0){
    rem=num%10;
    r= r*10 + rem;
    num=Math.floor(num/10);
}
console.log(r);
//2d array
// let mat=[[1,2,3],[4,5,6],[7,8,9]];
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
//         console.log(mat[i][j]);       
//     }
// }
//keywords
// console.log("***************************");

// const arr1=[2,4,4,8,11,12,14,16];
// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
//     if(arr1[i]%2==1){
//         break;              //break
//     }
    
    
// }

// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2==1){
//         continue;         //continue
//     }
//     else{
//         console.log(arr1[i]);
        
//     }
// }


//******************************************** */


let score=1;
do{
    console.log(`score is ${score}`);
    score++;
    
}while (score<=10);
    
