let addPage = document.querySelector("#add-container");
let cardContainer = document.querySelector("#card-container");
let pageIndicator = document.querySelector("#page-indicator");
let cardItems = [
  { question: '1', answer: '2'},
  { question: '3', answer: '4'},
  { question: '5', answer: '6'},
  { question: '7', answer: '8'},
];
let cardElements = [];
let currentIndex = 0;

document.querySelector("#add").onclick = function() {
  addPage.classList.add("show");
}

document.querySelector("#close").onclick = function() {
  addPage.classList.remove("show");
}

document.querySelector("#prev").onclick = function() {
  if (currentIndex <= 0) {
    return;
  }
  cardElements[currentIndex].classList.add("right");
  currentIndex -= 1;
  cardElements[currentIndex].classList.remove("left");
  updatePageIndicator();
}
document.querySelector("#next").onclick = function() {
  if (currentIndex >= cardElements.length - 1) {
    return;
  }
  cardElements[currentIndex].classList.add("left");
  currentIndex += 1;
  cardElements[currentIndex].classList.remove("right");
  updatePageIndicator();
}

function generateCard() {
  cardItems.forEach((item, idx) => {
    let cardElement = document.createElement("div");
    cardElement.className = "flip-card";
    cardElement.innerHTML = `\
<span class="flip-indicator">
  <i class="fas fa-sync"></i>
  Filp
</span>
<span class="content">${item.question}</span>`
    cardElements.push(cardElement);
    if (idx > 0) {
      cardElement.classList.add("right");
    };
    cardContainer.appendChild(cardElement);
  });
  updatePageIndicator();
};

function updatePageIndicator() {
  if (cardItems.length <= 0) {
    return;
  }
  pageIndicator.textContent = `${currentIndex + 1}/${cardItems.length}`
}

generateCard();
