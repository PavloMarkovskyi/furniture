const swiper = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  loopFillGroupWithBlank: false,
  initialSlide: 0,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
