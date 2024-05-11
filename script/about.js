window.addEventListener("DOMContentLoaded", () => {
    const boxs = document.querySelectorAll(".participants__man");
    const imgs = document.querySelectorAll(".teamImg");
    console.log(imgs);
    boxs.forEach(item => {
        boxs[0].addEventListener("mouseover", () => {
            imgs[1].classList.add("teamImg-active");
        })
        boxs[0].addEventListener("mouseout", () => {
            imgs[1].classList.remove("teamImg-active");
        })
        boxs[1].addEventListener("mouseover", () => {
            imgs[2].classList.add("teamImg-active");
        })
        boxs[1].addEventListener("mouseout", () => {
            imgs[2].classList.remove("teamImg-active");
        })
        boxs[2].addEventListener("mouseover", () => {
            imgs[3].classList.add("teamImg-active");
        })
        boxs[2].addEventListener("mouseout", () => {
            imgs[3].classList.remove("teamImg-active");
        })
        boxs[3].addEventListener("mouseover", () => {
            imgs[4].classList.add("teamImg-active");
        })
        boxs[3].addEventListener("mouseout", () => {
            imgs[4].classList.remove("teamImg-active");
        })
        boxs[0].addEventListener("click", () => {
            imgs[1].classList.add("teamImg-active");
        })
        boxs[1].addEventListener("click", () => {
            imgs[2].classList.add("teamImg-active");
        })
        boxs[2].addEventListener("click", () => {
            imgs[3].classList.add("teamImg-active");
        })
        boxs[3].addEventListener("click", () => {
            imgs[4].classList.add("teamImg-active");
        })
        imgs[0].addEventListener("click", () => {
            imgs[1].classList.remove("teamImg-active");
            imgs[2].classList.remove("teamImg-active");
            imgs[3].classList.remove("teamImg-active");
            imgs[4].classList.remove("teamImg-active");
        })
    })
})