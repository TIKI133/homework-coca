import Swiper from 'swiper';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 2.2,
    spaceBetween: 32,
    breakpoints: {
      321: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 2.2,
      },
    },
  });
};
