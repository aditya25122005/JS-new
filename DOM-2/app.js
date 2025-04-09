let h1= document.querySelector('h1')
let h2=document.querySelector('h2')

console.log(h2.innerText);  //getter    inner text --> brainful --> reads CSS
// h2.innerText="mai hu gian"  // setter   
console.log(h2.textContent);  // brainless -->> dont read css
h2.innerText ="<h1> Gian </h1>"
// h2.innerHTML="<h1> Gian </h1>"
// console.log(h2.textContent);






