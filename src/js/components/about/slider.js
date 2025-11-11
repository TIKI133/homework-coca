import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 2.1,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
  });
};
