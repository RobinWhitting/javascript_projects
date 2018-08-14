var wc = document.getElementById('wedgeClock');
var wcx = wc.getContext('2d');
wc.width = (window.innerWidth / 3) + 1;
wc.height = window.innerHeight / 2;
var date, fullDate, hours, minutes, seconds;
var wcRad;
if (wc.height > wc.width) {
  wcRad = wc.width / 2 * 0.8;
}
else{
  wcRad = wc.height / 2 * 0.8;
}

function wedgeClock() {
  date = new Date();
  fullDate = date.toLocaleTimeString();
  hours = (date.getHours() % 12);
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  wcx.fillStyle = '#000';
  wcx.fillRect(0, 0, wc.width, wc.height);
  wcx.beginPath();
  wcx.lineWidth = 40;
  wcx.shadowBlur = 15;
  wcx.shadowColor = '#28d1fa';

  // Background segments

  for (var i = 0; i < 12; i++) {
    wcx.strokeStyle = 'rgba(255,255,255,0.04)';
    wcx.beginPath();
    wcx.arc(wc.width/2, wc.height/2, wcRad, degToRad(((i + 1) * 30) + 1) - setZero(45), degToRad(((i+2) * 30) - 1) - setZero(45), false);
    wcx.stroke();
  }
  for (var i = 1; i < 60; i++) {
    wcx.strokeStyle = 'rgba(255,255,255,0.04)';
    wcx.beginPath();
    wcx.arc(wc.width/2, wc.height/2, wcRad - 50, degToRad((i*6) + 1) - setZero(3), degToRad(((i+1)*6)-1) - setZero(3), false); // Minutes
    wcx.stroke();
    wcx.beginPath();
    wcx.arc(wc.width/2, wc.height/2, wcRad - 100, degToRad((i*6) + 1) - setZero(3), degToRad(((i+1)*6)-1) - setZero(3), false); // Seconds
    wcx.stroke();
  }

  // Display the Date/time
  /*
  wcx.beginPath();
  wcx.font = '30px Arial';
  wcx.fillStyle = '#fff';
  wcx.fillText(fullDate, (wc.width/2) - 60, wc.height/2 + 10);
  */

  for (var i = 0; i < hours + 1; i++) {
    if (i === 0) {
      wcx.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      wcx.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      wcx.strokeStyle = '#fff';
      wcx.shadowColor = '#fff';
    }
      wcx.beginPath();
      wcx.arc(wc.width/2, wc.height/2, wcRad, degToRad(((i + 1) * 30) + 1) - setZero(45), degToRad(((i+2) * 30) - 1) - setZero(45), false);
      wcx.stroke();
  }

  // Foreground Segments - Minutes
  for (var i = 0; i < minutes + 1; i++) {
    if (i % 5 === 0 && i !== 0) {
      wcx.strokeStyle = '#28d1fa';
      wcx.shadowColor = '#28d1fa';
    }
    else if (i === 0) {
      wcx.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      wcx.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      wcx.strokeStyle = '#fff';
      wcx.shadowColor = '#fff';
    }
    wcx.beginPath();
    wcx.arc(wc.width/2, wc.height/2, wcRad - 50, degToRad((i*6) + 1) - setZero(3), degToRad(((i+1)*6)-1) - setZero(3), false); // Minutes
    wcx.stroke();
  }

  // Seconds
  for (var i = 0; i < seconds + 1; i++) {
    if (i % 5 === 0 && i !== 0) {
      wcx.strokeStyle = '#28d1fa';
      wcx.shadowColor = '#28d1fa';
    }
    else if (i === 0) {
      wcx.strokeStyle = 'rgba(191, 42, 42, 1.0)';
      wcx.shadowColor = 'rgba(191, 42, 42, 1.0)';
    }
    else{
      wcx.strokeStyle = '#fff';
      wcx.shadowColor = '#fff';
    }
      wcx.beginPath();
      wcx.arc(wc.width/2, wc.height/2, wcRad - 100, degToRad((i*6) + 1) - setZero(3), degToRad(((i+1)*6)-1) - setZero(3), false); // Minutes
      wcx.stroke();
  }
}

function setZero(degree){
  return (Math.PI / 2) + degToRad(degree);
}
