const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const randomize = (targets) => {
  new Promise((resolve, reject) => {
    targets = document.querySelectorAll(targets)
    let iterations = 0;
  
    targets.forEach((target) => {
      const interval = setInterval(() => {
        target.innerText = target.innerText.split("")
        .map((letter, index) => {
          if(index < iterations) {
            return target.dataset.value[index]
          }
          return letters[Math.floor(Math.random() * 52)]
        })
        .join("")
  
        if(iterations >= target.dataset.value.length) {
          clearInterval(interval)
          resolve('ok')
        } 
  
        iterations += 1/10;
      }, 30)   
    });
  })
}