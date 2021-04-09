svg4everybody();

const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-buttons1 .channel-button-next',
    prevEl: '.slider-buttons1 .channel-button-prev',
  },

});

const recommended = new Swiper('.channel-slider2', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-buttons2 .channel-button-next',
    prevEl: '.slider-buttons2 .channel-button-prev',
  },

});