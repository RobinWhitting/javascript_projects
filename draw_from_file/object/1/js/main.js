const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');
const brick = "../images/BrickL.png";
let img1 = new Image();
img1.src = brick;

img1.onload = function() {
   ctx.beginPath();
   ctx.drawImage(img1, 100, 100);
   ctx.closePath();
 }
