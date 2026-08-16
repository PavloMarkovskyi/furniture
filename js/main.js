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

const btn = document.querySelector(".hero__btn");
const title = document.querySelector(".hero__title");
btn.addEventListener("mouseenter", () => {
  title.style.color = "#ffd748";
});
btn.addEventListener("mouseleave", () => {
  title.style.color = "";
});
