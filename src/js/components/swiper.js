const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
  
    navigation: {
      nextEl: ".swiper-button-next",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

    mousewheel: {
        sensitivity: 0.2,
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
     },
  });