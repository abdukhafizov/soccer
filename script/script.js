let ball = document.querySelector(".ball")
let area = document.querySelector(".area")
let first = document.querySelector("#first_gate")
let left_score = document.querySelector("#left_score")
let second = document.querySelector("#second_gate")
let right_score = document.querySelector("#right_score")
let btn = document.querySelector("button")
let left_count = 0
let right_count = 0

ball.ondragstart = () => {

    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}

ball.ondragend = () => {
    ball.style.display = "block"
}

area.ondragover = (e) => {
    e.preventDefault();
}
area.ondragenter = (e) => {
    e.preventDefault();
}

area.ondrop = (event) => {
    let {x, y} = event

    ball.style.top = y + "px"
    ball.style.left = x + "px"
}


first.ondragenter = () => {
    left_score.innerHTML = ++left_count
    console.log("a");

    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["ff009b", "009aff", "ff001b", "00ffe4", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
    }
    
    second.ondragenter = () =>{
        right_score.innerHTML = ++right_count
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["ff009b", "009aff", "ff001b", "00ffe4", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["heart"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
}

btn.onclick = () =>{
    left_count = 0
    left_score.innerHTML = left_count
    right_score.innerHTML = left_count
}