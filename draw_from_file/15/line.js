const ccx = window.innerWidth / 2;
const ccy = window.innerHeight / 2;
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const buildLines = [];
const buildRects = [];
const cubeOffsetY = 0;
let lineData = [];
let rectData = [];

c.width = window.innerWidth;
c.height = window.innerHeight;

const gravity = 0.98;
const maxVel = 80;
const lineLen = 100;
const lineX = Math.floor(lineLen * 0.865);
const lineY = Math.floor(lineX * 0.5780346820809249);
const seperation = 600;
const animOffset = 1000;
const frameWidth = 2;
const sqRefX = ccx;
const sqRefY = c.height - 100;


class Rectangle {
  constructor (x1, y1, x2, y2, x3, y3, x4, y4, d) {
    this.p1 = {
      x: x1,
      y: y1,
      sy: y1 + d
    };
    this.p2 = {
      x: x2,
      y: y2,
      sy: y1 + d
    };
    this.p3 = {
      x: x3,
      y: y3,
      sy: y3 + d
    };
    this.p4 = {
      x: x4,
      y: y4,
      sy: y4 + d
    };
    this.vx = 0;
    this.vy = 0;
  }
  draw () {
    this.updateVel();
    this.updatePos();
    ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'skyblue';
    ctx.moveTo(this.p1.x, this.p1.sy);
    ctx.lineTo(this.p2.x, this.p2.sy);
    ctx.lineTo(this.p3.x, this.p3.sy);
    ctx.lineTo(this.p4.x, this.p4.sy);
    ctx.lineTo(this.p1.x, this.p1.sy);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  updateVel () {
    if (this.vy != maxVel) {
      this.vy += gravity;
      if (this.vy >= maxVel) {
        this.vy = maxVel;
      }
    }
  }

  updatePos () {
    if (this.p1.sy != this.p1.y) {
      if (this.p1.sy > (this.p1.y - this.vy)) {
        this.p1.sy = this.p1.y;
      }
      else{
        this.p1.sy += this.vy;
      }
    }

    if (this.p2.sy != this.p2.y) {
      if (this.p2.sy > (this.p2.y - this.vy)) {
        this.p2.sy = this.p2.y;
      }
      else{
        this.p2.sy += this.vy;
      }
    }

    if (this.p3.sy != this.p3.y) {
      if (this.p3.sy > (this.p3.y - this.vy)) {
        this.p3.sy = this.p3.y;
      }
      else{
        this.p3.sy += this.vy;
      }
    }

    if (this.p4.sy != this.p4.y) {
      if (this.p4.sy > (this.p4.y - this.vy)) {
        this.p4.sy = this.p4.y;
      }
      else{
        this.p4.sy += this.vy;
      }
    }
  }
}


class Line {
  constructor (_x1, _y1, _x2, _y2, adds, _t, _c = '#000') {
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
    this.t = _t,
    this.c = _c;
  }
  draw () {
    this.updateVel();
    this.updatePos();
    ctx.beginPath();
    ctx.lineWidth = this.t;
    ctx.strokeStyle = this.c;
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
  for (var i = 0; i < buildRects.length; i++) {
    buildRects[i].draw();
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
        lines[i].t, lines[i].c
      )
    );
  }
}


