var rc = document.getElementById('arcClock');
rc.width = window.innerWidth / 3;
rc.height = window.innerHeight / 2;
var rcx = rc.getContext('2d');
var now, today, time, hours, minutes, seconds, milliseconds, newSeconds;
var cRad = (rc.height / 2) * 0.8;


function circles(){

  rcx.clearRect(0, 0, rc.width, rc.height);
  var gradient = rcx.createRadialGradient(rc.width/2, rc.height/2, 5, rc.width/2, rc.height/2, cRad);
  gradient.addColorStop(0, '#09303a');
  gradient.addColorStop(1, '#000');
  rcx.fillStyle = gradient;
  rcx.fillRect(0,0, rc.width, rc.height);

  rcx.strokeStyle = '#28d1fa';
  rcx.lineWidth = 20;
  rcx.lineCap = 'round';
  rcx.shadowBlur = 15;
  rcx.shadowColor = '#28d1fa';
  rcx.beginPath();
  rcx.arc(rc.width/2, rc.height/2, cRad, degToRad(270), degToRad((hours * 15) - 90), false);
  rcx.stroke();
  rcx.closePath();

  rcx.beginPath();
  rcx.arc(rc.width/2, rc.height/2, cRad - 30, degToRad(270), degToRad((minutes * 6) - 90), false);
  rcx.stroke();
  rcx.closePath();

  rcx.beginPath();
  rcx.arc(rc.width/2, rc.height/2, cRad - 60, degToRad(270), degToRad((newSeconds * 6) - 90), false);
  rcx.stroke();
  rcx.closePath();

  rcx.beginPath();
  rcx.textAlign = 'center';
  rcx.textBaseline = 'middle';
  var fontSize = cRad / 10;
  rcx.font = fontSize + 'px Arial';
  rcx.fillStyle = '#28d1fa';
  rcx.fillText(today, (rc.width/2), (rc.height/2) - 10);
  rcx.closePath();

  rcx.beginPath();
  rcx.font = (fontSize * 0.8) + 'px Arial';
  rcx.fillText(time, (rc.width / 2), (rc.height / 2) + 10);
  rcx.closePath();
}

function circleClock() {
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
