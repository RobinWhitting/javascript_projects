// Declarations
var bc = document.getElementById('binaryClock');
var bx = bc.getContext('2d');
bc.width = window.innerWidth / 3;
bc.height = window.innerHeight / 2;
var hitColor = 'blue', missColor = 'white';
var bcRad;
if (bc.width > bc.height) {
  bcRad = bc.height / 11;
}
else{
  bcRad = bc.width / 15;
}

var diameter = 2 * bcRad, spacer = bcRad / 3;
console.log(bcRad);
var lightArray = [];
var time, hours, minutes, seconds;


var col = [
  bc.width / 2 - ((spacer * 2.5) + (diameter * 2.5)),
  bc.width / 2 - ((spacer * 1.5) + (diameter * 1.5)),
  bc.width / 2 - ((spacer * 0.5) + (bcRad)),
  bc.width / 2 + ((spacer * 0.5) + (bcRad)),
  bc.width / 2 + ((spacer * 1.5) + (diameter * 1.5)),
  bc.width / 2 + ((spacer * 2.5) + (diameter * 2.5))
];

var row = [
  bc.height / 2 + ((spacer * 1.5) + (diameter * 1.5)),
  bc.height / 2 + ((spacer * 0.5) + (bcRad)),
  bc.height / 2 - ((spacer * 0.5) + (bcRad)),
  bc.height / 2 - ((spacer * 1.5) + (diameter * 1.5))
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
function Light(x, y, bcRad, color) {
  this.x = x;
  this.y = y;
  this.bcRad = bcRad;
  this.color = color;
  this.draw = function(){
    bx.beginPath()
    bx.fillStyle = this.color;
    bx.arc(this.x, this.y, this.bcRad, 0, Math.PI * 2, false);
    bx.strokeStyle = 'rgba(255,255,255,0.5)';
    bx.fill();
    bx.stroke();
  }
}
// Functions
function animate(){
  bx.fillStyle = '#000';
  bx.fillRect(0, 0, bc.width, bc.height);

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

function displayBinary(){
  for (var i = 0; i < lightPos.length; i++) {
    lightArray[i] = new Light(lightPos[i][0], lightPos[i][1], bcRad, missColor);
  }
  animate();
}
