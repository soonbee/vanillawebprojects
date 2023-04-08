const mainEl = document.querySelector("main");

const items = [
  {image: "images/drink.jpeg", text: "I'm thirsty"},
  {image: "images/food.jpeg", text: "I'm hungry"},
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
    mainEl.appendChild(itemEl);
  });
}

init();
