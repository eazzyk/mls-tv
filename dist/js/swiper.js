const defaultSwiperConfig = {
  // slidesPerView: "auto",
  snapOnRelease: true,
  freeMode: false,
  loop: true,
  // Попробуйте отключить loop для теста
  observer: true,
  observeParents: true,
  centeredSlides: true
  // spaceBetween: 20, // отступы между слайдами
  // initialSlide: 1, // номер слайда, который будет в центре при загрузке
};
new Swiper(".swiper-matches", {
  ...defaultSwiperConfig,
  // slidesPerView: 1, // базовое значение
  spaceBetween: 16,
  // отступы между карточками
  centeredSlides: true,
  // активный слайд будет по центру
  navigation: {
    nextEl: "#swiper-matches__btn-next",
    prevEl: "#swiper-matches__btn-prev"
  },
  breakpoints: {
    360: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 16 },
    870: { slidesPerView: 3, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 16 },
    1200: { slidesPerView: 5, spaceBetween: 16 }
  }
});
new Swiper(".swiper-latest-results", {
  ...defaultSwiperConfig,
  slidesPerView: 1,
  // базовое значение
  spaceBetween: 16,
  // отступы между карточками
  centeredSlides: true,
  // активный слайд будет по центру
  navigation: {
    nextEl: "#swiper-latest-results--next",
    prevEl: "#swiper-latest-results--prev"
  },
  breakpoints: {
    360: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    870: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 2, spaceBetween: 16 },
    1200: { slidesPerView: 3, spaceBetween: 16 }
  }
});
new Swiper(".swiper-schedule", {
  ...defaultSwiperConfig,
  slidesPerView: 1,
  // базовое значение
  spaceBetween: 16,
  // отступы между карточками
  centeredSlides: true,
  // активный слайд будет по центру
  navigation: {
    nextEl: "#swiper-schedule--next",
    prevEl: "#swiper-schedule--prev"
  },
  breakpoints: {
    360: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    768: { slidesPerView: 4, spaceBetween: 16 },
    870: { slidesPerView: 5, spaceBetween: 16 },
    1024: { slidesPerView: 5, spaceBetween: 16 },
    1200: { slidesPerView: 5, spaceBetween: 16 }
  }
});
