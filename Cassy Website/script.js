/* =========================================================
   CASSY WEBSITE
   INTRO → WEBSITE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

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



/* =========================================================
   ENTER BUTTON
========================================================= */

enterButton.addEventListener(
    "click",
    () => {


        /*
         * Prevent double clicking.
         */

        enterButton.disabled = true;



        /*
         * Unmute the video.
         *
         * Because this happens directly
         * from the button click, the browser
         * allows the audio to start.
         */

        video.muted = false;

        video.volume = 1;



        /*
         * Start the video.
         */

        video.play().catch(
            error => {

                console.log(
                    "Video playback:",
                    error
                );

            }
        );



        /*
         * Hide intro.
         */

        intro.classList.add(
            "hidden"
        );



        /*
         * Immediately show
         * the main website.
         */

        website.classList.add(
            "show"
        );

    }
);



/* =========================================================
   NORMAL PARTICLES
========================================================= */

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


    /*
     * Random position.
     */

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;


    /*
     * Random size.
     */

    const size =
        1 +
        Math.random() * 3;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


    /*
     * Random speed.
     */

    particle.style.animationDuration =
        `${8 + Math.random() * 16}s`;


    /*
     * Random animation starting point.
     */

    particle.style.animationDelay =
        `${-Math.random() * 20}s`;


    particles.appendChild(
        particle
    );

}



/* =========================================================
   GLOW PARTICLES
========================================================= */

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


    /*
     * Random position.
     */

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;


    /*
     * Random size.
     */

    const size =
        4 +
        Math.random() * 7;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


    /*
     * Random animation speed.
     */

    particle.style.animationDuration =
        `${5 + Math.random() * 8}s`;


    /*
     * Random starting point.
     */

    particle.style.animationDelay =
        `${-Math.random() * 10}s`;


    particles.appendChild(
        particle
    );

}



/* =========================================================
   SPARKLES
========================================================= */

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


    /*
     * Random sparkle symbol.
     */

    sparkle.textContent =
        sparkleSymbols[
            Math.floor(
                Math.random() *
                sparkleSymbols.length
            )
        ];


    /*
     * Random position.
     */

    sparkle.style.left =
        `${Math.random() * 100}%`;

    sparkle.style.top =
        `${Math.random() * 100}%`;


    /*
     * Remove normal particle styling.
     */

    sparkle.style.width =
        "auto";

    sparkle.style.height =
        "auto";

    sparkle.style.background =
        "transparent";

    sparkle.style.boxShadow =
        "none";


    /*
     * Random size.
     */

    sparkle.style.fontSize =
        `${6 + Math.random() * 10}px`;


    /*
     * Random animation.
     */

    sparkle.style.animationDuration =
        `${5 + Math.random() * 10}s`;

    sparkle.style.animationDelay =
        `${-Math.random() * 10}s`;


    particles.appendChild(
        sparkle
    );

}



/* =========================================================
   VIDEO LOOP SAFETY
========================================================= */

video.addEventListener(
    "ended",
    () => {

        video.currentTime = 0;

        video.play().catch(
            () => {}
        );

    }
);