const fillRectArray = (rects) => {
  let delay = -((lineData.length + 5) * seperation) + 2000;
  for (var i = 0; i < rects.length; i++) {
    buildRects.push(
      new Rectangle(
        sqRefX + rects[i].x1,
        sqRefY + rects[i].y1 + cubeOffsetY,
        sqRefX + rects[i].x1 + rects[i].x2,
        sqRefY + rects[i].y1 + rects[i].y2 + cubeOffsetY,
        sqRefX + rects[i].x1 + rects[i].x2 + rects[i].x3,
        sqRefY + rects[i].y1 + rects[i].y2 + rects[i].y3 + cubeOffsetY,
        sqRefX + rects[i].x1 + rects[i].x2 + rects[i].x3 + rects[i].x4,
        sqRefY + rects[i].y1 + rects[i].y2 + rects[i].y3 + rects[i].y4 + cubeOffsetY,
        delay
      )
    );
    delay -= seperation;

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

buttons();


lineData = [
  {x: -lineX * 2, y: 0, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth}, // Base
  {x: -lineX * 2, y: 0, x2: lineX, y2: -lineY, sep: seperation, t: frameWidth},
  {x: 0, y: 0, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: 0, y: 0, x2: lineX, y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX * 2, y: 0, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX * 2, y: 0, x2: lineX, y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX * 3, y: -lineY, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX * 3, y: -lineY, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},

  {x: -lineX * 2, y: 0, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth, c: 'red'}, // Uprights
  {x: 0, y: 0, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth, c: 'red'},
  {x: lineX * 2, y: 0, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth, c: 'red'},
  {x: -lineX * 3, y: -lineY, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: lineX * 3, y: -lineY, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: -lineX * 2, y: -lineY * 2, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: 0, y: -lineY * 2, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: lineX * 2, y: -lineY * 2, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},

  {x: -lineX * 2, y: -lineY * 2, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'blue'}, // Tops
  {x: -lineX * 2, y: -lineY * 2, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'green'},
  {x: 0, y: -lineY * 2, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'blue'},
  {x: 0, y: -lineY * 2, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'green'},
  {x: lineX * 2, y: -lineY * 2, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'blue'},
  {x: lineX * 2, y: -lineY * 2, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'green'},
  {x: lineX * 3, y: -lineY * 3, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY * 3, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY * 3, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY * 3, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY * 3, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX * 3, y: -lineY * 3, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},

  // 2nd level
  {x: -lineX * 2, y: -lineY * 4, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth}, // base
  {x: 0, y: -lineY * 4, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: 0, y: -lineY * 4, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: lineX * 2, y: -lineY * 4, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},

  {x: -lineX * 2, y: -lineY * 4, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth}, // uprights
  {x: -lineX, y: -lineY * 3, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth, c: 'red'},
  {x: 0, y: -lineY * 4, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY * 3, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth, c: 'red'},
  {x: lineX * 2, y: -lineY * 4, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: -lineX, y: -lineY * 5, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},
  {x: lineX, y: -lineY * 5, x2: 0 , y2: -lineY * 2, sep: seperation, t: frameWidth},

  {x: -lineX, y: -lineY * 5, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'blue'}, // tops
  {x: -lineX, y: -lineY * 5, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'green'},
  {x: lineX, y: -lineY * 5, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'blue'},
  {x: lineX, y: -lineY * 5, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth, c: 'green'},
  {x: lineX * 2, y: -lineY * 6, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: 0, y: -lineY * 6, x2: lineX, y2: -lineY, sep: seperation, t: frameWidth},
  {x: 0, y: -lineY * 6, x2: -lineX , y2: -lineY, sep: seperation, t: frameWidth},
  {x: -lineX * 2, y: -lineY * 6, x2: lineX , y2: -lineY, sep: seperation, t: frameWidth}
];

rectData = [
  {x1: -lineX * 2, y1: 0, x2: -lineX, y2: -lineY, x3: 0, y3: -lineY * 2, x4: lineX, y4: lineY},
  {x1: -lineX * 2, y1: 0, x2: 0, y2: -lineY * 2, x3: lineX, y3: -lineY, x4: 0, y4: lineY * 2},
  {x1: -lineX * 2, y1: -lineY * 2, x2: -lineX, y2: -lineY, x3: lineX, y3: -lineY, x4: lineX, y4: lineY},

  {x1: 0, y1: 0, x2: -lineX, y2: -lineY, x3: 0, y3: -lineY * 2, x4: lineX, y4: lineY},
  {x1: 0, y1: 0, x2: 0, y2: -lineY * 2, x3: lineX, y3: -lineY, x4: 0, y4: lineY * 2},
  {x1: 0, y1: -lineY * 2, x2: -lineX, y2: -lineY, x3: lineX, y3: -lineY, x4: lineX, y4: lineY},

  {x1: lineX * 2, y1: 0, x2: -lineX, y2: -lineY, x3: 0, y3: -lineY * 2, x4: lineX, y4: lineY},
  {x1: lineX * 2, y1: 0, x2: 0, y2: -lineY * 2, x3: lineX, y3: -lineY, x4: 0, y4: lineY * 2},
  {x1: lineX * 2, y1: -lineY * 2, x2: -lineX, y2: -lineY, x3: lineX, y3: -lineY, x4: lineX, y4: lineY},

  {x1: -lineX, y1: -lineY * 3, x2: -lineX, y2: -lineY, x3: 0, y3: -lineY * 2, x4: lineX, y4: lineY},
  {x1: -lineX, y1: -lineY * 3, x2: 0, y2: -lineY * 2, x3: lineX, y3: -lineY, x4: 0, y4: lineY * 2},
  {x1: -lineX, y1: -lineY * 5, x2: -lineX, y2: -lineY, x3: lineX, y3: -lineY, x4: lineX, y4: lineY},

  {x1: lineX, y1: -lineY * 3, x2: -lineX, y2: -lineY, x3: 0, y3: -lineY * 2, x4: lineX, y4: lineY},
  {x1: lineX, y1: -lineY * 3, x2: 0, y2: -lineY * 2, x3: lineX, y3: -lineY, x4: 0, y4: lineY * 2},
  {x1: lineX, y1: -lineY * 5, x2: -lineX, y2: -lineY, x3: lineX, y3: -lineY, x4: lineX, y4: lineY}
];

fillLineArray(lineData);

fillRectArray(rectData);

document.addEventListener('click', (e) => {
  if (e.target.id === 'start') {
    document.getElementById('start').className = 'hidden';
    animate();
  }
});
