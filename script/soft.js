"use strict";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiperMain", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next_main",
      prevEl: ".swiper-button-prev_main",
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
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
  });

window.addEventListener("DOMContentLoaded", () => {
    const popup = () => {
        let images = document.querySelectorAll(".card__img");
        let popupImg = document.querySelector(".popup__img");
        let softPopup = document.querySelector(".soft__popup");
        let popupClose = document.querySelector(".popup__close")
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
})