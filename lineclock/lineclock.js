var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var cc = c.getContext('2d');

var date, months, monthName, days, daysCardinal, hours, minutes, seconds, milliseconds, smoothSeconds;
var leftLimit = 130, startHeight = 20, spacer = 20;

function displayLines() {
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
  cc.font = '20px Arial';
  cc.fillStyle = '#28d1fa';

  date = new Date();
  years = date.getFullYear();
  months = date.getMonth() + 1;
  monthName = date.toLocaleString('en-us', { month: "long" });
  days = date.getDate();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  smoothSeconds = seconds + (date.getMilliseconds()/1000);

  if (months == 4 || months == 6 || months == 9 || months == 11) {
    dayLimit = 30;
  }
  else if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 ||
    months == 12) {
    dayLimit = 31;
  }
  else {
    dayLimit = 28;
  }
// st nd rd th
  if (days == 1 || days == 21 || days == 31 ) {
    daysCardinal = days + 'st';
  }
  else if (days == 2 || days == 22) {
    daysCardinal = days + 'nd';
  }
  else if (days == 3 || days == 23) {
    daysCardinal = days + 'rd';
  }
  else {
    daysCardinal = days + 'th';
  }

  // Years
  cc.beginPath();
  cc.moveTo(leftLimit, startHeight + spacer);
  cc.lineTo(lineLength(years, 3000), startHeight + spacer);
  cc.stroke();

  cc.beginPath();
  cc.fillText(years, 10, startHeight + spacer + 8);
  cc.closePath();

  // Months
  cc.beginPath();
  cc.moveTo(leftLimit, (startHeight + spacer) * 2);
  cc.lineTo(lineLength(months, 12), (startHeight + spacer)  * 2);
  cc.stroke();

  cc.beginPath();
  cc.fillText(monthName, 10, ((startHeight + spacer) * 2) + 8);
  cc.closePath();

  // Days
  cc.beginPath();
  cc.moveTo(leftLimit, (startHeight + spacer) * 3);
  cc.lineTo(lineLength(days, dayLimit), (startHeight + spacer) * 3);
  cc.stroke();

  cc.beginPath();
  cc.fillText(daysCardinal, 10, ((startHeight + spacer) * 3) + 8);
  cc.closePath();

  // Hours
  cc.beginPath();
  cc.moveTo(leftLimit, (startHeight + spacer) * 4);
  cc.lineTo(lineLength(hours, 60), (startHeight + spacer) * 4);
  cc.stroke();

  cc.beginPath();
  cc.fillText(hours + ' hours', 10, ((startHeight + spacer) * 4) + 8);
  cc.closePath();

  // Minutes
  cc.beginPath();
  cc.moveTo(leftLimit, (startHeight + spacer) * 5);
  cc.lineTo(lineLength(minutes, 60), (startHeight + spacer) * 5);
  cc.stroke();

  cc.beginPath();
  cc.fillText(minutes + ' minutes', 10, ((startHeight + spacer) * 5) + 8);
  cc.closePath();

  // Seconds
  cc.beginPath();
  cc.moveTo(leftLimit, (startHeight + spacer) * 6);
  cc.lineTo(lineLength(smoothSeconds, 60), (startHeight + spacer) * 6);
  cc.stroke();

  cc.beginPath();
  cc.fillText(seconds + ' seconds', 10, ((startHeight + spacer) * 6) + 8);
  cc.closePath();
}

function lineLength(fraction, fractionMax) {
  return leftLimit + ((c.width - leftLimit) / fractionMax) * fraction;
}

window.addEventListener('resize', function() {
  init();
});

function init() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  displayLines();
  setInterval(displayLines, 50);
}

init();
