const intro =
    document.getElementById("intro");

const enterButton =
    document.getElementById("enterButton");

const website =
    document.getElementById("website");

const video =
    document.getElementById("backgroundVideo");

const particles =
    document.getElementById("particles");



enterButton.addEventListener(
    "click",
    () => {



        enterButton.disabled = true;




        video.muted = false;

        video.volume = 1;




        video.play().catch(
            error => {

                console.log(
                    "Video playback:",
                    error
                );

            }
        );




        intro.classList.add(
            "hidden"
        );



      

        website.classList.add(
            "show"
        );

    }
);


const PARTICLE_COUNT = 100;


for (
    let i = 0;
    i < PARTICLE_COUNT;
    i++
) {


    const particle =
        document.createElement("span");


    particle.className =
        "particle";



    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;



    const size =
        1 +
        Math.random() * 3;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


  

    particle.style.animationDuration =
        `${8 + Math.random() * 16}s`;




    particle.style.animationDelay =
        `${-Math.random() * 20}s`;


    particles.appendChild(
        particle
    );

}

const GLOW_PARTICLE_COUNT = 25;


for (
    let i = 0;
    i < GLOW_PARTICLE_COUNT;
    i++
) {


    const particle =
        document.createElement("span");


    particle.className =
        "glow-particle";




    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;



    const size =
        4 +
        Math.random() * 7;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;



    particle.style.animationDuration =
        `${5 + Math.random() * 8}s`;



    particle.style.animationDelay =
        `${-Math.random() * 10}s`;


    particles.appendChild(
        particle
    );

}




const sparkleSymbols = [

    "✦",
    "✧",
    "⋆",
    "✧",
    "·"

];


const SPARKLE_COUNT = 35;


for (
    let i = 0;
    i < SPARKLE_COUNT;
    i++
) {


    const sparkle =
        document.createElement("span");


    sparkle.className =
        "particle";



    sparkle.textContent =
        sparkleSymbols[
            Math.floor(
                Math.random() *
                sparkleSymbols.length
            )
        ];



    sparkle.style.left =
        `${Math.random() * 100}%`;

    sparkle.style.top =
        `${Math.random() * 100}%`;




    sparkle.style.width =
        "auto";

    sparkle.style.height =
        "auto";

    sparkle.style.background =
        "transparent";

    sparkle.style.boxShadow =
        "none";



    sparkle.style.fontSize =
        `${6 + Math.random() * 10}px`;




    sparkle.style.animationDuration =
        `${5 + Math.random() * 10}s`;

    sparkle.style.animationDelay =
        `${-Math.random() * 10}s`;


    particles.appendChild(
        sparkle
    );

}

video.addEventListener(
    "ended",
    () => {

        video.currentTime = 0;

        video.play().catch(
            () => {}
        );

    }
);