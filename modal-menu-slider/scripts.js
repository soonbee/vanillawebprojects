let menu = document.getElementById("menu");
let sidebar = document.querySelector("aside");
let main = document.querySelector("main");
let modal = document.querySelector(".modal");
let signUpButton = document.querySelector("#sign-up");
let closeButton = document.querySelector("#modal-close");
let submitButton = document.querySelector("#modal-submit");
let isSidebarOpen = false;
let isModalOpen = false;

menu.addEventListener("click", function() {
  if (isSidebarOpen) {
    sidebar.removeAttribute("open");
    sidebar.style.transform = "translate(0px, 0)";
    main.style.marginLeft = "0px";
    isSidebarOpen = !isSidebarOpen;
  } else {
    sidebar.setAttribute("open", "");
    sidebar.style.transform = "translate(200px, 0)";
    main.style.marginLeft = "200px";
    isSidebarOpen = !isSidebarOpen;
  }
});

function closeModal() {
  modal.removeAttribute("show");
}
function openModal() {
  modal.setAttribute("show", "");
}

signUpButton.onclick = openModal;
closeButton.onclick = closeModal;
submitButton.onclick = closeModal;

