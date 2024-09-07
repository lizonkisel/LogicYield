"use strict";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
let params;
let screenSize;
let effect;

function calcScreenSize() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    screenSize = "Меньше 900";
    params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
    
        effect: 'creative',
        creativeEffect: {
            limitProgress: 2,
            prev: {
                translate: ["-110%", 0, 0],
                opacity: 0.3,
                scale: .75
            },
            next: {
                translate: ["110%", 0, 0],
                opacity: 0.3,
                scale: .75
            }
        },
    
        speed: 800,
        grabCursor: true,
        noSwipingClass: 'noSwipeGallery',
        navigation: {
          nextEl: ".swiper-button-next_main",
          prevEl: ".swiper-button-prev_main",
        },
      }
  } else {
    screenSize = "Больше 900";
    params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
   
        effect: 'cards',
        cardsEffect: {
            perSlideOffset: 4,
            perSlideRotate: 3,
            rotate: true,
            slideShadows: true,
        },
    
        speed: 800,
        grabCursor: true,
        noSwipingClass: 'noSwipeGallery',
        navigation: {
          nextEl: ".swiper-button-next_main",
          prevEl: ".swiper-button-prev_main",
        },
      }
  }
};

calcScreenSize();

const swiper = new Swiper(".mySwiperMain", params);

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // allowTouchMove: true,
    autoplay: {
        delay: 5000,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next2",
    //   prevEl: ".swiper-button-prev2",
    // },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next2",
    //   prevEl: ".swiper-button-prev2",
    // },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next2",
    //   prevEl: ".swiper-button-prev2",
    // },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
      },
});

// window.addEventListener('resize', calcScreenSize);
  
let images = document.querySelectorAll(".card__img");
let popupImg = document.querySelector(".popup__img");
let softPopup = document.querySelector(".soft__popup");
let popupClose = document.querySelector(".popup__close");

window.addEventListener("DOMContentLoaded", () => {
    const popup = () => {
        images.forEach(item => {
            item.addEventListener("click", (e) => {
                popupImg.src = e.target.src;
                softPopup.style.display = "flex";
                document.body.style.overflow = 'hidden';
                if(window.innerWidth > 769){
                    if(e.target.offsetWidth / e.target.offsetHeight > 1.5){
                        popupImg.style.width = "70%";
                        popupClose.style.right = "15%";
                    }
                    else{
                        popupImg.style.width = "40%";
                        popupClose.style.right = "28%";
                    }
                }
            })
            popupClose.addEventListener("click", (e) => {
                softPopup.style.display = "none";
                document.body.style.overflow = "visible";
            })
        })
       
    }
    popup();
});

document.addEventListener("keydown", (e) => {
    if( e.key === 'Escape') {
      softPopup.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });
  
  softPopup.addEventListener("click", (e) => {
    if (softPopup.style.display === "flex" && e.target != popupImg) {
      softPopup.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });
