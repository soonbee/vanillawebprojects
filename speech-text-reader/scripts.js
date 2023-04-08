const mainEl = document.querySelector("main");
const toggleButton = document.querySelector("#modal-toggle");
const voiceSelect = document.querySelector("#voices");
const userInput = document.querySelector("#user-input");

const synth = window.speechSynthesis;
let voices = [];
let currentVoice = null;
const items = [
  {image: "images/drink.jpeg", text: "I'm thirsty"},
  {image: "images/food.jpeg", text: "I'm hungry", },
  {image: "images/tired.jpeg", text: "I'm tired"},
  {image: "images/hurt.jpeg", text: "I'm hurt"},
  {image: "images/happy.jpeg", text: "I'm happy"},
  {image: "images/angry.jpeg", text: "I'm angry"},
  {image: "images/sad.jpeg", text: "I'm sad"},
  {image: "images/scared.jpeg", text: "I'm scared"},
  {image: "images/outside.jpeg", text: "I want to go outside"},
  {image: "images/home.jpeg", text: "I want to go home"},
  {image: "images/school.jpeg", text: "I want to go to shcool"},
  {image: "images/grandma.jpeg", text: "I want to go grandmas"},
];

function init() {
  items.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    itemEl.innerHTML = `<img src="${item.image}" alt="" /><p>${item.text}</p>`;
    const utterance = new SpeechSynthesisUtterance(item.text);
    itemEl.onclick = function() {
      utterance.voice = currentVoice;
      synth.speak(utterance);
      itemEl.classList.add("active");
      setTimeout(() => {
        itemEl.classList.remove("active");
      }, 1000);
    };
    mainEl.appendChild(itemEl);
  });
};

function toggleModal() {
  document.querySelector(".modal").toggleAttribute("hide");
  setTimeout(() => {
    userInput.value = "";
  }, 600);
}

window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices.map((voice, idx) => (`
    <option value="${idx}">${voice.name} ${voice.lang}</option>
  `));
  currentVoice = voices[0];
  voiceSelect.value = 0;
};


toggleButton.onclick = toggleModal;
document.querySelector("#close").onclick = toggleModal;

voiceSelect.onchange = function() {
  currentVoice = voices[this.value];
};

document.querySelector("#speech-action").onclick = function() {
  const utterance = new SpeechSynthesisUtterance(userInput.value);
  utterance.voice = currentVoice;
  synth.speak(utterance);
};

init();
