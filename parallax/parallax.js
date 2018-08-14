var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//declaration of variables
var ctx = canvas.getContext('2d');
var numCircles = 200;
var x, y, dx, dy, radius, maxRadius = 20, minRadius = 5, minVel = -4, maxVel = 4;
var circleArray = [];

//Event Listeners
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

window.addEventListener('keydown', function(event) {
  console.log(event);

  switch (event.keyCode) {
    case 37:
    for (var i = 0; i < circleArray.length; i++) {
      zeroDy(i);
      circleArray[i].dx = -Math.abs(circleArray[i].dx);
    }
    break;

    case 38:
    for (var i = 0; i < circleArray.length; i++) {
      zeroDx(i);
      circleArray[i].dy = -Math.abs(circleArray[i].dy);
    }
    break;

    case 39:
    for (var i = 0; i < circleArray.length; i++) {
      zeroDy(i);
      circleArray[i].dx = Math.abs(circleArray[i].dx);
    }
    break;

    case 40:
    for (var i = 0; i < circleArray.length; i++) {
      zeroDx(i);
      circleArray[i].dy = Math.abs(circleArray[i].dy);
    }
    break;
  }
});

//Objects
function Circle(x, y, radius, minRadius, maxRadius, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;
  this.maxRadius = maxRadius;
  console.log(this.maxRadius);

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fill();
  }

  this.update = function(){
    if (this.x > canvas.width + this.radius) {
      this.x = 0 - this.radius;
      this.y = getRandomInt(this.radius, canvas.height - this.radius);
    }
    else if (this.x < 0 - this.radius) {
      this.x = canvas.width + this.radius;
      this.y = getRandomInt(this.radius, canvas.height - this.radius);
    }

    if (this.y > canvas.height + this.radius) {
      this.y = 0 - this.radius;
      this.x = getRandomInt(this.radius, canvas.width - this.radius);
    }
    else if (this.y < 0 - this.radius) {
      this.y = canvas.height + this.radius;
      this.x = getRandomInt(this.radius, canvas.width - this.radius);
    }
    
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

//functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
  //Initialisation happens here
  minRadius = 5;
  maxRadius = 20;
  for (var i = 0; i < numCircles; i++) {
    dy = 0;
    radius = getRandomInt(minRadius, maxRadius);
    x = getRandomInt(radius, canvas.width-radius);
    y = getRandomInt(radius, canvas.height-radius);
    dx = radius/4;

    circleArray.push(new Circle(x, y, radius, minRadius, maxRadius, dx, dy));
  }
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, canvas.width, canvas.height);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

function zeroDy(i) {
  circleArray[i].dy = 0;
  circleArray[i].dx = circleArray[i].radius/4;
}

function zeroDx(i) {
  circleArray[i].dx = 0;
  circleArray[i].dy = circleArray[i].radius/4;

}

//procedural code
init();
