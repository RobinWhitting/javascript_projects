class Ball{
  constructor(x, y, r, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
  }

  update(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x - this.r <= 0 || this.x + this.r >= canvas.width) {
      this.vx = -(this.vx * friction);
      this.x = this.x + this.vx;
    }
    if (this.y - this.r <= 0 || this.y + this.r >= canvas.height) {
      this.vy = -(this.vy * friction);
      this.y = this.y + this.vy;
    }
    else{
      this.vy = this.vy + gravity;
    }

    for (var i = 0; i < ballArray.length; i++) {
      for (var j = 0; j < barArray.length; j++) {

        // check if ball bar X withing 2 * ball radius of each other
        if (ballArray[i].x - barArray[j].x <= ballArray[i].r * 2 && canvas.height + barArray[j].height - ballArray[i].y <= ballArray[i].r * 2) {
          if (distance(ballArray[i].x, barArray[j].x, ballArray[i].y, canvas.height + barArray[j].height) <= ballArray[i].r){
            ballArray[i].vy = barArray[j].height / 30;
            ballArray[i].y = (canvas.height + barArray[j].height) - ballArray[i].r;
            if (ballArray[i].x > barArray[j].x + (barArray[j].width / 2)) {
              ballArray[i].vx = ballArray[i].vx + 1;
            }
            else if (ballArray[i].x < barArray[j].x + (barArray[j].width / 2)) {
              ballArray[i].vx = ballArray[i].vx - 1;
            }
          }
        }
      }
    }
    this.draw();
  }

  draw(){
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.stroke();
  }
}

class Bar{
  constructor(x) {
    this.x = x * (canvas.width / bars);
    this.width = (canvas.width / bars) - 1;
    this.height = 0;
    this.color = colorArray[getRandomInt(0, 4)]
  }
}

// All that is needed to create a new audio object and play on page
var audio = new Audio() || new webkitAudio();
//audio.src = 'Disturbed  - The Sound Of Silence.mp3';
audio.controls = true;
audio.loop = true;
audio.autoplay = true;

// Create variables for the Analyser
var canvas, ctx, source, context, analyser, fbcArray, bars, barX, barWidth, barHeight, playerHeight = 60, playerWidth = window.innerWidth;
var audioOffset = 20, playing = false, numBalls = 20, friction = 0.9, gravity = 0.1;
var ballArray = [], barArray = [];
var player = document.getElementById('mp3Player');
player.width = playerWidth + 'px';
player.style.height = playerHeight + 'px'

var colorArray = [
  '#324D5C',
  '#46B29D',
  '#F0CA4D',
  '#E37B40',
  '#F03753'
];

var audioBox = document.getElementById('audioBox');
audio.style.height = (playerHeight - audioOffset) + 'px';
audio.style.width = (playerWidth - audioOffset - 100) + 'px';
audio.style.position = 'relative';
audio.style.left = 100 + audioOffset/2 + 'px';
audio.style.top = audioOffset / 2 + 'px';

// Initialise mp3 player after eveything has loaded
window.addEventListener('load', initMp3Player, false);
var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2')
song1.addEventListener('click', function() {
  audio.src = 'Shinedown - I\'ll Follow You.mp3';
});
song2.addEventListener('click', function() {
  audio.src = 'Disturbed  - The Sound Of Silence.mp3';
});

function initMp3Player() {
  document.getElementById('audioBox').appendChild(audio);
  context = new AudioContext() || new webkitAudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('canvas');
  canvas.height = window.innerHeight - playerHeight;
  canvas.width = window.innerWidth;
  ctx = canvas.getContext('2d');
  bars = canvas.width / 3;

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
      if (playing) {
        audio.pause();
        playing = false;
      }
      else{
        audio.play();
        playing = true;
      }
    }
  })

  // Route audio playback into the processing graph of the Audio Context
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);

  for (var i = 0; i < numBalls; i++) {
    var r = getRandomInt(10, 20);
    var x = getRandomInt(0 + r, canvas.width - r);
    var y = getRandomInt(0 + r, canvas.height / 2);
    var vx = 0;
    var vy = 0;
    while (vx == 0) {
      vx = getRandomInt(-1, 1);
    }
    while (vy == 0) {
      vy = getRandomInt(-1, 1);
    }
    ballArray.push(new Ball(x, y, r, vx, vy));
  }

  for (var i = 0; i < bars; i++) {
    barArray.push(new Bar(i));
  }
  console.log(barArray[3]);

  frameLooper();
}


// FrameLooper will animate any stlye of graphic to the audio frequency
function frameLooper() {
  requestAnimationFrame(frameLooper);
  fbcArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbcArray);
  ctx.fillStyle = 'rgba(135, 206, 250, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //ctx.fillStyle = '#fff';

  for (var i = 0; i < barArray.length; i++) {
    barArray[i].height = -(fbcArray[i]);
    ctx.beginPath()
    ctx.fillStyle = barArray[i].color;
    ctx.fillRect(barArray[i].x, canvas.height, barArray[i].width, barArray[i].height);

  }

  for (var i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function distance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
