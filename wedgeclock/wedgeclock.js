var c = document.getElementById('canvas');
var cc = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
var date, fullDate, hours, minutes, seconds;

function displayTime() {
  date = new Date();
  fullDate = date.toLocaleTimeString();
  hours = (date.getHours() % 12);
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  cc.fillStyle = '#000';
  cc.fillRect(0, 0, c.width, c.height);
  cc.beginPath();
  cc.lineWidth = 40;
  cc.shadowBlur = 15;
  cc.shadowColor = '#28d1fa';

  // Background segments
  for (var i = 0; i < 61; i++) {
    cc.strokeStyle = 'rgba(255,255,255,0.04)';
    cc.beginPath();
    cc.arc(c.width/2, c.height/2, 200, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false); // Hours
    cc.stroke();
    cc.beginPath();
    cc.arc(c.width/2, c.height/2, 150, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false); // Minutes
    cc.stroke();
    cc.beginPath();
    cc.arc(c.width/2, c.height/2, 100, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false); // Seconds
    cc.stroke();
  }

  // Display the Date/time

  cc.beginPath();
  cc.font = '30px Arial';
  cc.fillStyle = '#fff';
  cc.fillText(fullDate, (c.width/2) - 60, c.height/2 + 10);


  for (var i = 0; i < hours + 1; i++) {
    if (i % 5 === 0 && i !== 0) {
      cc.strokeStyle = '#28d1fa';
      cc.shadowColor = '#28d1fa';
    }
    else if (i === 0) {
      cc.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      cc.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      cc.strokeStyle = '#fff';
      cc.shadowColor = '#fff';
    }
      cc.beginPath();
      cc.arc(c.width/2, c.height/2, 200, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false);
      cc.stroke();
  }


  // Foreground Segments - Minutes
  for (var i = 0; i < minutes + 1; i++) {
    if (i % 5 === 0 && i !== 0) {
      cc.strokeStyle = '#28d1fa';
      cc.shadowColor = '#28d1fa';
    }
    else if (i === 0) {
      cc.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      cc.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      cc.strokeStyle = '#fff';
      cc.shadowColor = '#fff';
    }
    cc.beginPath();
    cc.arc(c.width/2, c.height/2, 150, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false);
    cc.stroke();
  }

  // Seconds

  for (var i = 0; i < seconds + 1; i++) {
    if (i % 5 === 0 && i !== 0) {
      cc.strokeStyle = '#28d1fa';
      cc.shadowColor = '#28d1fa';
    }
    else if (i === 0) {
      cc.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      cc.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      cc.strokeStyle = '#fff';
      cc.shadowColor = '#fff';
    }
      cc.beginPath();
      cc.arc(c.width/2, c.height/2, 100, degToRad((i*6) + 1), degToRad(((i+1)*6)-1), false);
      cc.stroke();
  }
}

function degToRad(degree) {
  return ((Math.PI / 180) * (268 + degree));
}
displayTime();
setInterval(displayTime, 200);
