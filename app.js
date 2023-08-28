const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

// this code helps to get the current locatin of the cursor respective to the centre of screen

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  // here we have subtracted the window.innerWidth/2 as to calculate the position of cursor from the centre of screen, by default the cursor's position is measured with respect to top left corner
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx
      }px)) translateY(calc(-50% + ${yValue * speedy
      }px)) perspective(2300px) translateZ(${zValue * speedz}px)
    rotateY(${rotateDegree * rotateSpeed}deg)`;
  });
});



// reveal animation


// let timeline = gsap.timeline();

// parallax_el.forEach((el) => {
//   timeline.from(
//     el,
//     {
//       top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//       duration: 1,
//     },
//     "1"
//   );
// });














































// made with love :)
// by Aman
