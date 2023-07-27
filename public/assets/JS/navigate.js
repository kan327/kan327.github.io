  navigate.addEventListener("click", () => {
    if (!(navigate.classList.contains("active"))) {
      fix.classList.remove('hovermenu') //
      navigate.classList.add("active")///
      navigate.classList.remove('interactable') ///
      navigate.style.transform = "scale(0.8)";
      setTimeout(() => {
        navigate.style.transform = "scale(1)";
      }, 200);
      setTimeout(() => {
        anime({
          targets: ".tile",
          opacity: 0,
          duration: 0,
        })
        spawner.style.display = 'block';
        anime({
          targets: "#spawner",
          opacity: 1,
          complete: function () {
            anime({
              targets: ".tile",
              opacity: 1,
              delay: anime.stagger(200, {
                grid: [columns, rows],
                from: 'last'
              }),
              complete: function() {
                anime({
                  targets: "#spawner",
                  background: '#3F3E43',
                  duration: 1000,
                  complete: function() {
                    document.location.href = `menu.html`
                  }
                })
              }
            });
          }
        })
      }, 4000);
      logo.classList.add("boxanimate")
    }
  });