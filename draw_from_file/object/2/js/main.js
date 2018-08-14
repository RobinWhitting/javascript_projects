const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const brick = "../images/Brick.png";
let img1 = new Image();
img1.src = brick;

let img2 = new Image();
img2.src = brick;

let img3 = new Image();
img3.src = brick;

img1.onload = function() {
   ctx.beginPath();
   ctx.drawImage(img1, 100, 100);
   ctx.closePath();
 }

img2.onload = function() {
  ctx.beginPath();
  ctx.drawImage(img2, 68, 116);
  ctx.closePath();
}

img3.onload = function() {
  ctx.beginPath();
  ctx.drawImage(img3, 36, 132);
  ctx.closePath();
}
