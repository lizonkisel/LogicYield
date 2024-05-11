"use strict";

import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

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
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    popup();
})