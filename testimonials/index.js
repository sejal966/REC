// script.js
function playVideo(id) {
    document.getElementById(id).play();
}

function pauseVideo(id) {
    document.getElementById(id).pause();
}

function muteVideo(id, btn) {
    let video = document.getElementById(id);
    video.muted = !video.muted;
    btn.textContent = video.muted ? "Unmute" : "Mute";
}
