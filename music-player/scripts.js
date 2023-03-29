let isPlay = false;
let playButton = document.querySelector("#play-button");

playButton.onclick = function() {
    if (isPlay) {
        playButton.innerHTML = `<i class="fas fa-play fa-2x" style="color: #cdc2d0;"></i>`;
    } else {
        playButton.innerHTML = `<i class="fas fa-pause fa-2x" style="color: #cdc2d0;"></i>`;
    }
    isPlay = !isPlay
}