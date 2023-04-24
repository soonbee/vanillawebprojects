const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

// ball spec
let xPosition = 200;
let yPosition = 200;
let xVector = 1;
let yVector = 1;
let radius = 10;


function animate(){
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
