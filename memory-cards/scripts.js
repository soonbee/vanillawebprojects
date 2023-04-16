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
  cardElements[currentIndex].className = "flip-card right"
  currentIndex -= 1;
  cardElements[currentIndex].className = "flip-card active"
  updatePageIndicator();
}
document.querySelector("#next").onclick = function() {
  if (currentIndex >= cardElements.length - 1) {
    return;
  }
  cardElements[currentIndex].className = "flip-card left"
  currentIndex += 1;
  cardElements[currentIndex].className = "flip-card active"
  updatePageIndicator();
}

function generateCard() {
  cardItems.forEach((item, idx) => {
    let cardElement = document.createElement("div");
    cardElement.className = "flip-card right";
    cardElement.innerHTML = `\
<span class="flip-indicator">
  <i class="fas fa-sync"></i>
  Filp
</span>
<div class="content">
  <span class="question">${item.question}</span>
  <span class="answer">${item.answer}</span>
</div>`
    cardElement.onclick = function() {
      cardElement.classList.toggle("show-answer");
      cardElement.classList.add("flipping");
      cardElement.onanimationend = function() {
        cardElement.classList.remove("flipping");
      }
    }
    cardElements.push(cardElement);
    if (idx === 0) {
      cardElement.classList.remove("right");
      cardElement.classList.add("active");
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
