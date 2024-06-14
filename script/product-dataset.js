import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiper-GOA", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-GOA",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-GOA",
    prevEl: ".swiper-button-prev-GOA",
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const popup = () => {
    let images = document.querySelector(".video__img");
    let galleryImgs = document.querySelectorAll(".swiper-slide .gallery__img");
    let popupImg = document.querySelector(".popup__img");
    let softPopup = document.querySelector(".soft__popup");
    let popupClose = document.querySelector(".popup__close");
    galleryImgs.forEach((image) => {
      image.addEventListener("click", (e) => {
        popupImg.src = e.target.src;
        softPopup.style.display = "flex";
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
      popupClose.addEventListener("click", (e) => {
        softPopup.style.display = "none";
        document.body.style.overflow = "visible";
      });
    });
    images.addEventListener("click", (e) => {
      popupImg.src = e.target.src;
      softPopup.style.display = "flex";
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
    popupClose.addEventListener("click", (e) => {
      softPopup.style.display = "none";
      document.body.style.overflow = "visible";
    });
  };
  const gallery = () => {
    let images = document.querySelectorAll(".gallery__img");
    let activeImage = document.querySelector(".video__img");
    images.forEach((item) => {
      item.addEventListener("click", (e) => {
        activeImage.src = e.target.src;
        e.target.src = activeImage.src;
      });
    });
  };
  popup();
  gallery();
});
