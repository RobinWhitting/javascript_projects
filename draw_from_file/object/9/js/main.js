const c = document.getElementById('canvas');
const startBtn = document.getElementById('start');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
ctx.imageSmoothingEnabled = false;
const items = [];
const cx = c.width / 2;
const cy = c.height / 2;
const start = c.height / 2;
const gravity = 0.98;
const maxVel = 20;
const yStart = 0;
let xStart = 0;
let order = 0;
let multiplier = 0;
let loaded = 0;
let xOffset = 0;

let basement = [];

class Plank_l {
  constructor (_length) {
    this.startImg = this.makeImage('../images/Plank_l_e1.png'),
    this.midImg = this.makeImage('../images/Plank_l_m.png'),
    this.endImg = this.makeImage('../images/Plank_l_e2.png'),
    this.minLength = 6,
    this.maxLength = 200,
    this.length = this.calcLength(_length);
  }

  calcLength(len) {
    if (len < this.minLength) {
      return this.minLength;
    }
    else if (len > this.maxLength) {
      return this.maxLength;
    }
    else {
      return len;
    }
  }

  draw() {
      ctx.drawImage(this.startImg, cx, cy);
      for (let i = 0; i < this.length; i+=2) {
        ctx.drawImage(this.midImg, cx + i + 2, cy + (i/2) + 2);
      }
      ctx.drawImage(this.endImg, cx + this.length+2, cy + (this.length / 2)+2);
  }
  makeImage (src) {
    let img = new Image();
    img.src = src;
    return img;
  }
}


class Item {
  constructor (imageType, x, y, order) {
    order++,
    this.x = x,
    this.y = y - yStart - (multiplier * order),
    this.fy = y,
    this.img = this.makeImage(this.imageCalc(imageType));
    this.velY = 0;
  }

  draw () {
    ctx.drawImage(this.img, this.x, this.y);
  }

  imageCalc (input) {
    let source = '';
    switch (input) {
      case "Plank_l":
        source = '../images/plank_l.png';
      break;
    }
    return source;
  }

  makeImage (src) {
    let img = new Image();
    img.src = src;
    return img;
  }

  update () {
    this.updateVel();
    this.updatePos();
    this.draw();
  }

  updatePos () {
    if (this.y != this.fy) {
      if (this.y >= this.fy - this.velY) {
        this.y = this.fy;
      }
      else {
        this.y += this.velY;
      }
    }
  }

  updateVel () {
    if (this.velY != maxVel) {
      if (this.velY >= maxVel) {
        this.velY = maxVel;
      }
      else {
        this.velY += gravity;
      }
    }
  }
}
  for (let i = 0; i < basement.length; i++) {
    items.push(new Item(basement[i].name, cx + basement[i].x, cy + basement[i].y, i));
  }




const mainLoop = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  // ctx.beginPath();
  // ctx.strokeWeight = 2;
  // ctx.moveTo(0, c.height / 2);
  // ctx.lineTo(c.width, c.height / 2);
  // ctx.moveTo(c.width / 2, 0);
  // ctx.lineTo(c.width / 2, c.height);
  // ctx.stroke();
  // ctx.closePath();
  for (let i = 0; i < planks.length; i++) {
    planks[i].draw();
  }
  requestAnimationFrame(mainLoop);
}

let planks = [];
for (let i = 0; i < 2; i++) {
  planks.push(new Plank_l(200));
}

for (let i = 0; i < planks.length; i++) {
  planks[i].startImg.onload = function() {
    loaded++;
    if (loaded === planks.length * 3) {mainLoop();/*startBtn.className = '';*/}
  }
  planks[i].midImg.onload = function() {
    loaded++;
    if (loaded === planks.length * 3) {mainLoop();/*startBtn.className = '';*/}
  }
  planks[i].endImg.onload = function() {
    loaded++;
    if (loaded === planks.length * 3) {mainLoop();/*startBtn.className = '';*/}
  }
}


window.addEventListener('click', (e) => {
  if (e.target === startBtn) {
    startBtn.className = 'hidden';
    mainLoop();
  }
});
