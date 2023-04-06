let remainTime = 0;
let remainTimeEl = document.querySelector("#remain-time");
let score = 0;
let timeBonus = 0;
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
    const nextWord = randomWordGenerator.next().value;   
    document.querySelector("#game-target").textContent = nextWord;
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
