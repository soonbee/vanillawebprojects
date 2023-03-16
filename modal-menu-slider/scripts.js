let menu = document.getElementById("menu");
let sidebar = document.querySelector("aside");
let main = document.querySelector("main");
let isOpen = false;

menu.addEventListener("click", function() {
  if (isOpen) {
    sidebar.removeAttribute("open");
    sidebar.style.transform = "translate(0px, 0)";
    main.style.marginLeft = "0px";
    isOpen = !isOpen;
  } else {
    sidebar.setAttribute("open", "");
    sidebar.style.transform = "translate(200px, 0)";
    main.style.marginLeft = "200px";
    isOpen = !isOpen;
  }
});