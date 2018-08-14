
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let xOffset = 0;
let yOffset = 0;
let blur = 0;

var image1 = new Image();
image1.src = 'images/image.png';

image1.onload = function(){
  redraw();
}

document.addEventListener('mousemove', (e) => {
  castShadow(e);
});


const castShadow = (e) => {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  if (e.clientX < centerX) {
    xOffset = (Math.abs(centerX - e.clientX)/2);
  }
  else if (e.clientX > centerX) {
    xOffset = -(Math.abs(e.clientX - centerX)/2)
  }

  if (e.clientY < centerY) {
    yOffset = (Math.abs(centerY - e.clientY)/2);
  }
  else if (e.clientY > centerY) {
    yOffset = -(Math.abs(e.clientY - centerY)/2)
  }

  if (Math.abs(xOffset) > Math.abs(yOffset)) {
    blur = Math.abs(xOffset) / 10;
  }
  else {
    blur = Math.abs(yOffset) / 10;
  }


  redraw(e.clientX, e.clientY);
}


function redraw(mX, mY){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.shadowOffsetX = xOffset;
  ctx.shadowOffsetY = yOffset;
  ctx.shadowBlur = blur;
  ctx.shadowColor = '#000';
  ctx.drawImage(image1, (window.innerWidth / 2 - (image1.width / 2)), (window.innerHeight / 2 - (image1.height / 2)));
  ctx.restore();
  ctx.beginPath();
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 20;
  ctx.shadowColor = 'RGBA(254, 249, 27, 1)';
  ctx.fillStyle = ("RGBA(254, 249, 27, 0.9)");
  ctx.arc(mX, mY, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
