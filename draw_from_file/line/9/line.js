const ccx = window.innerWidth / 2;
const ccy = window.innerHeight / 2;
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const buildLines = [];

c.width = window.innerWidth;
c.height = window.innerHeight;

const gravity = 0.98;
const maxVel = 80;
const lineLen = 200;
const seperation = 600;
const animOffset = 1000;
let coords = {};


class Line {
  constructor (_x1, _y1, _x2, _y2, adds, _t) {
    this.p1 = {
      x: _x1,
      y: _y1,
      sx: _x1,
      sy: _y1 - (animOffset + adds),
      vx: 0,
      vy: 0,
    };
    this.p2 = {
      x: _x2,
      y: _y2,
      sx: _x2,
      sy: _y2 - (animOffset + adds),
      vx: 0,
      vy: 0
    };
    this.t = _t;
  }
  draw () {
    this.updateVel();
    this.updatePos();
    ctx.beginPath();
    ctx.lineWidth = this.t;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.moveTo(this.p1.x, this.p1.sy);
    ctx.lineTo(this.p2.x, this.p2.sy);
    ctx.stroke();
    ctx.closePath();
  }

  updateVel () {
    if (this.p1.vy != maxVel) {
      this.p1.vy += gravity;
      if (this.p1.vy >= maxVel) {
        this.p1.vy = maxVel;
      }
    }
    if (this.p2.vy != maxVel) {
      this.p2.vy += gravity;
      if (this.p2.vy >= maxVel) {
        this.p2.vy = maxVel;
      }
    }
  }

  updatePos () {
    if (this.p1.sy != this.p1.y) {
      if (this.p1.sy > (this.p1.y - this.p1.vy)) {
        this.p1.sy = this.p1.y;
      }
      else{
        this.p1.sy += this.p1.vy;
      }
    }
    if (this.p2.sy != this.p2.y) {
      if (this.p2.sy > (this.p2.y - this.p2.vy)) {
        this.p2.sy = this.p2.y;
      }
      else{
        this.p2.sy += this.p2.vy;
      }
    }
  }
}


const animate = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  for (var i = 0; i < buildLines.length; i++) {
    buildLines[i].draw();
  }
  requestAnimationFrame(animate);
}


const buttons = () => {
  let url = window.location.href.split('/');
  document.getElementById('next').href = '../' + next(url) + '/';
  document.getElementById('previous').href = '../' + previous(url) + '/';
}

const degToRad = (degree) => {
  return (Math.PI / 180) * degree;
}


const fillLineArray = (lines) => {
  for (var i = 0; i < lines.length; i++) {
    buildLines.push(
      new Line(
        lines[i].x + sqRefX,
        lines[i].y + sqRefY,
        lines[i].x + sqRefX + lines[i].x2,
        lines[i].y + sqRefY + lines[i].y2,
        i * lines[i].sep,
        lines[i].t
      )
    );
  }
}


const next = (url) => {
  let next = parseInt(url[url.length-2]) + 1;
  return next;
}


const previous = (url) => {
  let prev = parseInt(url[url.length-2]) - 1;
  return prev;
}


const vecToCoord = (m, a) => {
  let coord = {};
  coord.x2 = m * Math.cos(a);
  coord.y2 = m * Math.sin(a);
  return coord;
}

const findX = (m, a) => {
  return m * Math.cos(a);
}

const findY = (m, a) => {
  return m * Math.sin(a);

}


buttons();

let lineData = [];

  let sqRefX = ccx;
  let sqRefY = c.height - 100;

lineData = [
  {x: -346, y: 0, x2: -173 , y2: -100, sep: seperation, t: 12}, // Base
  {x: -346, y: 0, x2: 173, y2: -100, sep: seperation, t: 12},
  {x: 0, y: 0, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 0, y: 0, x2: 173, y2: -100, sep: seperation, t: 12},
  {x: 346, y: 0, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 346, y: 0, x2: 173, y2: -100, sep: seperation, t: 12},
  {x: 519, y: -100, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -100, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -100, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: -173, y: -100, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: -173, y: -100, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: -519, y: -100, x2: 173 , y2: -100, sep: seperation, t: 12},

  {x: -346, y: 0, x2: 0 , y2: -200, sep: seperation, t: 12}, // Uprights
  {x: 0, y: 0, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 346, y: 0, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: -519, y: -100, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: -173, y: -100, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 173, y: -100, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 519, y: -100, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: -346, y: -200, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 0, y: -200, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 346, y: -200, x2: 0 , y2: -200, sep: seperation, t: 12},

  {x: -346, y: -200, x2: -173 , y2: -100, sep: seperation, t: 12}, // Tops
  {x: -346, y: -200, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 0, y: -200, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 0, y: -200, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 346, y: -200, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 346, y: -200, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 519, y: -300, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -300, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -300, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: -173, y: -300, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: -173, y: -300, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: -519, y: -300, x2: 173 , y2: -100, sep: seperation, t: 12},

  // 2nd level
  {x: -346, y: -400, x2: 173 , y2: -100, sep: seperation, t: 12}, // base
  {x: 0, y: -400, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 0, y: -400, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 346, y: -400, x2: -173 , y2: -100, sep: seperation, t: 12},

  {x: -346, y: -400, x2: 0 , y2: -200, sep: seperation, t: 12}, // uprights
  {x: -173, y: -300, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 0, y: -400, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 173, y: -300, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 346, y: -400, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: -173, y: -500, x2: 0 , y2: -200, sep: seperation, t: 12},
  {x: 173, y: -500, x2: 0 , y2: -200, sep: seperation, t: 12},

  {x: -173, y: -500, x2: -173 , y2: -100, sep: seperation, t: 12}, // tops
  {x: -173, y: -500, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -500, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 173, y: -500, x2: 173 , y2: -100, sep: seperation, t: 12},
  {x: 346, y: -600, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: 0, y: -600, x2: 173, y2: -100, sep: seperation, t: 12},
  {x: 0, y: -600, x2: -173 , y2: -100, sep: seperation, t: 12},
  {x: -346, y: -600, x2: 173 , y2: -100, sep: seperation, t: 12}


];
fillLineArray(lineData);

document.addEventListener('click', (e) => {
  if (e.target.id === 'start') {
    document.getElementById('start').className = 'hidden';
    animate();
  }
});
