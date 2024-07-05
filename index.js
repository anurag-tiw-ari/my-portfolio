document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".toggle");
    const togcircle = toggle.querySelector(".circle");
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'active') {
        document.body.classList.add("active");
        document.querySelector(".hero-subheading").innerHTML = "I AM";
    } else {
        document.body.classList.remove("active");
        document.querySelector(".hero-subheading").innerHTML = "NAMASKAR, MAIN";
    }

    togcircle.addEventListener("click", () => {
        document.body.classList.toggle("active");

        if (document.body.classList.contains("active")) {
            alert("Batman Theme activated");
            document.querySelector(".hero-subheading").innerHTML = "I AM";
            localStorage.setItem('theme', 'active');
            document.querySelector(".intro").innerHTML = `
                <div class="videocontainer">
                  <audio id="themeAudio" autplay >
                        <source src="audio.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <div class="black1"> <h1>Welcome to Dark World</h1></div>
                    <video autoplay  muted src="videoplayback.mp4" class="batmanvideo"></video>
                    <h1 class="dynamictext">Development</h1>
                </div>
            `;
            var themeAudio = document.getElementById('themeAudio');
            themeAudio.play();
            startAnimations();
        } else {
            alert("Professional Theme activated");
            document.querySelector(".hero-subheading").innerHTML = "NAMASKAR, MAIN";
            localStorage.setItem('theme', 'default');
        }
    });

    function startAnimations() {
       

        gsap.from(".dynamictext", {
            delay: 4,
            left: "-500px",
            opacity: 0,
            rotate: 60
        });

        gsap.from(".black1 h1", {
            delay: 0.1,
            opacity: 0,
            bottom: "-90"
        });

        let tl = gsap.timeline();

        tl.to(".black1", {
            delay: 0.7,
            duration: 2,
            top: "-100%",
            ease: "expoScale(0.5, 7, none)"
        });

       

        const video = document.querySelector(".batmanvideo");
        video.addEventListener('ended', () => {
            tl.to(".videocontainer", {
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                    document.querySelector(".videocontainer").style.display = "none";
                    gsap.from(".hero-para",
                        {
                            left:"-30rem",
                            delay:"0.1",
                            duration:"1.5",
                            ease: "back.out(1.7)"
                        }
                    )
                }
            });
        });

        function change() {
            document.querySelector(".dynamictext").innerText = "DSA";
        }

        setTimeout(change, 6500);

        function change2() {
            document.querySelector(".dynamictext").innerText = "DESIGN";
        }

        setTimeout(change2, 7500);
    }
});

gsap.from(".hero-para",
    {
        left:"-30rem",
        delay:"0.1",
        duration:"1.5",
        ease: "back.out(1.7)"
    }
)











