'use strict';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop:true,
  autoplay:true,
  speed: 800
});
