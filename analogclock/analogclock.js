var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var cc = c.getContext('2d');
var radius = 200;
var lineWidth = radius / 20;
var minuteMarkers = radius - lineWidth;
var hourMarkers = radius - lineWidth * 1.5;
var time, hours, minutes, seconds, milliseconds;
var smoothHours, smoothMinutes, smoothSeconds;
var hourLen = 0.6 , hourWidth = 5;
var secLen = 0.95, secWidth = 1;
var minLen = 0.8, minWidth = 2.5;


  drawClock();
  setInterval(drawClock, 50);


function drawClock(){
  cc.clearRect(0, 0, c.width, c.height);
  // Outline
  cc.beginPath();
  cc.lineWidth = lineWidth;
  cc.strokeStyle = '#333';
  cc.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2, false);
  cc.stroke();

  // Minute Markers
  for (var i = 0; i < 60; i++) {
    cc.beginPath();
    cc.lineWidth = lineWidth;
    cc.strokeStyle = '#333';
    cc.arc(c.width / 2, c.height / 2, minuteMarkers, degToRad(i * 6), degToRad((i * 6) + 1), false);
    cc.stroke()
  }

  // Hour Markers
  for (var i = 1; i <= 12; i++) {
    var rad = new Vector(radius * 0.75, degToRad(i * 30) - Math.PI / 2);
    cc.beginPath();
    cc.lineWidth = lineWidth * 2;
    cc.strokeStyle = '#000';
    cc.arc(c.width / 2, c.height / 2, hourMarkers, degToRad(i * 30), degToRad((i * 30) + 1), false);
    cc.stroke();
    cc.font = '20px Nodo Sans';
    cc.textAlign = 'center';
    cc.textBaseline = 'middle';
    cc.fillText(i, c.width / 2 + rad.getX(), c.height / 2 + rad.getY());
  }

  time = new Date();
  hours = time.getHours() % 12;
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  milliseconds = time.getMilliseconds();

  smoothHours = hours + (minutes / 60);
  smoothMinutes = minutes + (seconds / 60);
  smoothSeconds = seconds + (milliseconds / 1000);

  drawHands(smoothSeconds, secLen, secWidth, 60);
  drawHands(smoothMinutes, minLen, minWidth, 60);
  drawHands(smoothHours, hourLen, hourWidth, 12);
}


function degToRad(degree) {
  return (Math.PI / 180) * degree;
}

function drawHands(timeVal, len, width, maxTime) {
  var m = radius * len ;
  var a = (Math.PI * 2) * (timeVal / maxTime) - (Math.PI / 2);
  var v = new Vector(m, a); // from vector.js file
  cc.beginPath();
  cc.lineWidth = width;
  cc.moveTo(c.width / 2, c.height / 2);
  cc.lineTo((c.width / 2) + v.getX(), (c.height / 2) + v.getY());
  cc.stroke();
}
