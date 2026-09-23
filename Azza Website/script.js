const welcome = document.getElementById("welcome");
const azza = document.getElementById("azza");
const home = document.getElementById("home");

const enterButton = document.getElementById("enterButton");
const whoButton = document.getElementById("whoButton");

const music = document.getElementById("music");
const video = document.getElementById("backgroundVideo");


function changeScreen(current, next) {

    current.classList.remove("active");

    setTimeout(() => {
        next.classList.add("active");
    }, 500);

}


/* ========================= */
/* ENTER */
/* ========================= */

enterButton.addEventListener("click", () => {

    // Start music
    music.volume = 0.45;

    music.play().catch(() => {
        console.log("Music could not start automatically.");
    });


    // Start video with sound muted
    video.play().catch(() => {
        console.log("Video could not start.");
    });


    changeScreen(welcome, azza);

});


/* ========================= */
/* WHO'S AZZA */
/* ========================= */

whoButton.addEventListener("click", () => {

    changeScreen(azza, home);

});