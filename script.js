const backgroundVideo = document.getElementById("backgroundVideo");
const enterScreen = document.getElementById("enter-screen");

window.enterSite = async function () {
    console.log("ENTER CLICKED");

    try {
        backgroundVideo.muted = false;
        backgroundVideo.volume = 1.0;

        await backgroundVideo.play();

        enterScreen.style.opacity = "0";
        enterScreen.style.pointerEvents = "none";

        setTimeout(() => {
            enterScreen.style.display = "none";
        }, 800);

    } catch (error) {
        console.error("VIDEO ERROR:", error);

        // If browser refuses sound, still start the video
        backgroundVideo.muted = true;
        await backgroundVideo.play();

        enterScreen.style.display = "none";
    }
};