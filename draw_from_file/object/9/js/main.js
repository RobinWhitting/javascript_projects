const startBtn = document.getElementById('start');
const canvasBasement = document.getElementById('basement');
const canvasGarden = document.getElementById('garden');
const canvasLivingRoom = document.getElementById('living_room');
const canvasAttic = document.getElementById('attic');
canvasBasement.width = canvasGarden.width =/*
canvasLivingRoom.width = canvasAttic.width =*/ 400;

canvasBasement.height = canvasGarden.height /*=
canvasLivingRoom.height = canvasAttic.height*/ = window.innerHeight;

const cBasement = canvasBasement.getContext('2d');
const cGarden = canvasGarden.getContext('2d');
// const cLivingRoom = canvasLivingRoom.getContext('2d');
// const cAttic = canvasAttic.getContext('2d');

cBasement.imageSmoothingEnabled /*= cGarden.imageSmoothingEnabledfalse = cLivingRoom.imageSmoothingEnabled =
cAttic.imageSmoothingEnabled */= false;
const basementItems = [];

const gravity = 0.98;
const maxVel = 20;
const yStart = 1000;
let order = 0;
let loaded = 0;
let multiplier = 100;


class Item {
  constructor (layer, imageType, x, y, order) {
    order++,
    this.x = x,
    this.y = y - yStart - (multiplier * order),
    this.fy = y,
    this.img = this.makeImage(this.imageCalc(imageType)),
    this.velY = 0,
    this.layer = layer
  }

  draw () {
    if (this.layer === 'basement') {
      cBasement.drawImage(this.img, this.x + (canvasBasement.width / 2), this.y + 250);
    }
    else if (this.layer === 'garden') {
      cGarden.drawImage(this.img, this.x + (canvasBasement.width / 2), this.y + 250);
    }
  }

  imageCalc (input) {
    let source = '';
    switch (input) {
      case "BrickR": source = '../images/BrickR.png'; break;
      case "BrickL": source = '../images/BrickL.png'; break;
      case "FloorR-L": source = '../images/FloorR-L.png'; break;
      case "PlankL": source = '../images/PlankL.png'; break;
      case "Grass": source = '../images/Grass.png';break;
      case "DeskL":source = '../images/deskL.png'; break;
      case "WallLampR": source = '../images/WallLampR.png'; break;
      case "GameBoyBlue": source = '../images/GameBoyBlue.png'; break;
      case "GameBoyCartridge4": source = '../images/GameBoyCartridge4.png'; break;
      case "Printer": source = '../images/Printer.png'; break;
      case "Macbook": source = '../images/Macbook.png'; break;
      case "LightSwitch": source = '../images/light_switch.png'; break;
      case "Painting": source = '../images/painting.png'; break;
      case "Grass_C_L": source = '../images/grass_cut_left.png'; break;
      case "Grass_C_R": source = '../images/grass_cut_right.png'; break;
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


for (let i = 0; i < basementArray.length; i++) {
  basementItems.push(new Item(basementArray[i].layer, basementArray[i].name, basementArray[i].x, basementArray[i].y, basementArray[i].order));
}

for (let i = 0; i < basementItems.length; i++) {
  basementItems[i].img.onload = function() {
    loaded++;
    if (loaded === basementItems.length) {/*mainLoop();*/startBtn.className = '';}
  }
}


const mainLoop = () => {
  cBasement.clearRect(0, 0, canvasBasement.width, canvasBasement.height);
  cGarden.clearRect(0, 0, canvasGarden.width, canvasGarden.height);
  for (let i = 0; i < basementItems.length; i++) {
    basementItems[i].update();
  }
  requestAnimationFrame(mainLoop);
}


window.addEventListener('click', (e) => {
  if (e.target === startBtn) {
    startBtn.className = 'hidden';
    mainLoop();
  }
});
