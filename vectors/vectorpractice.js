var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var cc = c.getContext('2d');
var radius = 100;
var secLen = 0.95, minLen = 0.75, hourLen = 0.6;
var secWidth = 1, minWidth = 2.5, hourWidth = 5;


drawClock();
setInterval(drawClock, 50);


function drawClock() {
  cc.clearRect(0, 0, c.width, c.height);
  cc.beginPath();
  cc.arc(c.width / 2, c.height / 2, radius, -Math.PI / 2, Math.PI, false);
  cc.stroke();

  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliSeconds = time.getMilliseconds();
  var smoothSeconds = seconds + (milliSeconds/1000);

  drawHands(smoothSeconds, secLen, secWidth);
  drawHands(minutes, minLen, minWidth);
  drawHands(hours, hourLen, hourWidth);
}


function drawHands(timeVal, len, width) {
  var m = radius * len ;
  var a = Math.PI * 2 * (timeVal / 60) - (Math.PI / 2);
  var coords = vecToCoord(m, a); // coords relative to zero (center of circle)
  cc.beginPath();
  cc.lineWidth = width;
  cc.moveTo(c.width / 2, c.height / 2);
  cc.lineTo((c.width / 2) + coords[0], (c.height / 2) + coords[1]);
  cc.stroke();
}
