var accordionlinks = document.querySelectorAll(".accordion-link")
var header= document.querySelector(".header")
accordionlinks.forEach((accordionlink)=>{
  accordionlink.addEventListener('click',event=>{
    const anyActiveLinks = document.querySelector(".accordion-link.active")
    if(anyActiveLinks && anyActiveLinks!==accordionlink)
    {
      anyActiveLinks.classList.toggle("active")
      anyActiveLinks.nextElementSibling.style.maxHeight=0;

    }

    accordionlink.classList.toggle("active")
    const answer = accordionlink.nextElementSibling;
    if(accordionlink.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
      // header.classList.add("header-color-white")

    }
    else{
      answer.style.maxHeight = 0;
    }
  })

})