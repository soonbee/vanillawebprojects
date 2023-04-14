let addPage = document.querySelector("#add-container");

document.querySelector("#add").onclick = function() {
  addPage.classList.add("show");
}

document.querySelector("#close").onclick = function () {
  addPage.classList.remove("show");
}
