$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsiveClass: true,
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 1250,
  autoplayHoverPause: true,
  responsive: {
    200: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1030: {
      items: 3,
    },
    1450: {
      items: 4,
    },
  },
});
