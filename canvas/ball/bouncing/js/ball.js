var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext('2d');

var ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  xVel: 5,
  yVel: 5,
  radius: 50
}


function gameLoop(){
  updatePosition();
  drawCanvas();
  requestAnimationFrame(gameLoop);
}


function updatePosition(){
  if (ball.x + ball.radius >= c.width || ball.x - ball.radius <= 0) {
    ball.xVel = -ball.xVel;
  }
  if (ball.y + ball.radius >= c.height || ball.y - ball.radius <= 0) {
    ball.yVel = -ball.yVel;
  }
  ball.x += ball.xVel;
  ball.y += ball.yVel;
}

function drawCanvas(){
  //ctx.clearRect(0, 0, c.width, c.height);
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();
}


gameLoop();
