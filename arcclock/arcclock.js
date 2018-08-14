var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var cc = c.getContext('2d');
var now, time, hours, minutes, seconds, milliseconds, newSeconds;


function circles(){

  cc.clearRect(0, 0, c.width, c.height);
  var gradient = cc.createRadialGradient(c.width/2, c.height/2, 5, c.width/2, c.height/2, 300);
  gradient.addColorStop(0, '#09303a');
  gradient.addColorStop(1, '#000');
  cc.fillStyle = gradient;
  cc.fillRect(0,0, c.width, c.height);

  cc.strokeStyle = '#28d1fa';
  cc.lineWidth = 20;
  cc.lineCap = 'round';
  cc.shadowBlur = 15;
  cc.shadowColor = '#28d1fa';
  cc.beginPath();
  cc.arc(c.width/2, c.height/2, 210, degToRad(270), degToRad((hours * 15) - 90), false);
  cc.stroke();
  cc.closePath();

  cc.beginPath();
  cc.arc(c.width/2, c.height/2, 180, degToRad(270), degToRad((minutes * 6) - 90), false);
  cc.stroke();
  cc.closePath();

  cc.beginPath();
  cc.arc(c.width/2, c.height/2, 150, degToRad(270), degToRad((newSeconds * 6) - 90), false);
  cc.stroke();
  cc.closePath();

  cc.beginPath();
  cc.font = '25px Arial';
  cc.fillStyle = '#28d1fa';
  cc.fillText(today, (c.width/2) - 100, (c.height/2) - 10);
  cc.closePath();

  cc.beginPath();
  cc.font = '15px Arial';
  cc.fillText(time, (c.width / 2) - 35, (c.height / 2) + 10);
  cc.closePath();
}

function dateInfo() {
  now = new Date();
  today = now.toDateString();
  time = now.toLocaleTimeString();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  milliseconds = now.getMilliseconds();
  newSeconds = seconds + (milliseconds / 1000);
  circles();
}

function degToRad(degrees) {
  var factor = Math.PI / 180;
  return degrees * factor;
}
dateInfo();
setInterval(dateInfo, 50);
