import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 2.1,
    loop: true,
    breakpoints: {
      321: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 2.5,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    breakpoints: {
      321: {
        slidesPerView: 1,
      },
      381: {
        slidesPerView: 2,
      },
    },
  });
};
