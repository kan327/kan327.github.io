var loader = document.querySelector(".loading");
window.addEventListener("load", function(){
setTimeout(() => {
  loader.animate({
    opacity: 0
  },
  {
    duration: 200,
  })
  setTimeout(() => {
    loader.style.display = "none";
  }, 200);
}, 900);
}) // use this when loading 