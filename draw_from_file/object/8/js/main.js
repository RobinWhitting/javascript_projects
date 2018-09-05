const c = document.getElementById('canvas');
const startBtn = document.getElementById('start');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const items = [];
const cx = c.width / 2;
const cy = c.height / 2;
const start = c.height / 2;
const gravity = 0.98;
const maxVel = 20;
const yStart = 1000;
const grassOffsetX = 23;
const grassOffsetY = 28;
let xStart = 0;
let order = 0;
let multiplier = 100;
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
    {name: "BrickR", x:32, y:22}, //row 2
    {name: "BrickL", x:64, y:26},
    {name: "BrickL", x:80, y:34},
    {name: "BrickL", x:96, y:42},
    {name: "BrickL", x:112, y:50},
    {name: "BrickL", x:128, y:58},
    {name: "BrickL", x:144, y:66},
    {name: "BrickL", x:160, y:74},
    {name: "BrickL", x:176, y:82},
    {name: "BrickR", x:16, y:30},
    {name: "BrickR", x:0, y:38},
    {name: "BrickR", x:-16, y:46},

    {name: "BrickL", x:56, y:28 - 12}, //row 3
    {name: "BrickL", x:72, y:36 - 12},
    {name: "BrickL", x:88, y:44 - 12},
    {name: "BrickL", x:104, y:52 - 12},
    {name: "BrickL", x:120, y:60 - 12},
    {name: "BrickL", x:136, y:68 - 12},
    {name: "BrickL", x:152, y:76 - 12},
    {name: "BrickL", x:168, y:84 - 12},
    {name: "BrickL", x:184, y:92 - 12},
    {name: "BrickR", x:24, y:32 - 12},
    {name: "BrickR", x:8, y:40 - 12},
    {name: "BrickR", x:-8, y:48 - 12},
    {name: "BrickR", x:-24, y:56 - 12},
    {name: "BrickR", x:32, y:22 - 12}, //row 4
    {name: "BrickL", x:64, y:26 - 12},
    {name: "BrickL", x:80, y:34 - 12},
    {name: "BrickL", x:96, y:42 - 12},
    {name: "BrickL", x:112, y:50 - 12},
    {name: "BrickL", x:128, y:58 - 12},
    {name: "BrickL", x:144, y:66 - 12},
    {name: "BrickL", x:160, y:74 - 12},
    {name: "BrickL", x:176, y:82 - 12},
    {name: "BrickR", x:16, y:30 - 12},
    {name: "BrickR", x:0, y:38 - 12},
    {name: "BrickR", x:-16, y:46 - 12},

    {name: "BrickL", x:56, y:28 - 24}, //row 5
    {name: "BrickL", x:72, y:36 - 24},
    {name: "BrickL", x:88, y:44 - 24},
    {name: "BrickL", x:104, y:52 - 24},
    {name: "BrickL", x:120, y:60 - 24},
    {name: "BrickL", x:136, y:68 - 24},
    {name: "BrickL", x:152, y:76 - 24},
    {name: "BrickL", x:168, y:84 - 24},
    {name: "BrickL", x:184, y:92 - 24},
    {name: "BrickR", x:24, y:32 - 24},
    {name: "BrickR", x:8, y:40 - 24},
    {name: "BrickR", x:-8, y:48 - 24},
    {name: "BrickR", x:-24, y:56 - 24},
    {name: "BrickR", x:32, y:22 - 24}, //row 6
    {name: "BrickL", x:64, y:26 - 24},
    {name: "BrickL", x:80, y:34 - 24},
    {name: "BrickL", x:96, y:42 - 24},
    {name: "BrickL", x:112, y:50 - 24},
    {name: "BrickL", x:128, y:58 - 24},
    {name: "BrickL", x:144, y:66 - 24},
    {name: "BrickL", x:160, y:74 - 24},
    {name: "BrickL", x:176, y:82 - 24},
    {name: "BrickR", x:16, y:30 - 24},
    {name: "BrickR", x:0, y:38 - 24},
    {name: "BrickR", x:-16, y:46 - 24},

    {name: "BrickL", x:56, y:28 - 36}, //row 5
    {name: "BrickL", x:72, y:36 - 36},
    {name: "BrickL", x:88, y:44 - 36},
    {name: "BrickL", x:104, y:52 - 36},
    {name: "BrickL", x:120, y:60 - 36},
    {name: "BrickL", x:136, y:68 - 36},
    {name: "BrickL", x:152, y:76 - 36},
    {name: "BrickL", x:168, y:84 - 36},
    {name: "BrickL", x:184, y:92 - 36},
    {name: "BrickR", x:24, y:32 - 36},
    {name: "BrickR", x:8, y:40 - 36},
    {name: "BrickR", x:-8, y:48 - 36},
    {name: "BrickR", x:-24, y:56 - 36},
    {name: "BrickR", x:32, y:22 - 36}, //row 6
    {name: "BrickL", x:64, y:26 - 36},
    {name: "BrickL", x:80, y:34 - 36},
    {name: "BrickL", x:96, y:42 - 36},
    {name: "BrickL", x:112, y:50 - 36},
    {name: "BrickL", x:128, y:58 - 36},
    {name: "BrickL", x:144, y:66 - 36},
    {name: "BrickL", x:160, y:74 - 36},
    {name: "BrickL", x:176, y:82 - 36},
    {name: "BrickR", x:16, y:30 - 36},
    {name: "BrickR", x:0, y:38 - 36},
    {name: "BrickR", x:-16, y:46 - 36},

    {name: "BrickL", x:56, y:28 - 48}, //row 7
    {name: "BrickL", x:72, y:36 - 48},
    {name: "BrickL", x:88, y:44 - 48},
    {name: "BrickL", x:104, y:52 - 48},
    {name: "BrickL", x:120, y:60 - 48},
    {name: "BrickL", x:136, y:68 - 48},
    {name: "BrickL", x:152, y:76 - 48},
    {name: "BrickL", x:168, y:84 - 48},
    {name: "BrickL", x:184, y:92 - 48},
    {name: "BrickR", x:24, y:32 - 48},
    {name: "BrickR", x:8, y:40 - 48},
    {name: "BrickR", x:-8, y:48 - 48},
    {name: "BrickR", x:-24, y:56 - 48},
    {name: "BrickR", x:32, y:22 - 48}, //row 7
    {name: "BrickL", x:64, y:26 - 48},
    {name: "BrickL", x:80, y:34 - 48},
    {name: "BrickL", x:96, y:42 - 48},
    {name: "BrickL", x:112, y:50 - 48},
    {name: "BrickL", x:128, y:58 - 48},
    {name: "BrickL", x:144, y:66 - 48},
    {name: "BrickL", x:160, y:74 - 48},
    {name: "BrickL", x:176, y:82 - 48},
    {name: "BrickR", x:16, y:30 - 48},
    {name: "BrickR", x:0, y:38 - 48},
    {name: "BrickR", x:-16, y:46 - 48},

    {name: "BrickL", x:56, y:28 - 60}, //row 9
    {name: "BrickL", x:72, y:36 - 60},
    {name: "BrickL", x:88, y:44 - 60},
    {name: "BrickL", x:104, y:52 - 60},
    {name: "BrickL", x:120, y:60 - 60},
    {name: "BrickL", x:136, y:68 - 60},
    {name: "BrickL", x:152, y:76 - 60},
    {name: "BrickL", x:168, y:84 - 60},
    {name: "BrickL", x:184, y:92 - 60},
    {name: "BrickR", x:24, y:32 - 60},
    {name: "BrickR", x:8, y:40 - 60},
    {name: "BrickR", x:-8, y:48 - 60},
    {name: "BrickR", x:-24, y:56 - 60},
    {name: "BrickR", x:32, y:22 - 60}, //row 10
    {name: "BrickL", x:64, y:26 - 60},
    {name: "BrickL", x:80, y:34 - 60},
    {name: "BrickL", x:96, y:42 - 60},
    {name: "BrickL", x:112, y:50 - 60},
    {name: "BrickL", x:128, y:58 - 60},
    {name: "BrickL", x:144, y:66 - 60},
    {name: "BrickL", x:160, y:74 - 60},
    {name: "BrickL", x:176, y:82 - 60},
    {name: "BrickR", x:16, y:30 - 60},
    {name: "BrickR", x:0, y:38 - 60},
    {name: "BrickR", x:-16, y:46 - 60},

    {name: "BrickL", x:56, y:28 - 72}, //row 11
    {name: "BrickL", x:72, y:36 - 72},
    {name: "BrickL", x:88, y:44 - 72},
    {name: "BrickL", x:104, y:52 - 72},
    {name: "BrickL", x:120, y:60 - 72},
    {name: "BrickL", x:136, y:68 - 72},
    {name: "BrickL", x:152, y:76 - 72},
    {name: "BrickL", x:168, y:84 - 72},
    {name: "BrickL", x:184, y:92 - 72},
    {name: "BrickR", x:24, y:32 - 72},
    {name: "BrickR", x:8, y:40 - 72},
    {name: "BrickR", x:-8, y:48 - 72},
    {name: "BrickR", x:-24, y:56 - 72},
    {name: "BrickR", x:32, y:22 - 72}, //row 12
    {name: "BrickL", x:64, y:26 - 72},
    {name: "BrickL", x:80, y:34 - 72},
    {name: "BrickL", x:96, y:42 - 72},
    {name: "BrickL", x:112, y:50 - 72},
    {name: "BrickL", x:128, y:58 - 72},
    {name: "BrickL", x:144, y:66 - 72},
    {name: "BrickL", x:160, y:74 - 72},
    {name: "BrickL", x:176, y:82 - 72},
    {name: "BrickR", x:16, y:30 - 72},
    {name: "BrickR", x:0, y:38 - 72},
    {name: "BrickR", x:-16, y:46 - 72},

    {name: "DeskL", x: 0, y: 0},
    {name: "WallLampR", x:110, y:-15},
    {name: "WallLampR", x:50, y:-45},
    {name: "GameBoyCartridge4", x:90, y:45},
    {name: "GameBoyBlue", x:85, y:45},
    {name: "Printer", x:104, y:67},
    {name: "Macbook", x:40, y:20},
    {name: "LightSwitch", x:-20, y:-10},
    {name: "Painting", x:70, y:-25},


  ];


class Item {
  constructor (imageType, x, y, order) {
    order++,
    this.x = x,
    this.y = y - yStart - (multiplier * order),
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
      case "LightSwitch":
        source = '../images/light_switch.png';
        this.fy -= 18;
        this.x -= 0;
      break;
      case "Painting":
        source = '../images/painting.png';
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
    items.push(new Item(office[i].name, cx + office[i].x, cy + office[i].y, i));
  }

for (let i = 0; i < items.length; i++) {
  items[i].img.onload = function() {
    loaded++;
    if (loaded === items.length) {mainLoop();/*startBtn.className = '';*/}
  }
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
