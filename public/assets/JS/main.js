let trigger = document.querySelector('#trigger')
const container = document.querySelector('#spawn')
let isAlreadySpawned = false
let animation_duration = 4000
let isVisited = checkHistory();

trigger.onmouseenter = e => {
  if(!isAlreadySpawned){
    createBoxs(7)
    randomize(".hintText")
  }   
  
  anime({
    targets: ".hintText",
    opacity: 1,
    delay: anime.stagger(200),
  })
  animateBox()
}

trigger.onmouseleave = e => {
  anime({
    targets: ".hintText",
    opacity: 0,
    delay: anime.stagger(200),
  })
}

trigger.onmousedown = e => {
  trigger.remove()
  randtxt.style.display = "block"
  layer.style.display = "block"
  anime({
    targets: ".hintText",
    opacity: 1,
  })
  anime({
    targets: ".hintText_m",
    opacity: 1,
  })
  anime({
    easing: 'easeInOutQuad',
    targets: "#black_layer",
    opacity: 1,
    translateX: (document.body.clientWidth + black_layer.clientWidth)* -1,
    duration: animation_duration,
  })
  anime({
    targets: "#content",
    easing: 'easeInOutQuad',
    translateX: (document.body.clientWidth + black_layer.clientWidth)* -1,
    duration: animation_duration/ 1.5,
  })
  content.animate({
    opacity: 1,
  }, {
    duration: 3000,
    fill: "forwards",
  })
  layer.animate({
    scale: 5,
  }, {
    duration: 3000,
    fill: "forwards",
  })
  anime({
    easing: 'easeOutExpo',
    targets: "#hintbox",
    translateX: (document.body.clientWidth/2 + black_layer.clientWidth),
    duration: animation_duration/ 3,
    complete: function() {
      document.querySelectorAll(".hintText")[0].innerText = "HLOKFYDNMPNERJSDA"
      document.querySelectorAll(".hintText")[1].innerText = "KJHGDFNMVSDF"
      document.querySelectorAll(".hintText")[2].innerText = "KSJDBFKUYFWEB"
      document.querySelectorAll(".hintText_m")[0].innerText = "HLOKFYDNMPNERJSDA"
      document.querySelectorAll(".hintText_m")[1].innerText = "KJHGDFNMVSDF"
      document.querySelectorAll(".hintText_m")[2].innerText = "KSJDBFKUYFWEB"
    }
  })
  setTimeout(() => {
    if(isVisited){
      document.querySelectorAll(".hintText")[0].dataset.value = "you're still here"
      document.querySelectorAll(".hintText")[1].dataset.value = "thanks, so,"
      document.querySelectorAll(".hintText")[2].dataset.value = "the next is ?"
      document.querySelectorAll(".hintText_m")[0].dataset.value = "you're still here"
      document.querySelectorAll(".hintText_m")[1].dataset.value = "thanks, so,"
      document.querySelectorAll(".hintText_m")[2].dataset.value = "the next is ?"
    } else {
      document.querySelectorAll(".hintText")[0].dataset.value = "thanks. but, why,"
      document.querySelectorAll(".hintText")[1].dataset.value = "you want to"
      document.querySelectorAll(".hintText")[2].dataset.value = "know about me"
      document.querySelectorAll(".hintText_m")[0].dataset.value = "thanks. but, why,"
      document.querySelectorAll(".hintText_m")[1].dataset.value = "you want to"
      document.querySelectorAll(".hintText_m")[2].dataset.value = "know about me"
    }
    randomize(".hintText")
    randomize(".hintText_m")
  },  animation_duration);
  setTimeout(() => {
    document.location.href = "menu.html"
  },  animation_duration + 4000);
}


// =================================================================
const handleOnHover = box => {
  const keyframe = {
    translateX: '200px',
    background: box.dataset.toggled == "false" ? '#3F3E43' : 'transparent',
  }
  box.animate(keyframe, {
    duration: 800,
    fill: "forwards",
  })
  
  box.dataset.toggled = box.dataset.toggled == "false" ?? true;
}

const createBox = () => {
  const boxpart = document.createElement('div');
  boxpart.classList.add('boxpart');
  boxpart.classList.add('interactable');
  boxpart.dataset.toggled = false

  boxpart.onmouseenter = e => handleOnHover(boxpart);
  boxpart.onclick = e => handleOnHover(boxpart);
  boxpart.onpointerdown = e => handleOnHover(boxpart);
  
  return boxpart;
}

const createBoxs = quantity => {
  isAlreadySpawned = true;
  for (var i = 0; i <= quantity; i++) {
    container.appendChild(createBox());
  }
}

const animateBox = () => {
  anime({
    targets: ".boxpart",
    translateX: function () {
      if( container.clientWidth <= 768){
        return anime.random(0, container.clientWidth) * -1;
      }
      return anime.random(200, container.clientWidth) * -1;
    },
    translateY: function () {
      return anime.random(-container.clientHeight/ 2, container.clientHeight/ 2);
    },
    scale: function () {
      return anime.random(1, 2)
    },
    rotate: function () { return anime.random(-360, 360); },
    borderRadius: function () { return ['10%', anime.random(10, 35) + '%']; },
    duration: function () { return anime.random(1200, 1800); },
    delay: function () { return anime.random(0, 400); },
  })
}