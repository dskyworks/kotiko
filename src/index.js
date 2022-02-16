import "./index.pug";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/index.scss";

const roomCardSwiper = new Swiper(".swiper-room-card", {
  modules: [Navigation],
  direction: "horizontal",
  loop: true,
  slideClass: "swiper-room-card-slide",
  wrapperClass: "swiper-room-card-wrapper",
  navigation: {
    nextEl: ".swiper-room-card-button-next",
    prevEl: ".swiper-room-card-button-prev",
  },
});

// Gallery
const galleryBigSlider = new Swiper(".swiper-gallery-big", {
  modules: [Navigation, Pagination],
  loop: true,
  allowTouchMove: true,
  slidesPerView: "auto",
  speed: 200,
  breakpoints: {
    800: {
      speed: 0,
      allowTouchMove: false,
    },
  },
  navigation: {
    nextEl: ".swiper-gallery-button-next",
    prevEl: ".swiper-gallery-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const gallerySmallSlider = new Swiper(".swiper-gallery-small", {
  modules: [Navigation],
  loop: true,
  speed: 0,
  allowTouchMove: false,
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-gallery-button-next",
    prevEl: ".swiper-gallery-button-prev",
  },
});
