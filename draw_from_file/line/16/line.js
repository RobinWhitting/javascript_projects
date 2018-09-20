const ccx = window.innerWidth / 2;
const ccy = window.innerHeight / 2;
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

const gravity = 0.98;
const maxVelY = 40;
const startY = -1000;
let currentY = undefined;
let velY = 0;
// const lineLen = 50;
// const lineX = Math.floor(lineLen * 0.865);
// const lineY = Math.floor(lineX * 0.5780346820809249);
// const seperation = 0;
// const frameWidth = 2;
let image1 = new Image();
image1.src = '../../img/cube.png';


const animate = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  updatePosY();
  ctx.drawImage(image1, ccx - (image1.width / 2), updatePosY());
  requestAnimationFrame(animate);
}


const buttons = () => {
  let url = window.location.href.split('/');
  // document.getElementById('next').href = '../' + next(url) + '/';
  document.getElementById('previous').href = '../' + previous(url) + '/';
}


const degToRad = (degree) => {
  return (Math.PI / 180) * degree;
}


const next = (url) => {
  let next = parseInt(url[url.length-2]) + 1;
  return next;
}


const previous = (url) => {
  let prev = parseInt(url[url.length-2]) - 1;
  return prev;
}


const updatePosY = () => {
  updateVelY();
  if (currentY === undefined) {
    currentY = startY;
  }
  if (currentY != c.height - image1.height) {
    if (currentY >= c.height - image1.height) {
      currentY = c.height - image1.height;
    }
    else {
      currentY += velY;
    }
  }
  return currentY;
}


const updateVelY = () => {
  if (velY != maxVelY) {
    if (velY >= maxVelY) {
      velY = maxVelY;
    }
    else{
      velY += gravity;
    }
  }
}


const vecToCoord = (m, a) => {
  let coord = {};
  coord.x2 = m * Math.cos(a);
  coord.y2 = m * Math.sin(a);
  return coord;
}

buttons();


document.addEventListener('click', (e) => {
  if (e.target.id === 'start') {
    document.getElementById('start').className = 'hidden';
    animate();
  }
});
