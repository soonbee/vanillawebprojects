let remainTime = 0;
let remainTimeEl = document.querySelector("#remain-time");
let score = 0;
let timeBonus = 0;
let answer = "";
function* RandomWordGenerator() {
    const words = [
        "sigh",
        "tense",
        "airplane",
        "ball",
        "pies",
        "juice",
        "warlike",
        "bad",
        "north",
        "dependent",
        "steer",
        "silver",
        "highfalutin",
        "superficial",
        "quince",
        "eight",
        "feeble",
        "admit",
        "drag",
        "loving"
    ].sort(() => Math.random() - 0.5);
    let cur = 0;
    while (cur < words.length) {
        yield words[cur++];
    }
}
const randomWordGenerator = RandomWordGenerator();

function startGame() {
    remainTime = 10;
    answer = randomWordGenerator.next().value;   
    document.querySelector("#game-target").textContent = answer;
    remainTimeEl.textContent = remainTime;
    let iid = setInterval(() => {
        remainTime--;
        if (remainTime < 0) {
            clearInterval(iid);
            endGame();
        }
        remainTimeEl.textContent = remainTime;
    }, 1000);
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#end").classList.add("hide");
}

function endGame() {
    document.querySelector("#score").textContent = score;
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#end").classList.remove("hide");
}

startGame();

document.querySelector("#reload").onclick = startGame;

function loadDifficulty() {
    timeBonus = localStorage.getItem("timeBonus");
    document.querySelector("#difficulty-select").value = timeBonus;
}
loadDifficulty();

document.querySelector("#difficulty-select").onchange = function() {
    timeBonus = this.value;
    localStorage.setItem("timeBonus", timeBonus);
}

document.querySelector("#game-answer").oninput = function() {
    if (this.value === answer) {
        this.value = "";
        answer = randomWordGenerator.next().value;   
        document.querySelector("#game-target").textContent = answer;
        remainTime += Number(timeBonus);
        remainTimeEl.textContent = remainTime;
        score += 1;
        document.querySelector("#current-score").textContent = score;
    }
}

document.querySelector("#setting").onclick = function() {
    document.querySelector("header").classList.toggle("hide");
}
