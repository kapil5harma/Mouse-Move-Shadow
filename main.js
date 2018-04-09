const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  // console.log(e);
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  // console.log(x,y);
  // console.log('this: ', this);
  // console.log('e.target: ', e.target);
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  // console.log(x, y);
  const xWalk = Math.round(x / width * walk - walk / 2);
  const yWalk = Math.round(y / height * walk - walk / 2);
  // console.log(xWalk, yWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,0,0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0,0,255,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,0,255,0.7)
    `;
}

hero.addEventListener("mousemove", shadow);
