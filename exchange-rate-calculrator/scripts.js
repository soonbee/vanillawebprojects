let baseSelect = document.querySelector("#currency-base > select");
let baseInput = document.querySelector("#currency-base > input");
let targetSelect = document.querySelector("#currency-target > select");
let targetInput = document.querySelector("#currency-target > input");
let rateDisplay = document.querySelector("#rate > span");
let swapButton = document.querySelector("#rate > button");
let rate = 0;

async function updateRate() {
  let base = baseSelect.value;
  let target = targetSelect.value;
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${target}.min.json`
  let response = await fetch(url);
  let json = await response.json();
  rate = Number(json[target]);
  rateDisplay.textContent = `1 ${base.toUpperCase()} = ${rate} ${target.toUpperCase()}`;
}
function calculate() {
  targetInput.value = (baseInput.value * rate).toFixed(2);
}

window.addEventListener("load", async function() {
  baseInput.value = "1"
  baseSelect.value = "usd";
  targetSelect.value = "eur";
  await updateRate();
  calculate();
})

baseSelect.addEventListener("change", async function() {
  await updateRate();
  calculate();
});
targetSelect.addEventListener("change", async function() {
  await updateRate();
  calculate();
});
baseInput.addEventListener("input", function() {
  calculate();
});

swapButton.addEventListener("click", function() {
  let base = baseSelect.value;
  let target = targetSelect.value;
  baseSelect.value = target;
  targetSelect.value = base;
  updateRate();
});
