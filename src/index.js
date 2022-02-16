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

// Contacts address copy to clipboard

const contactsStreetToClipboardButton = document.querySelector(
  ".contacts__street-to-clipboard"
);
const contactsStreet = document.querySelector(".contacts__street");

contactsStreetToClipboardButton.addEventListener("click", () => {
  window.Clipboard = (function (window, document, navigator) {
    let textArea, copy;

    function isOS() {
      return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
      textArea = document.createElement("textArea");
      textArea.value = text;
      document.body.appendChild(textArea);
    }

    function selectText() {
      let range, selection;

      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
    }

    function copyToClipboard() {
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    copy = function (text) {
      createTextArea(text);
      selectText();
      copyToClipboard();
    };

    return {
      copy: copy,
    };
  })(window, document, navigator);

  Clipboard.copy(contactsStreet.innerText);

  contactsStreetToClipboardButton.classList.add(
    "contacts__street-to-clipboard--copied"
  );
  contactsStreetToClipboardButton.disabled = true;
  const buttonText = contactsStreetToClipboardButton.innerText;
  contactsStreetToClipboardButton.textContent = "Скопировано";
  setTimeout(() => {
    contactsStreetToClipboardButton.classList.remove(
      "contacts__street-to-clipboard--copied"
    );
    contactsStreetToClipboardButton.textContent = buttonText;
    contactsStreetToClipboardButton.disabled = false;
  }, 2000);
});
