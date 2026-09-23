// ================================
// MUSIC PLAYER
// ================================

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


// ================================
// VISITOR COUNTER
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const visitorNumber = document.getElementById("visitorNumber");

    if (!visitorNumber) {
        console.error("Visitor counter element not found.");
        return;
    }

    if (typeof Counter === "undefined") {
        console.error("CounterAPI library did not load.");
        visitorNumber.textContent = "0";
        return;
    }

    const counter = new Counter({
        workspace: "herjox0424-blips-team-5642"
    });

    counter.up("first-counter-5642")
        .then(result => {

            console.log("CounterAPI result:", result);

            const count =
                result?.data?.value ??
                result?.value ??
                result?.data?.up_count ??
                0;

            visitorNumber.textContent =
                Number(count).toLocaleString();

        })
        .catch(error => {

            console.error("Visitor counter error:", error);

            visitorNumber.textContent = "0";

        });

});