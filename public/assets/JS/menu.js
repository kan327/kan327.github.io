// bg js
let toggled = false

let wrapper = document.querySelector('#wrapper');


const onMouseEnter = e => {
  menu.style.backgroundColor = '#656569';
};

const onMouseLeave = e => {
  menu.style.backgroundColor = '#3F3E43';
};


document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('mouseenter', onMouseEnter);
  link.addEventListener('mouseleave', onMouseLeave);
});

const handleClick = (element, type) => {
  document.querySelectorAll('.menu-link').forEach(link => {
    link.style.color = '#F3F3F3'
    link.classList.remove("interactable")
    link.removeEventListener('mouseenter', onMouseEnter);
    link.removeEventListener('mouseleave', onMouseLeave);
  })
  element.style.color = '#3F3E43'
  menu.style.backgroundColor = '#F3F3F3'
  toggled = !toggled;
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(200, {
      grid: [columns, rows],
      from: 'center'
    }),
    complete: function() {
      anime({
        targets: "body",
        opacity: 0,
        duration: 1200,
        complete: function() {
          document.location.href = `${type}.html`
        }
      })
    }
  });
}




