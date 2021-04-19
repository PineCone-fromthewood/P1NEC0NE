const menuIcon = document.querySelector(".hamburger-menu");
const sidenav = document.querySelector(".sidenav");

menuIcon.addEventListener("click", () => {
  sidenav.classList.toggle("change");
});