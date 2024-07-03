let toggle=document.querySelector(".toggle");
let togcircle=toggle.querySelector(".circle");

togcircle.addEventListener("click",()=>{
    document.body.classList.toggle("active");

    if(document.body.classList.contains("active"))
        {
            alert("Batman Theme activated");
            document.querySelector(".hero-subheading").innerHTML="I AM"
        }
        else
        {
            alert("Professional Theme activated");
            document.querySelector(".hero-subheading").innerHTML="NAMASKAR, MAIN"
        }
        
})