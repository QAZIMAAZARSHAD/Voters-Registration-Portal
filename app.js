// alert("hello").

 let fontIncrease =document.querySelector('#plus');
 let fontDecrease =document.querySelector('#minus');
 let fontMedium =document.querySelector('#original');


 fontIncrease.addEventListener('click',()=>{
     document.body.style.fontSize = "x-large";
 })


 
 fontDecrease.addEventListener('click',()=>{
    document.body.style.fontSize = "x-small";
})

fontMedium.addEventListener('click',()=>{
    document.body.style.fontSize = "medium";
})