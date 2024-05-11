window.addEventListener("DOMContentLoaded", () => {
  const video1 = document.querySelector(".video-1");
  const video2 = document.querySelector(".video-2");
  const placeholder = document.querySelector(".video__placeholder");

  
  var b = setInterval(()=>{
    if(video1.readyState >= 3){
        clearInterval(b);
        placeholder.classList.add("video__placeholder-ready");
        video1.play();
        video1.addEventListener("ended", () => {
          video1.classList.remove("video-active");
          video1.pause();
          video2.classList.add("video-active");
          video2.play();
        });
        video2.addEventListener("ended", () => {
          video2.classList.remove("video-active");
          video2.pause();
          video1.classList.add("video-active");
          video1.play();
        });
      }                   
  },500);
  video1.addEventListener("canplay", () => {
    
  });
});
