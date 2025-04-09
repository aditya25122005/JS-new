// Document object Model
// 1 - Selection
// 2 - Manipulation

// Ways of Selection(5->)
// 1 - get Elements By tag Name (We get array)
// 2 - get Element By id        (we get single element)
// 3 - get Element By Class Name (we get array)
// 4 - query Selector()         (we get single element)
// 5 - query Selector All()     (we get array)

// let allH1 = document.getElementsByTagName("h1")
// console.log(allH1);
// console.log(allH1[0]);

// allH1[1].style.color="blue";
// allH1[1].style.fontSize="30px";
// allH1[1].style.backgroundColor="yellow";
// allH1[1].style.border="2px solid red"

// let IdElement= document.getElementById("vohra");
// console.log(IdElement);

// IdElement.style.color="green";
// IdElement.style.background="black";
// IdElement.style.border="2px solid blue";
// IdElement.style.cssText=`
// color:orange;
// border: 2px solid magenta;
// font-size: 30px;
// background-color:yellow;

let classElenents=document.getElementsByClassName('sam');
for(let item of classElenents){
    item.style.cssText=`
    color:orange;
    border:2px solid pink;
    background-color:yellow;
    `

}
document.querySelector('h2')
document.querySelector('#vohra');
document.querySelector('.sam');

