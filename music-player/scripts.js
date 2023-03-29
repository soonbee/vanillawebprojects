let playButton = document.querySelector("#play-button");
let musicPlayer = document.querySelector("#music-player");
let musicSource = document.querySelector("#music-source");
let musicTitle = document.querySelector("#music-title");
let musicCover = document.querySelector("#music-cover");

let currentIndex = 0;
let sourceList = [
    {title: "hey", src: "music/music-player_music_hey.mp3", img: "images/hey.jpeg"},
    {title: "summer", src: "music/music-player_music_summer.mp3", img: "images/summer.jpeg"},
    {title: "ukulele", src: "music/music-player_music_ukulele.mp3", img: "images/ukulele.jpeg"},
];

playButton.onclick = function() {
    if (musicSource.paused) {
        musicSource.play();
    } else {
        musicSource.pause();
    }
};

window.addEventListener("load", function() {
    musicTitle.textContent = sourceList[currentIndex].title;
    musicCover.src = sourceList[currentIndex].img;
    musicSource.src = sourceList[currentIndex].src;
});

musicSource.onplay = function() {
    playButton.innerHTML = `<i class="fas fa-pause fa-2x" style="color: #cdc2d0;"></i>`;
    musicPlayer.setAttribute("play", "");
};
musicSource.onpause = function() {
    playButton.innerHTML = `<i class="fas fa-play fa-2x" style="color: #cdc2d0;"></i>`;
    musicPlayer.removeAttribute("play");
};

document.querySelector("#backward-button").onclick = function() {
    currentIndex = (currentIndex + 3 - 1) % 3;
    musicTitle.textContent = sourceList[currentIndex].title;
    musicCover.src = sourceList[currentIndex].img;
    musicSource.src = sourceList[currentIndex].src;
    musicSource.play();
};
document.querySelector("#forward-button").onclick = function() {
    currentIndex = (currentIndex + 3 + 1) % 3;
    musicTitle.textContent = sourceList[currentIndex].title;
    musicCover.src = sourceList[currentIndex].img;
    musicSource.src = sourceList[currentIndex].src;
    musicSource.play();
};
