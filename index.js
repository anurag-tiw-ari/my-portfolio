let toggle=document.querySelector(".toggle");
let togcircle=toggle.querySelector(".circle");

togcircle.addEventListener("click",()=>{
    document.body.classList.toggle("active");
})