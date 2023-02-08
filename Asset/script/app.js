let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");
let activeClass = "active";
const menuClose = document.querySelector(".menu-close");

toggle.addEventListener("click", function () {
   menu.classList.add(activeClass);
});

menuClose.addEventListener("click", function () {
   menu.classList.remove(activeClass);
});