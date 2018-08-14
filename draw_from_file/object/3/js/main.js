const c = document.getElementById('canvas');
const startBtn = document.getElementById('start');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const brick = "../images/Brick.png";
const items = [];
const start = 0;
const gravity = 0.98;
const maxVel = 40;
const cx = c.width / 2;
const cy = c.height / 2;
let order = 0;
let miltiplier = 100;
let loaded = 0;

class Item {
  constructor (imageType, x, y) {
    order++,
    this.img = this.makeImage(imageType);

    this.x = x,
    this.y = start - (order * miltiplier),
    this.fy = y,
    this.velY = 0
  }

  draw () {
    ctx.drawImage(this.img, this.x, this.y);
  }

  makeImage (input) {
    let img = new Image();
    switch (input) {
      case "BrickR":
        img.src = '../images/Brick.png';
        break;
      case "BrickL":
        img.src = '../images/BrickL.png';
        break;
      case "FloorR-L":
        img.src = '../images/FloorR-L.png';
        break;
    }
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

items.push(new Item('BrickR', cx, cy));
items.push(new Item('BrickL', cx +100, cy));
items.push(new Item('FloorR-L', 100, cy));


for (let i = 0; i < items.length; i++) {
  items[i].img.onload = function() {
    loaded++;
    // ctx.beginPath();
    // // ctx.drawImage(items[i].img, items[i].x, items[i].y);
    // ctx.closePath();
    if (loaded === items.length) {startBtn.className = '';}
  }
}


const mainLoop = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  for (let i = 0; i < items.length; i++) {
    items[i].update();
  }
  requestAnimationFrame(mainLoop);
}


window.addEventListener('click', (e) => {
  if (e.target === startBtn) {
    startBtn.className = 'hidden';
    mainLoop();
  }
});
