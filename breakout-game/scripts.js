const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

// ball spec
let xPosition = 200;
let yPosition = 200;
let xVector = 1;
let yVector = 1;
let radius = 10;

// 5 row 9 col
let bricks = Array.from({length: 45}, (_, idx) => idx).map(el => ({
    x: 45 + 80 * (el % 9), y: 60 + 30 * Math.floor(el / 9), w: 70, h: 20
}));

function animate(){
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0095dd";
    bricks.forEach(brick => {
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
    })

    // detect collision
    if (xPosition > canvas.width - radius || xPosition < radius) {
        xVector *= -1;
    }
    if (yPosition > canvas.height - radius || yPosition < radius) {
        yVector *= -1;
    }

    // move ball position
    xPosition = xPosition + xVector;
    yPosition = yPosition + yVector;

    // draw ball
    ctx.fillStyle = "#0095dd";
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 0, Math.PI * 2);
    ctx.fill();

    // loop animate
    requestAnimationFrame(animate);
}

animate(); 
