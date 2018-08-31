const c = document.getElementById('canvas');
const startBtn = document.getElementById('start');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const brick = "../images/Brick.png";
const items = [];
const cx = c.width / 2;
const cy = c.height / 2;
const start = c.height / 2;
const gravity = 0.98;
const maxVel = 160;
const yStart = 0;
const grassOffsetX = 23;
const grassOffsetY = 28;
let xStart = 0;
let order = 0;
let miltiplier = 0;
let loaded = 0;
let xOffset = 0;

let office = [

    {name: "BrickL", x:56, y:28}, //row 1
    {name: "BrickL", x:72, y:36},
    {name: "BrickL", x:88, y:44},
    {name: "BrickL", x:104, y:52},
    {name: "BrickL", x:120, y:60},
    {name: "BrickL", x:136, y:68},
    {name: "BrickL", x:152, y:76},
    {name: "BrickL", x:168, y:84},
    {name: "BrickL", x:184, y:92},
    {name: "BrickR", x:24, y:32},
    {name: "BrickR", x:8, y:40},
    {name: "BrickR", x:-8, y:48},
    {name: "BrickR", x:-24, y:56},

    {name: "BrickL", x:64, y:26}, //row 2
    {name: "BrickL", x:80, y:34},
    {name: "BrickL", x:96, y:42},
    {name: "BrickL", x:112, y:50},
    {name: "BrickL", x:128, y:58},
    {name: "BrickL", x:144, y:66},
    {name: "BrickL", x:160, y:74},
    {name: "BrickL", x:176, y:82},
    {name: "BrickR", x:36, y:32},

    // {name: "DeskL", x: 0, y: 0},
    // {name: "WallLampR", x:110, y:-15},
    // {name: "WallLampR", x:50, y:-45},
    // {name: "GameBoyCartridge4", x:90, y:45},
    // {name: "GameBoyBlue", x:85, y:45},
    // {name: "Printer", x:104, y:67},
    // {name: "Macbook", x:40, y:20},

  ];


class Item {
  constructor (imageType, x, y) {
    order++,
    this.x = x,
    this.y = y,
    this.fy = y,
    this.img = this.makeImage(this.imageCalc(imageType));
    this.velY = 0
  }

  draw () {
    ctx.drawImage(this.img, this.x, this.y);
  }

  imageCalc (input) {
    let source = '';
    switch (input) {
      case "BrickR":
        source = '../images/BrickR.png';
        this.fy -= 39;
        this.x -= 17;
      break;
      case "BrickL":
        source = '../images/BrickL.png';
        this.fy -= 39;
        this.x -= 33;
      break;
      case "FloorR-L":
        source = '../images/FloorR-L.png';
      break;
      case "FloorL-L":
        source = '../images/FloorL-L.png';
      break;
      case "Grass":
        source = '../images/Grass.png';
        this.fy -= 28;
        this.x -= 23;
      break;
      case "DeskL":
        source = '../images/deskL.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "WallLampR":
        source = '../images/WallLampR.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "GameBoyBlue":
        source = '../images/GameBoyBlue.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "GameBoyCartridge4":
        source = '../images/GameBoyCartridge4.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "Printer":
        source = '../images/Printer.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "Macbook":
        source = '../images/Macbook.png';
        this.fy -= 18;
        this.x -= 0;
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
  for (let i = 0; i < office.length; i++) {
    items.push(new Item(office[i].name, cx + office[i].x, cy + office[i].y));
  }

// for (let j = 0; j < 660; j += 22) {
//   yOffset = j / 2;
//   xOffset = j;
//   for (let i = 0; i < 660; i++) {
//     if (i % 22 === 0) {
//       items.push(new Item('Grass', ((cx - 22) - i) + xOffset, (i / 2 + yOffset)));
//     }
//   }
// }
//
// for (let j = 0; j < 160; j += 80) {
//   yOffset = j;
//   xOffset = j * 2;
//   for (let i = 0; i < 320; i++) {
//     if (i % 16 === 0) {
//       items.push(new Item('FloorL-L', ((cx - 20) - i) + xOffset, (cy - 200) + (i / 2 + yOffset)));
//     }
//   }
// }





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
    if (loaded === items.length) {mainLoop();/*startBtn.className = '';*/}
  }
}


const mainLoop = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.strokeWeight = 2;
  ctx.moveTo(0, c.height / 2);
  ctx.lineTo(c.width, c.height / 2);
  ctx.moveTo(c.width / 2, 0);
  ctx.lineTo(c.width / 2, c.height);
  ctx.stroke();
  ctx.closePath();
  items[0].update();
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
