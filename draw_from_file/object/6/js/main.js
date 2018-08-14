const c = document.getElementById('canvas');
const startBtn = document.getElementById('start');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const brick = "../images/Brick.png";
const items = [];
const cx = c.width / 2;
const cy = c.height / 2;
const start = 0;
const gravity = 0.98;
const maxVel = 160;
const yStart = -1000;
let xStart = 0;
let order = 0;
let miltiplier = 100;
let loaded = 0;
let xOffset = 0;


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
      case "FloorL-L":
        img.src = '../images/FloorL-L.png';
        break;
      case "Grass":
        img.src = '../images/Grass.png';
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

for (let j = 0; j < 660; j += 22) {
  yOffset = j / 2;
  xOffset = j;
  for (let i = 0; i < 660; i++) {
    if (i % 22 === 0) {
      items.push(new Item('Grass', ((cx - 22) - i) + xOffset, (i / 2 + yOffset)));
    }
  }
}

for (let j = 0; j < 160; j += 80) {
  yOffset = j;
  xOffset = j * 2;
  for (let i = 0; i < 320; i++) {
    if (i % 16 === 0) {
      items.push(new Item('FloorL-L', ((cx - 20) - i) + xOffset, (cy - 200) + (i / 2 + yOffset)));
    }
  }
}





// for (let j = yStart; j < c.height; j += 80){
//   if ((j - yStart) % 160 === 0) {
//     xStart = -64;
//   }
//   else {
//     xStart = 0;
//   }
//   for (let i = xStart; i < c.width + 180; i++) {
//     if (i % 32 === 0) {
//       items.push(new Item('FloorL-L', (c.width - i) + xOffset,  j));
//     }
//   }
// }


for (let i = 0; i < items.length; i++) {
  items[i].img.onload = function() {
    loaded++;
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
