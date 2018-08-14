var clock = document.getElementById('clock');
var hexColour = document.getElementById('hexcode');
var hexStr;



function getTime(){
  var time = new Date();
  var hours = (time.getHours()).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  hexStr = '#' + hours + minutes + seconds;
  clock.textContent = hours + ':' + minutes + ':' + seconds;
  hexColour.textContent = hexStr;
  document.body.style.backgroundColor = hexStr;
}

getTime();
setInterval(getTime, 1000);
