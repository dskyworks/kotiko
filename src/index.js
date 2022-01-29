import "./index.pug";
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "./styles/index.scss";

const roomCardSwiper = new Swiper('.swiper-room-card', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  slideClass: 'swiper-room-card-slide',
  wrapperClass: 'swiper-room-card-wrapper',
  navigation: {
    nextEl: '.swiper-room-card-button-next',
    prevEl: '.swiper-room-card-button-prev',
  },
});
