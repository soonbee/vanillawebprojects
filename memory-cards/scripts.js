let addPage = document.querySelector("#add-container");
let cardContainer = document.querySelector("#card-container");
let pageIndicator = document.querySelector("#page-indicator");
let cardItems = [];
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

document.querySelector("#submit").onclick = function() {
  let question = document.querySelector("#question-input").value;
  let answer = document.querySelector("#answer-input").value;
  cardItems.push({question, answer});
  localStorage.setItem("data", JSON.stringify(cardItems));
  addCard(question, answer);
  updatePageIndicator();
  document.querySelector("#question-input").value = "";
  document.querySelector("#answer-input").value = "";
  addPage.classList.remove("show");
}

document.querySelector("#clear-all").onclick = function() {
  localStorage.removeItem("data");
  cardItems = [];
  cardContainer.innerHTML = "";
  updatePageIndicator();
}

function loadData() {
  let items = localStorage.getItem("data") || "[]";
  items = JSON.parse(items);
  cardItems = items;
}

function addCard(question, answer) {
  let cardElement = document.createElement("div");
  cardElement.className = "flip-card right";
  cardElement.innerHTML = `\
  <span class="flip-indicator">
    <i class="fas fa-sync"></i>
    Filp
  </span>
  <div class="content">
    <span class="question">${question}</span>
    <span class="answer">${answer}</span>
  </div>`
  cardElement.onclick = function() {
    cardElement.classList.toggle("show-answer");
    cardElement.classList.add("flipping");
    cardElement.onanimationend = function() {
      cardElement.classList.remove("flipping");
    }
  }
  cardElements.push(cardElement);
  cardContainer.appendChild(cardElement);
}

function generateCard() {
  cardContainer.innerHTML = "";
  cardItems.forEach(item => {
    addCard(item.question, item.answer);
  });
  cardElements[0].classList.remove("right");
  cardElements[0].classList.add("active");
  updatePageIndicator();
};

function updatePageIndicator() {
  if (cardItems.length <= 0) {
    pageIndicator.textContent = "";
  } else {
    pageIndicator.textContent = `${currentIndex + 1}/${cardItems.length}`
  };
}

loadData();
generateCard();
