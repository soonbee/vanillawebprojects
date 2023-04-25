const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

// ball spec
let xPosition = 200;
let yPosition = 200;
let xVector = 1;
let yVector = 1;
let radius = 10;

// paddle spec
let paddleWidth = 80;
let paddleHeight = 10;
let paddleSpeed = 0;
let paddleMovement = 0;

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

    // draw paddle
    ctx.fillStyle = "#0095dd";
    // move paddle position
    paddleMovement += paddleSpeed;
    paddleMovement = Math.max(paddleMovement, paddleWidth / 2 - canvas.width / 2);
    paddleMovement = Math.min(paddleMovement, canvas.width / 2 - paddleWidth / 2);

    // draw paddle
    ctx.fillStyle = "#0095dd";
    ctx.fillRect(
        canvas.width / 2 - paddleWidth / 2 + paddleMovement,
        canvas.height - 20,
        paddleWidth,
        paddleHeight,
    )

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

window.addEventListener("keydown", function(e) {
    let key = e.key || e.keyCode;
    if (key === "ArrowLeft" || key === 37) {
        paddleSpeed = -10;
    } else if (key === "ArrowRight" || key === 39) {
        paddleSpeed = 10;
    }
});

window.addEventListener("keyup", function(e) {
    paddleSpeed = 0;
});

animate(); 
