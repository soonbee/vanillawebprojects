const cardList = document.querySelector(".card-list");
const checkButton = document.querySelector("#check-button");

const names = [
    "Jeff Bezos",
    "Bill Gates",
    "Warren Buffett",
    "Bernard Arnault",
    "Carlos Slim Helu",
    "Amancio Ortega",
    "Larry Ellison",
    "Mark Zuckerberg",
    "Michael Bloomberg",
    "Larry Page",
];
let buf;

cardList.innerHTML = arrayShuffle(names).map((name, idx) => {
    return `\
<div class="card">
  <div class="number">${idx + 1}</div>
  <div class="draggable-content" draggable="true">
    <div class="name">${name}</div>
    <div class="draggable-indicator">=</div>
  </div>
</div>`
}).join("");

document.querySelectorAll(".draggable-content").forEach(el => {
    el.ondragstart = function() {
        buf = el;
    }
});
document.querySelectorAll(".draggable-content").forEach(el => {
    el.ondragover = function(event) {
        event.preventDefault();
    }
});
document.querySelectorAll(".draggable-content").forEach(el => {
    el.ondrop = function() {
        const firstEl = buf.querySelector(".name");
        const secondEl = el.querySelector(".name");

        firstEl.className = "name";
        secondEl.className = "name";

        let tmp = firstEl.textContent;
        firstEl.textContent = secondEl.textContent;
        secondEl.textContent = tmp;
    }
});

checkButton.onclick = function() {
    cardList.childNodes.forEach((child, idx) => {
        const nameEl = child.querySelector(".name");
        if (nameEl.textContent === names[idx]) {
            nameEl.className = "name green";
        } else {
            nameEl.className = "name red";
        };
    });
};
