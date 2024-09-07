// import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let galleryImgs = document.querySelectorAll(".swiper-slide .gallery__img");
let popupImg = document.querySelector(".popup__img");
let softPopup = document.querySelector(".soft__popup");
let popupClose = document.querySelector(".popup__close");

window.addEventListener("DOMContentLoaded", () => {
  const popup = () => {
    galleryImgs.forEach((image) => {
      image.addEventListener("click", (e) => {
        popupImg.src = e.target.src;
        softPopup.style.display = "flex";
        document.body.style.position = "relative";
        document.body.style.overflow = "hidden";
        if(window.innerWidth > 769){
          if ( e.target.offsetHeight / e.target.offsetWidth  > 1.32) {
            popupImg.style.width = "30%";
            popupClose.style.right = "28%";
          } else {
            popupImg.style.width = "40%";
            popupClose.style.right = "27%";
          }
        }
      });
    });
    popupClose.addEventListener("click", (e) => {
      softPopup.style.display = "none";
      document.body.style.position = "absolute";
      document.body.style.overflow = "visible";
    });
  };
  popup();
});

document.addEventListener("keydown", (e) => {
  if( e.key === 'Escape') {
    softPopup.style.display = "none";
    document.body.style.position = "absolute";
    document.body.style.overflow = "visible";
  }
});

softPopup.addEventListener("click", (e) => {
  if (softPopup.style.display === "flex" && e.target != popupImg) {
    softPopup.style.display = "none";
    document.body.style.position = "absolute";
    document.body.style.overflow = "visible";
  }
});
