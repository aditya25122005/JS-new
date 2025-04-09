let imgEl = document.querySelector('img');

let arrImg =[
    'https://media.istockphoto.com/id/1155675399/photo/pangong-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=iuWa4BWFoycpi-__qg7XIO2bOS5hSv2dzD17L9V555U=',
    'https://media.istockphoto.com/id/1061972184/photo/landscape-of-snow-mountains-and-mountain-road-to-nubra-valley-in-leh-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=sgLXL5_pZZ5jyYiGL1h3mLY2XNYH8cSVuLMZBPLz28c=',
    'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1664298917721-492bc002899b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFkYWtofGVufDB8fDB8fHww'

]
let i=0;
let idd= setInterval( function(){
    imgEl.setAttribute('src', arrImg[i])
    i= (i+1) % arrImg.length;
}, 2000)

setTimeout(function(){
    clearInterval(idd);
},30000)
// clearInterval(idd)