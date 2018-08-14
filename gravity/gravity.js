//Declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var circleArray;
var x, y, radius, dx, dy, yFriction = 0.8, xFriction = 0.8;
var yGravity = 0, xGravity = 0;
var infoBar = 300;


var numCircles = 400, minRadius = 5, maxRadius = 20, minVel = -4, maxVel = 4;
var colourArray = [
  '#F6C27C',
  '#24DDB4',
  '#FAF97B',
  '#F49CB4',
  '#A0D4F5'
];

//Global Event Liseteners
window.addEventListener('resize', function(event) {
  init();
});

window.addEventListener('keydown', function(event) {
  console.log(event);
  switch (event.keyCode) {
    case 32:
      for (var i = 0; i < circleArray.length; i++) {
        var energy = getRandomInt(20, 40);
        if (xGravity !== 0) {
          if (xGravity == -1) {
            circleArray[i].dx = energy;
          }
          else{
            circleArray[i].dx = -energy;
          }
        }
        else if (yGravity !== 0) {
          if (yGravity == -1) {
            circleArray[i].dy = energy;
          }
          else{
            circleArray[i].dy = -energy;
          }
        }
      }
    break;

    case 37:
      gravityShift(-1,0);
    break;

    case 38:
      gravityShift(0,-1);
    break;

    case 39:
      gravityShift(1,0);
    break;

    case 40:
      gravityShift(0,1);
    break;
  }
});

window.addEventListener('mousedown', function(event) {
  init();
});

// Objects
function Circle(x, y, radius, dx, dy, colour) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.colour = colour;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
  }

  this.update = function(event) {
    if (this.x >= canvas.width - this.radius - this.dx - infoBar) {
      this.x = canvas.width - this.radius - infoBar;
      if (xGravity !== 0) {
        this.dx = -this.dx * xFriction;
      }
      else{
        this.dx = -this.dx;
      }
    }
    else if (this.x <= 0 + this.radius) {
      this.x = 0 + this.radius;
      if (xGravity !== 0) {
        this.dx = -this.dx * xFriction;
      }
      else{
        this.dx = -this.dx;
      }
    }
    else if (xGravity !== 0) {
      this.dx += xGravity;
    }

    if (this.y >= canvas.height - this.radius) {
      this.y = canvas.height - this.radius;
      if (yGravity !== 0) {
        this.dy = -this.dy * yFriction;
      }
      else{
        this.dy = -this.dy;
      }
    }
    else if (this.y - this.radius <= 0) {
      this.y = this.radius;
      if (yGravity !== 0) {
        this.dy = -this.dy * yFriction;
      }
      else{
        this.dy = -this.dy;
      }
    }
    else if (yGravity !== 0 ) {
      this.dy += yGravity;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

//Functions
function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  circleArray = [];
  gravityShift(0,0);

  for (var i = 0; i < numCircles; i++) {
    dx = 0;
    dy = 0;
    while (dx === 0) {
      dx = getRandomInt(minVel, maxVel);
    }
    while (dy === 0) {
      dy = getRandomInt(minVel, maxVel);
    }

    radius = getRandomInt(minRadius, maxRadius);
    x = getRandomInt(radius, canvas.width - radius - infoBar);
    y = getRandomInt(radius + dy, canvas.height - radius - dy);
    var colour = colourArray[getRandomInt(0, 4)];
    circleArray.push(new Circle(x, y, radius, dx, dy, colour));
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

  //border line
  ctx.beginPath();
  ctx.moveTo(canvas.width-infoBar, 0);
  ctx.lineTo(canvas.width-infoBar, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();

  //info box
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.fillRect(canvas.width - infoBar, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = '12px Arial';
  ctx.fillText("- Press a direction arrow to begin", canvas.width - (infoBar - 10), 20);
  ctx.fillText("- Space bar add energy once gravity starts", canvas.width - (infoBar - 10), 35);
  ctx.fillText("- Click the screen to reset", canvas.width - (infoBar - 10), 50);
  ctx.fillText("xGravity: " + xGravity, canvas.width - (infoBar - 10), 65);
  ctx.fillText("yGravity: " + yGravity, canvas.width - (infoBar - 10), 80);

}

function gravityShift(xG, yG) {
  xGravity = xG;
  yGravity = yG;
}

//Procedural Code
init();
animate();
