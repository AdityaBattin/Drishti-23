$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsiveClass: true,
  animateOut: "fadeOut",
  responsive: {
    300: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});
