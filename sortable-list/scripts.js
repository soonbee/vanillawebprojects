const cardList = document.querySelector(".card-list");

const names = [
    "Larry Ellison",
    "Amancio Ortega",
    "Carlos Slim Helu",
    "Larry Page",
    "Warren Buffett",
    "Michael Bloomberg",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Jeff Bezos",
];
let currentSequence = arrayShuffle(names);

cardList.innerHTML = currentSequence.map((name, idx) => {
    return `\
<div class="card">
  <div class="number">${idx + 1}</div>
  <div class="draggable-content" draggable="true">
    <div class="name">${name}</div>
    <div class="draggable-indicator">=</div>
  </div>
</div>`
}).join("");
