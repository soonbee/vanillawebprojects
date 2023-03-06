let video = document.querySelector("video");
let playButton = document.querySelector("#play");
let stopButton = document.querySelector("#stop");
let progess = document.querySelector("#progress");
let progessBar = document.querySelector("#progress-bar");
let cursor = document.querySelector("#cursor");
cursor.style.transform = `translate(${-cursor.offsetWidth/2}px, 0)`
let timeDisplay  = document.querySelector("#time-display");
let body = document.querySelector("body");

let isCursorCliking = false;

setInterval(function() {
  let currentTime = Math.round(video.currentTime);
  let min = String(~~(currentTime / 60)).padStart(2, '0');
  let sec = String(currentTime - min * 60).padStart(2, '0');
  timeDisplay.textContent = `${min}:${sec}`;
  if (!isCursorCliking) {
    let percent = video.currentTime / video.duration
    let nextX = percent * progess.offsetWidth - cursor.offsetWidth / 2;
    cursor.style.transform = `translate(${~~nextX}px, 0)`;
  }
}, 200)

video.addEventListener("play", function() {
  playButton.querySelector("div").className = "icon-pause";
});
video.addEventListener("pause", function() {
  playButton.querySelector("div").className = "icon-play";
});

playButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
})
stopButton.addEventListener("click", function() {
  video.pause();
  video.currentTime = 0;
})
body.addEventListener("mouseup", function(e) {
  let halfWidth = cursor.offsetWidth / 2;
  if (isCursorCliking) {
    let nextX = e.x - progess.getBoundingClientRect().x - halfWidth;
    if (nextX > progess.offsetWidth - halfWidth) {
      nextX = progess.offsetWidth - halfWidth;
    }
    if (nextX < -halfWidth) {
      nextX = -halfWidth;
    }
    let percent = (nextX + halfWidth) / progess.offsetWidth;
    video.currentTime = percent * video.duration;
  }
  isCursorCliking = false;
})
progess.addEventListener("mousedown", function(e) {
  isCursorCliking = true;
  let halfWidth = cursor.offsetWidth / 2;
  let nextX = e.offsetX - halfWidth;
  if (nextX > progess.offsetWidth - halfWidth) {
    nextX = progess.offsetWidth - halfWidth;
  }
  if (nextX < -halfWidth) {
    nextX = -halfWidth;
  }
  cursor.style.transform = `translate(${nextX}px, 0)`;
})
cursor.addEventListener("mousedown", function() {
  isCursorCliking = true;
})
body.addEventListener("mousemove", function(e) {
  let halfWidth = cursor.offsetWidth / 2;
  if (isCursorCliking) {
    let nextX = e.x - progess.getBoundingClientRect().x - halfWidth;
    if (nextX > progess.offsetWidth - halfWidth) {
      nextX = progess.offsetWidth - halfWidth;
    }
    if (nextX < -halfWidth) {
      nextX = -halfWidth;
    }
    cursor.style.transform = `translate(${nextX}px, 0)`;
  }
})
