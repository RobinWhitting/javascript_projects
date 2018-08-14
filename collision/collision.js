//Variable declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ballArray, numBalls = 200;
var dx, dy;
var minRadius = 5;
var maxRadius = 20;
var minVel = -4;
var maxVel = 4;
var colour;
var colourArray = [
  '#2E112D', '#540032', '#820333', '#C9283E', '#F0433A'
];

// Objects
function Ball (x, y, dx, dy, radius, colour) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.colour = colour;

  this.draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = this.colour;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  this.update = function() {
    this.draw();
  }
}

// Functions
function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ballArray = [];

  for (var i = 0; i < numBalls; i++) {
    dx = 0, dy = 0;
    radius = getRandomInt(minRadius, maxRadius);
    x = getRandomInt(radius, canvas.width - radius);
    y = getRandomInt(radius, canvas.height - radius);
    while (dx === 0){
      dx = getRandomInt(minVel, maxVel);
    }
    while (dy === 0) {
      dy = getRandomInt(minVel, maxVel);
    }
    colour = colourArray[getRandomInt(0, colourArray.length-1)];

    //Stop the 2nd and more ball from spawning on top of any other
    if (i !== 0) {
      for (var j = 0; j < ballArray.length; j++) {
        if (distance(x, y, ballArray[j].x, ballArray[j].y) - radius - ballArray[j].radius < 0) {
          x = getRandomInt(radius, canvas.width - radius);
          y = getRandomInt(radius, canvas.height - radius);
          j = -1;
        }
      }
    }
    ballArray.push(new Ball(x, y, dx, dy, radius, colour));
  }
  animate();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, canvas.width, canvas.height);

  ballArray.forEach(ball => {
    ball.update();
  });
}

function distance(x1, y1, x2, y2) {
  var xDistance = x1 - x2;
  var yDistance = y1 - y2;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


// Global Event Listeners
addEventListener('resize',  function() {
  init();
});

//Procedural Code
init();
