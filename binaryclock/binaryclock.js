// Declarations
var c = document.getElementById('canvas');
var cc = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
var hitColor = 'blue', missColor = 'white';
var radius = 40, diameter = 2 * radius, spacer = 20;
var lightArray = [];
var time, hours, minutes, seconds;


var col = [
  c.width / 2 - ((spacer * 2.5) + (diameter * 2.5)),
  c.width / 2 - ((spacer * 1.5) + (diameter * 1.5)),
  c.width / 2 - ((spacer * 0.5) + (radius)),
  c.width / 2 + ((spacer * 0.5) + (radius)),
  c.width / 2 + ((spacer * 1.5) + (diameter * 1.5)),
  c.width / 2 + ((spacer * 2.5) + (diameter * 2.5))
];

var row = [
  c.height / 2 + ((spacer * 1.5) + (diameter * 1.5)),
  c.height / 2 + ((spacer * 0.5) + (radius)),
  c.height / 2 - ((spacer * 0.5) + (radius)),
  c.height / 2 - ((spacer * 1.5) + (diameter * 1.5))
];

var lightPos = [
  [col[0], row[0]],  [col[0], row[1]],
  [col[1], row[0]],  [col[1], row[1]],  [col[1], row[2]],  [col[1], row[3]],
  [col[2], row[0]],  [col[2], row[1]],  [col[2], row[2]],
  [col[3], row[0]],  [col[3], row[1]],  [col[3], row[2]],  [col[3], row[3]],
  [col[4], row[0]],  [col[4], row[1]],  [col[4], row[2]],
  [col[5], row[0]],  [col[5], row[1]],  [col[5], row[2]],  [col[5], row[3]]
];

// Objects
function Light(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  //this.gradient = cc.createRadialGradient(this.x, this.y, this.radius/2, this.x, this.y, this.radius);
  //this.gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
  //this.gradient.addColorStop(1, 'blue');
  this.draw = function(){
    cc.beginPath()
    cc.fillStyle = this.color;
    cc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    cc.strokeStyle = 'rgba(255,255,255,0.5)';
    cc.fill();
    cc.stroke();
  }
}
// Functions
function init(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  for (var i = 0; i < lightPos.length; i++) {
    lightArray[i] = new Light(lightPos[i][0], lightPos[i][1], radius, missColor);
  }
  animate();
}

function animate(){
  cc.fillStyle = '#000';
  cc.fillRect(0, 0, c.width, c.height);

  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  for (var i = 0; i < lightArray.length; i++) {
    lightArray[i].color = missColor;
  }

  checkTens(hours, 0);
  checkSingles(hours, 2);
  checkTens(minutes, 6);
  checkSingles(minutes, 9);
  checkTens(seconds, 13);
  checkSingles(seconds, 16);




  for (var i = 0; i < lightArray.length; i++) {
    lightArray[i].draw();
  }
}

function checkTens(fullNum, start){
  var tens = fullNum - (fullNum % 10);

  switch (tens) {
    case 50:
    lightArray[start + 2].color = hitColor;
    lightArray[start].color = hitColor;
    break;

    case 40:
      lightArray[start + 2].color = hitColor;
    break;

    case 30:
      lightArray[start + 1].color = hitColor;
      lightArray[start].color = hitColor;
    break;

    case 20:
      lightArray[start + 1].color = hitColor;
    break;

    case 10:
      lightArray[start].color = hitColor;
    break;
  }

}

function checkSingles(fullNum, start) {

  switch (fullNum % 10) {
    case 9:
      lightArray[start + 3].color = hitColor;
      lightArray[start].color = hitColor;
    break;

    case 8:
      lightArray[start + 3].color = hitColor;
    break;

    case 7:
      lightArray[start + 2].color = hitColor;
      lightArray[start + 1].color = hitColor;
      lightArray[start].color = hitColor;
    break;

    case 6:
      lightArray[start + 2].color = hitColor;
      lightArray[start + 1].color = hitColor;
    break;

    case 5:
      lightArray[start + 2].color = hitColor;
      lightArray[start].color = hitColor;
    break;

    case 4:
      lightArray[start + 2].color = hitColor;
    break;

    case 3:
      lightArray[start + 1].color = hitColor;
      lightArray[start].color = hitColor;
    break;

    case 2:
      lightArray[start + 1].color = hitColor;
    break;

    case 1:
      lightArray[start].color = hitColor;
    break;
  }
}




// Global Event Listeners
window.addEventListener('resize' , function() {
  init();
});

// Procedural Code
init();
setInterval(animate, 500);
