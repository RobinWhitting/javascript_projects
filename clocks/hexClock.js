var h = document.getElementById('hexClockFrame');
h.width = window.innerWidth / 3;
h.height = window.innerHeight / 2;
var hc = h.getContext('2d');
var hexStr;

function getTime(){
  hc.clearRect(0, 0, h.width, h.height);
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

  hc.beginPath();
  hc.fillStyle = hexStr;
  hc.fillRect(0, 0, h.width, h.height);
  hc.fill();

  hc.beginPath();
  hc.textAlign = 'center';
  hc.font = '25px Nodo Sans';
  hc.textBaseline = 'middle';
  hc.fillStyle = 'white';
  hc.fillText(hours + ':' + minutes + ':' + seconds, h.width / 2, h.height / 2);
  hc.font = '15px Nodo Sans';
  hc.fillText(hexStr, h.width / 2, h.height / 1.75);
  hc.fill();


  /*hexStr = '#' + hours + minutes + seconds;
  clock.textContent = hours + ':' + minutes + ':' + seconds;
  hexColour.textContent = hexStr;
  clockFrame.backgroundColor = hexStr;*/
}
