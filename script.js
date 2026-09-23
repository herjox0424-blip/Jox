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

const counter = new Counter({
    workspace: "herjox0424-blips-team-5642"
});

const visitorNumber = document.getElementById("visitorNumber");

counter.up("first-counter-5642")
    .then(result => {
        visitorNumber.textContent = result.value.toLocaleString();
    })
    .catch(error => {
        console.error("Visitor counter error:", error);
        visitorNumber.textContent = "—";
    });