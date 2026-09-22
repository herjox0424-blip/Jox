const video = document.getElementById("backgroundVideo");
const musicButton = document.getElementById("musicButton");
const musicPlayer = document.getElementById("musicPlayer");
const musicIcon = document.getElementById("musicIcon");

musicButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        video.volume = 1;
        video.play();

        musicIcon.textContent = "Ⅱ";
        musicPlayer.classList.add("playing");

        musicButton.setAttribute("aria-label", "Pause music");
    } else {
        video.muted = true;

        musicIcon.textContent = "▶";
        musicPlayer.classList.remove("playing");

        musicButton.setAttribute("aria-label", "Play music");
    }
});