const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

// this code helps to get the current locatin of the cursor respective to the centre of screen

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  // here we have subtracted the window.innerWidth/2 as to calculate the position of cursor from the centre of screen, by default the cursor's position is measured with respect to top left corner
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});
