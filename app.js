const bgImg = document.querySelector(".bg");

window.addEventListener("scroll", (e) => {
  console.log(window.pageYOffset);
  //   console.log(1 - window.pageYOffset / 800);
  bgImg.style.opacity = 1 - window.pageYOffset / 800;
  bgImg.style.backgroundSize = `${160 - window.pageYOffset / 12}%`;
});
