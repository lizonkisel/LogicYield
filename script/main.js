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
 
  /* Может переместить этот раздел с куками ниже? */

  const legalPopupWrapper = document.querySelector(".popupLegal__wrapper");
  const legalPopupButton = document.querySelector(".popupLegal__button");

  legalPopupButton.addEventListener("click", closeLegalPopup);

  function closeLegalPopup(e) {
    legalPopupWrapper.style.display = "none";
    Cookies.set('legalAgreement', 'true', { expires: 7 })
    legalPopupButton.removeEventListener("click", closeLegalPopup);
  };

  function checkLegalCookies() {
    if (Cookies.get('legalAgreement') === "true") {
      legalPopupWrapper.style.display = "none";
      legalPopupButton.removeEventListener("click", closeLegalPopup);
    } else {
      legalPopupWrapper.style.display = "block";
    }
  }
  
  checkLegalCookies();
  console.log(Cookies.get('legalAgreement'));


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
  
});
