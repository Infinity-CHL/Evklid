const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-bull',
    type: "bullets",
    bulletClass: "bull",
    bulletActiveClass: "bull-active",
    clickable: true
  },

});