// animation on scroll library
// AOS.init();

// for preloader
// var loader = document.getElementById("loader");

//for navbar in small screens
const navMenu = document.getElementById("navMenu");
toggleMenu = document.getElementById("header_menu");
closeMenu = document.getElementById("header_close");

// for preloader
// window.addEventListener("load", function () {
//   loader.style.height = "100px";
//   loader.style.width = "100px";
//   loader.style.borderRadius = "50%";
//   loader.style.visibility = "hidden";
// });

// for navbar
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//for navbar color change on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("bgcolor-scrolled");
  } else {
    header.classList.remove("bgcolor-scrolled");
  }
});
