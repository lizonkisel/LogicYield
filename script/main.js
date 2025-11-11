// import SPARouter from "https://cdn.jsdelivr.net/npm/@kodnificent/sparouter@1.1.0/+esm"; // if you are hosting locally
// const options = {
// historyMode : true // set this to true if you use the HTML5 history mode API
// }
// const router = new SPARouter(options);

// router.get("/", function(req, router){

// console.log(`Welcome to my home page! The request url is ${req.url}`);
// //outputs: Welcome to my home page! The request url is /

// }).setName("home");

// router.get("/user/{username}", function(req, router){

// console.log(`Showing profile for ${req.param.username}. To go back home click <a href="${router.pathFor("home")}">here</a>`);
// // if url is /user/victor
// //ouputs: Showing profile for victor. To go back home click <a href="/">here</a> 

// }).setName("user-profile");

// router.notFoundHandler(function(){

// console.log("oops! the page you are looking for is probably eaten by a snake");
// // if user navigates to /wrong-page
// //outputs: oops! the page you are looking for is probably eaten by a snake

// });
// router.init();



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
    Cookies.set('legalAgreement', 'true', { expires: 7 });
    legalPopupWrapper.classList.remove('popupLegal_opened');
    legalPopupWrapper.classList.add('popupLegal_closed');
    legalPopupButton.removeEventListener("click", closeLegalPopup);
  };

  function checkLegalCookies() {
    if (Cookies.get('legalAgreement') === "true") {
      legalPopupWrapper.classList.remove('popupLegal_opened');
      legalPopupWrapper.classList.add('popupLegal_closed');
      legalPopupButton.removeEventListener("click", closeLegalPopup);
    } else {
      legalPopupWrapper.classList.add('popupLegal_opened');
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
