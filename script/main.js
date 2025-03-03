window.addEventListener("DOMContentLoaded", () => {
  const navIcon = document.querySelector(".menu__icon");
  const navMenu = document.querySelector(".header__nav");
  const navLinks = navMenu.querySelectorAll(".nav__link");
  const menuItem = document.querySelectorAll(".nav__item");
  const up = document.querySelector(".up");

  const mainBody = document.querySelector("main");

  if(window.innerWidth < 769){
    document.body.addEventListener("scroll", () => {
      if (document.body.scrollTop > 0) {
        up.style.display = "block";
      }
      else{
        up.style.display = "none";
      }
    });
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 0) {
        up.style.display = "block";
      }
      else{
        up.style.display = "none";
      }
    });
    up.onclick = () => {
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  window.addEventListener("resize", () => {
    if(window.innerWidth < 769){
      up.style.display = "block";
    }
    else{
      up.style.display = "none";
    }
  })
 

  navIcon.addEventListener("click", () => {
    navMenu.classList.toggle("header__nav-active");
    console.log("icon click");
  });
 
  navLinks.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      console.log("link click");
      console.log(i);
      if (i !== 0 && i !== 2 && i !== 4) {
        if(window.innerWidth < 1025){
          e.preventDefault();
        }
      }
    });
  });

  /* Функция срабатывает только для тех полей меню, у которых внутри есть выпадающие списки */

  menuItem.forEach((item) => {
    if (item.querySelector(".nav__menu")) {
      item.addEventListener("click", (e) => {
        item.querySelector(".nav__menu").classList.toggle("nav__menu-active");
      });
    }
  });

  mainBody.addEventListener("click", (e) => {
    if (navMenu.classList.contains("header__nav-active")) {
      navMenu.classList.toggle("header__nav-active");
    }
  })
  
  const legalPopup = document.querySelector(".popupLegal");
  const legalPopupButton = document.querySelector(".popupLegal__button");

  function closeLegalPopup(e) {
    legalPopup.style.visibility = "hidden";
    legalPopupButton.removeEventListener("click", closeLegalPopup);
  };

  legalPopupButton.addEventListener("click", closeLegalPopup);


});
