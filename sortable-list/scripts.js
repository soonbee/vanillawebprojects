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
