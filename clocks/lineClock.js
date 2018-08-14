var lc = document.getElementById('lineClock');
lc.width = window.innerWidth / 3.
lc.height = window.innerHeight / 2;
var lccc = lc.getContext('2d');
var date, months, monthName, days, daysCardinal, hours, minutes, seconds, milliseconds, smoothSeconds;
var leftLimit = 130, startHeight = 20, spacer = 20;

function displayLines() {
  lccc.clearRect(0, 0, lc.width, lc.height);
  var gradient = lccc.createRadialGradient(lc.width/2, lc.height/2, 5, lc.width/2, lc.height/2, 300);
  gradient.addColorStop(0, '#09303a');
  gradient.addColorStop(1, '#000');
  lccc.fillStyle = gradient;
  lccc.fillRect(0,0, lc.width, lc.height);

  lccc.strokeStyle = '#28d1fa';
  lccc.lineWidth = 20;
  lccc.lineCap = 'round';
  lccc.shadowBlur = 15;
  lccc.shadowColor = '#28d1fa';
  lccc.font = '20px Arial';
  lccc.fillStyle = '#28d1fa';

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
  lccc.beginPath();
  lccc.moveTo(leftLimit, startHeight + spacer);
  lccc.lineTo(lineLength(years, 3000), startHeight + spacer);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(years, 10, startHeight + spacer + 8);
  lccc.closePath();

  // Months
  lccc.beginPath();
  lccc.moveTo(leftLimit, (startHeight + spacer) * 2);
  lccc.lineTo(lineLength(months, 12), (startHeight + spacer)  * 2);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(monthName, 10, ((startHeight + spacer) * 2) + 8);
  lccc.closePath();

  // Days
  lccc.beginPath();
  lccc.moveTo(leftLimit, (startHeight + spacer) * 3);
  lccc.lineTo(lineLength(days, dayLimit), (startHeight + spacer) * 3);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(daysCardinal, 10, ((startHeight + spacer) * 3) + 8);
  lccc.closePath();

  // Hours
  lccc.beginPath();
  lccc.moveTo(leftLimit, (startHeight + spacer) * 4);
  lccc.lineTo(lineLength(hours, 60), (startHeight + spacer) * 4);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(hours + ' hours', 10, ((startHeight + spacer) * 4) + 8);
  lccc.closePath();

  // Minutes
  lccc.beginPath();
  lccc.moveTo(leftLimit, (startHeight + spacer) * 5);
  lccc.lineTo(lineLength(minutes, 60), (startHeight + spacer) * 5);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(minutes + ' minutes', 10, ((startHeight + spacer) * 5) + 8);
  lccc.closePath();

  // Seconds
  lccc.beginPath();
  lccc.moveTo(leftLimit, (startHeight + spacer) * 6);
  lccc.lineTo(lineLength(smoothSeconds, 60), (startHeight + spacer) * 6);
  lccc.stroke();

  lccc.beginPath();
  lccc.fillText(seconds + ' seconds', 10, ((startHeight + spacer) * 6) + 8);
  lccc.closePath();
}

function lineLength(fraction, fractionMax) {
  return leftLimit + ((lc.width - leftLimit) / fractionMax) * fraction;
}
