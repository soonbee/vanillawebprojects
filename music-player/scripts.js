let isPlay = false;
let playButton = document.querySelector("#play-button");
let musicPlayer = document.getElementById("music-player");

playButton.onclick = function() {
    if (isPlay) {
        playButton.innerHTML = `<i class="fas fa-play fa-2x" style="color: #cdc2d0;"></i>`;
        musicPlayer.removeAttribute("play");
    } else {
        playButton.innerHTML = `<i class="fas fa-pause fa-2x" style="color: #cdc2d0;"></i>`;
        musicPlayer.setAttribute("play", "");
    }
    isPlay = !isPlay
}