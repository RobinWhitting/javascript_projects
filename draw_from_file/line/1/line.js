const ccx = window.innerWidth / 2;
const ccy = window.innerHeight / 2;
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;


class Line {
  constructor (_p1x, _p1y, _p2x, _p2y) {
    this.p1 = {
      x: _p1x,
      y: _p1y
    };
    this.p2 = {
      x: _p2x,
      y: _p2y
    };
  }
  draw () {
    ctx.beginPath();
    ctx.lineWidth = '10';
    ctx.strokeStyle = 'black';
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    ctx.closePath();
  }
}


const buttons = () => {
  let url = window.location.href.split('/');
  document.getElementById('next').href = '../' + next(url) + '/';
}


const next = (url) => {
  let next = parseInt(url[url.length-2]) + 1;
  return next;
}


const previous = (url) => {
  let prev = parseInt(url[url.length-2]) - 1;
  return prev;
}


const length = 100;
let line1 = new Line(ccx - length, ccy, ccx + length, ccy);

line1.draw();

buttons();
