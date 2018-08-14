var ac = document.getElementById('analogClock');
ac.width = window.innerWidth / 3;
ac.height = window.innerHeight / 2;
var acx = ac.getContext('2d');
var radius = (ac.height / 2) * 0.8;
var lineWidth = radius / 20;
var minuteMarkers = radius - lineWidth;
var hourMarkers = radius - lineWidth * 1.5;
var time, hours, minutes, seconds, milliseconds;
var smoothHours, smoothMinutes, smoothSeconds;
var hourLen = 0.6 , hourWidth = 5;
var secLen = 0.95, secWidth = 1;
var minLen = 0.8, minWidth = 2.5;

function drawClock(){
  acx.clearRect(0, 0, ac.width, ac.height);
  // Outline
  acx.beginPath();
  acx.lineWidth = lineWidth;
  acx.strokeStyle = '#333';
  acx.arc(ac.width / 2, ac.height / 2, radius, 0, Math.PI * 2, false);
  acx.stroke();

  // Minute Markers
  for (var i = 0; i < 60; i++) {
    acx.beginPath();
    acx.lineWidth = lineWidth;
    acx.strokeStyle = '#333';
    acx.arc(ac.width / 2, ac.height / 2, minuteMarkers, degToRad(i * 6), degToRad((i * 6) + 1), false);
    acx.stroke()
  }

  // Hour Markers
  for (var i = 1; i <= 12; i++) {
    var rad = new Vector(radius * 0.75, degToRad(i * 30) - Math.PI / 2);
    acx.beginPath();
    acx.lineWidth = lineWidth * 2;
    acx.strokeStyle = '#000';
    acx.arc(ac.width / 2, ac.height / 2, hourMarkers, degToRad(i * 30), degToRad((i * 30) + 1), false);
    acx.stroke();
    acx.font = '20px Nodo Sans';
    acx.textAlign = 'center';
    acx.textBaseline = 'middle';
    acx.fillText(i, ac.width / 2 + rad.getX(), ac.height / 2 + rad.getY());
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

function drawHands(timeVal, len, width, maxTime) {
  var m = radius * len ;
  var a = (Math.PI * 2) * (timeVal / maxTime) - (Math.PI / 2);
  var v = new Vector(m, a); // from vector.js file
  acx.beginPath();
  acx.lineWidth = width;
  acx.moveTo(ac.width / 2, ac.height / 2);
  acx.lineTo((ac.width / 2) + v.getX(), (ac.height / 2) + v.getY());
  acx.stroke();
}
