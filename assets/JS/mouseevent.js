const trailer = document.getElementById("trailer")

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "play_arrow";
    case "project":
      return "folder";
    case "contact":
      return "person";
    case "look":
      return "lens_blur";
    case "menu":
      return "menu";
    case "code":
      return "code";
    default:
      return "north_east"; 
  }
}

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  // trailer.style.transform = `translate(${x}px, ${y}px)`
  const keyframe = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  }

  trailer.animate(keyframe, {
    duration: 800,
    fill: "forwards",

  })
}
window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.innerText = getTrailerClass(interactable.dataset.type);
  }
}