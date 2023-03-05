userAddButton = document.getElementById("add");
moneyDoubleButton = document.getElementById("double");
millionFilterButton = document.getElementById("filter");
sortButton = document.getElementById("sort");
content = document.getElementById("content");
let rows = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function generateUser() {
  let url = "https://randomuser.me/api/";
  let response = await (await fetch(url)).json();
  let {first, last} = response.results[0].name;
  let value = getRandomInt(10000, 100000);
  return {name: `${first} ${last}`, value};
}

function numberWithCommas(x) {
  return x.toLocaleString('en-US', {minimumFractionDigits: 2});
}

function renderRows() {
  content.innerHTML = rows
    .map(row => `<div class="user"><strong>${row.name}</strong><span>$${numberWithCommas(row.value)}</span></div>`)
    .join("");
}

window.addEventListener("load", async function() {
  rows.push(await generateUser());
  rows.push(await generateUser());
  rows.push(await generateUser());
  renderRows();
})

userAddButton.addEventListener("click", async function() {
  rows.push(await generateUser());
  renderRows();
});

moneyDoubleButton.addEventListener("click", function() {
  rows = rows.map(({name, value}) => ({name, value: value * 2}));
  renderRows();
});

millionFilterButton.addEventListener("click", function() {
  rows = rows.filter(row => row.value > 1000000);
  renderRows();
});

sortButton.addEventListener("click", function() {
  rows.sort((a, b) => {
    return b.value - a.value;
  });
  renderRows();
});
