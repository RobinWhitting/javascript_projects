const ccx = window.innerWidth / 2;
const ccy = window.innerHeight / 2;
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

const gravity = 0.98;
const maxVel = 20;
const length = 100;

class Line {
  constructor (_p1x, _p1y, _p2x, _p2y) {
    this.p1 = {
      x: _p1x,
      y: _p1y,
      sx: _p1x,
      sy: 10,
      vx: 0,
      vy: 0
    };
    this.p2 = {
      x: _p2x,
      y: _p2y,
      sx: _p2x,
      sy: 10,
      vx: 0,
      vy: 0
    };
  }
  draw () {
    this.updateVel();
    this.updatePos();
    ctx.beginPath();
    ctx.lineWidth = '10';
    ctx.strokeStyle = 'black';
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
    line1.draw();
  requestAnimationFrame(animate);
}


const buttons = () => {
  let url = window.location.href.split('/');
  document.getElementById('next').href = '../' + next(url) + '/';
  document.getElementById('previous').href = '../' + previous(url) + '/';
}


const next = (url) => {
  let next = parseInt(url[url.length-2]) + 1;
  return next;
}


const previous = (url) => {
  let prev = parseInt(url[url.length-2]) - 1;
  return prev;
}

buttons();



let line1 = new Line(
  ccx - length,
  c.height - 50,
  ccx + length,
  c.height - 50
);




document.addEventListener('click', (e) => {
  if (e.target.id === 'start') {
    document.getElementById('start').className = 'hidden';
    animate();
  }
});
