import "./index.pug";
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "./styles/index.scss";

Swiper.use([Navigation]);
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
