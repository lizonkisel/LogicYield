window.addEventListener("DOMContentLoaded", () => {
  const navIcon = document.querySelector(".menu__icon");
  const navMenu = document.querySelector(".header__nav");
  const navLinks = navMenu.querySelectorAll(".nav__link");
  const menuItem = document.querySelectorAll(".nav__item");
  const up = document.querySelector(".up");
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
      console.log(window.pageYOffset);
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
  });
 
  navLinks.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      if (i !== 3) {
        if(window.innerWidth < 1025){
          e.preventDefault();
        }
      }
    });
  });
  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.querySelector(".nav__menu").classList.toggle("nav__menu-active");
    });
  });
  
  
});
    // console.log(window.pageYOffset);
    // console.log(up);
    // if (window.pageYOffset > 0) {
    //   up.style.display = "block";
    // }