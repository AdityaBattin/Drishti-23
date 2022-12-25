// animation on scroll library
// AOS.init();

// for preloader
// var loader = document.getElementById("loader");

// logic for scroll spy

let home = document.getElementById("myCarousel");
let aboutUs = document.getElementById("About-us-section");
let purvarang = document.getElementById("purvarang");
let committees = document.getElementById("committees");

let Navhome = document.getElementById("home");
let NavaboutUs = document.getElementById("aboutus");
let Navpurva = document.getElementById("purva");
let Navcomm = document.getElementById("comm");

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

// logic for scroll scroll spy

window.addEventListener("scroll", () => {
  var windo = window.pageYOffset;
  if (aboutUs.offsetTop <= windo + 100 && purvarang.offsetTop > windo) {
    console.log("aboutUs");
    Navhome.classList.remove("active");
    NavaboutUs.classList.add("active");
    Navpurva.classList.remove("active");
    Navcomm.classList.remove("active");
  } else if (
    purvarang.offsetTop <= windo + 100 &&
    committees.offsetTop > windo
  ) {
    console.log("purvarang");
    Navhome.classList.remove("active");
    NavaboutUs.classList.remove("active");
    Navpurva.classList.add("active");
    Navcomm.classList.remove("active");
  } else if (committees.offsetTop <= windo + 100) {
    console.log("commitees");
    Navhome.classList.remove("active");
    NavaboutUs.classList.remove("active");
    Navpurva.classList.remove("active");
    Navcomm.classList.add("active");
  } else {
    console.log("home");
    Navhome.classList.add("active");
    NavaboutUs.classList.remove("active");
    Navpurva.classList.remove("active");
    Navcomm.classList.remove("active");
  }
});
