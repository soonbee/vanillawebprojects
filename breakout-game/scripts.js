const showButton = document.querySelector("#show-rules");
const closeButton = document.querySelector("#close");
const manual = document.querySelector("aside");
const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

let score = 0;

// ball spec
let ballPositionX = 400;
let ballPositionY = 500;
let ballSpeed = 3;
let ballVectorX = -1;
let ballVectorY = -1;
let ballRadius = 10;

// paddle spec
let paddleWidth = 80;
let paddleHeight = 10;
let paddleSpeed = 0;
let paddleMovement = 0;

// brick spec
let bricks = [];
let row = 5;
let col = 9;
let brickWidth = 70;
let horizontalGap = 10;
let brickHeight = 20;
let verticalGap = 10;

function reset() {
    bricks = Array.from({length: row * col}, (_, idx) => idx).map(el => ({
        x: 45 + (brickWidth + horizontalGap) * (el % col),
        y: 60 + (brickHeight + verticalGap) * Math.floor(el / col),
        w: brickWidth,
        h: brickHeight,
    }));
    score = 0;
}

function animate() {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0095dd";
    bricks.forEach(brick => {
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
    });

    // move paddle position
    paddleMovement += paddleSpeed;
    paddleMovement = Math.max(paddleMovement, paddleWidth / 2 - canvas.width / 2);
    paddleMovement = Math.min(paddleMovement, canvas.width / 2 - paddleWidth / 2);

    // draw paddle
    ctx.fillStyle = "#0095dd";
    let paddlePositionX = canvas.width / 2 - paddleWidth / 2 + paddleMovement
    let paddlePositionY = canvas.height - 20;
    ctx.fillRect(
        paddlePositionX,
        paddlePositionY,
        paddleWidth,
        paddleHeight,
    );

    // move ball position
    ballPositionX = ballPositionX + ballVectorX * ballSpeed;
    ballPositionY = ballPositionY + ballVectorY * ballSpeed;

    // draw ball
    ctx.fillStyle = "#0095dd";
    ctx.beginPath();
    ctx.arc(ballPositionX, ballPositionY, ballRadius, 0, Math.PI * 2);
    ctx.fill();

    // detect paddle collision
    if (ballPositionX >= paddlePositionX && ballPositionX <= paddlePositionX + paddleWidth) {
        if (ballPositionY + ballRadius >= paddlePositionY) {
            ballVectorY *= -1;
        }
    }

    // detect edge collision
    if (ballPositionX >= canvas.width - ballRadius || ballPositionX <= ballRadius) {
        ballVectorX *= -1;
    }
    if (ballPositionY >= canvas.height - ballRadius) {
        ballVectorY *= -1;
        reset();
    }
    if (ballPositionY <= ballRadius) {
        ballVectorY *= -1;
    }

    // detect brick collision
    let collided = -1;
    bricks.forEach((brick, idx) => {
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
        if (brick.x <= ballPositionX && ballPositionX <= brick.x + brick.w) {
            if (brick.y - ballRadius <= ballPositionY && ballPositionY <= brick.y + brick.h + ballRadius) {
                ballVectorY *= -1;
                collided = idx;
            }
        }
        if (brick.y <= ballPositionY && ballPositionY <= brick.y + brick.h) {
            if (brick.x - ballRadius <= ballPositionX && ballPositionX <= brick.x + brick.w + ballRadius) {
                ballVectorX *= -1;
                collided = idx;
            }
        }
    });
    if (collided >= 0) {
        bricks.splice(collided, 1);
        score += 1;
    }

    ctx.fillStyle = "#0095dd";
    ctx.font = "20px Arial, Helvetica, sans-serif";
    ctx.fillText(`Score: ${score}`, 700, 30);

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

showButton.onclick = function() {
    manual.classList.add("show");
};
closeButton.onclick = function() {
    manual.classList.remove("show");
};

reset();
animate(); 
