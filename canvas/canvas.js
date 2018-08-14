var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
var x, y, distance;
var radius = 30, ring = 100;
var dx;
var dy;
var colour = [];
var stringColour = '';
var gravity = 1;
var circleArray = [];
var numCircles = 400;

var colourArray = [
  '#F6C27C',
  '#24DDB4',
  '#FAF97B',
  '#F49CB4',
  '#A0D4F5'
];

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius, colour) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.maxRadius = this.radius * 2;
    this.minRadius = this.radius / 2;
    this.colour = colour;

    this.draw  = function() {
      ctx.beginPath();
      ctx.fillStyle = this.colour;
      ctx.strokeStyle = "black";
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      ctx.fill();

    }

    this.update = function() {
      if (this.x > canvas.width - this.radius || this.x < 0 + this.radius) {
        this.dx = -this.dx;
      }

      if (this.y > canvas.height - this.radius || this.y < 0 +this. radius) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      //interactivity
      if (distance(mouse.x, mouse.y, this.x, this.y) < ring) {
        if (this.radius < this.maxRadius) {
          this.radius += 1;
        }
      }
      else if (this.radius > this.minRadius){
        this.radius -= 1;
      }

      this.draw();
    }
} // End Circle Object

function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
  circleArray = [];
  for (var i = 0; i < numCircles; i++) {
    var colour = colourArray[Math.floor(Math.random()* colourArray.length)];
    x = Math.random() * (canvas.width - (radius*2)) + radius;
    y = Math.random() * (canvas.height - (radius*2)) + radius;
    dx = (Math.random() -0.5) * 6;
    dy = (Math.random() - 0.5) * 6;
    radius = getRandomInt(5, 30);
    circleArray.push(new Circle(x, y, dx, dy, radius, colour));
  }
  animate();
}


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, canvas.width, canvas.height);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

  //Cirle drawn around mouse pointer for Pythagoran test
  /*ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.arc(mouse.x, mouse.y, ring, 0, Math.PI * 2, false);
  ctx.stroke();*/
}
init();
