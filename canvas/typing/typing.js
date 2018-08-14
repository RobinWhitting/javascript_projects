//Variables
var speedSpan =  document.getElementById('speedVal');
var scoreSpan =  document.getElementById('scoreVal');
var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
var lastTime = new Date().getTime();
var newTime;
var delay = 2000;
var l1Keys = ['f', 'j'];
const VEL = 2;
var keyArray = [];
var correctKey = false;
var speed = 2000 - delay;
var score = 0;

function Key(letter){
  this.x = randomX();
  this.y = randomY();
  this.letter = letter;
  this.v = VEL + Math.floor((Math.random() * 2) - 1);
  this.vis = true;
}

/* checkKey Logic is not correct yet */


//Event Listeners
window.addEventListener('keydown', function(e){
  checkKey(e);
});

//Functions
function gameLoop(){
  if (validTime() === true) {
    if (keyArray.length <= 50) {
      addCharacter(l1Keys);
    }
    //console.log(keyArray);
  };
  updatePosition();
  updateCanvas();
  requestAnimationFrame(gameLoop);
}


function checkKey(e){
  if (e.which === 116 || e.which === 123) {
  }
  else {
    e.preventDefault();
    //foundKey = false;
    for (var i = 0; i < keyArray.length; i++) {
      if (keyArray[i].letter === e.key.toString() && keyArray[i].vis === true) {
        keyArray[i].vis = false;
        correctKey = true;
        break;
      }
    }
    if (correctKey === true) {
      delay--;
      score++;
      correctKey = false;
    }
    else{
      delay++;
      score--;
    }
  }

}


function validTime(){
  newTime = new Date().getTime();
  if (newTime - delay > lastTime) {
    lastTime = newTime;
    return true;
  }
  else {
    return false;
  }
}

function updatePosition(){
  for (var i = 0; i < keyArray.length; i++) {
    keyArray[i].y += keyArray[i].v;
    if (keyArray[i].y >= c.height + 20) {
      keyArray[i].vis = false;
    }
  }
}

function updateCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.font = "20px Arial";
  for (var i = 0; i < keyArray.length; i++) {
    if (keyArray[i].vis === true) {
      ctx.beginPath();
      ctx.fillText(keyArray[i].letter, keyArray[i].x, keyArray[i].y);
      ctx.closePath();
    }
  }
  for (var j = keyArray.length - 1; j > 0 ; j--) {
    if (keyArray[j].vis === false) {
      keyArray.splice(j, 1);
    }
  }
  speed = 2000 - delay;
  speedSpan.innerHTML = speed;
  scoreSpan.innerHTML = score;
}


function randomX(){
  return Math.floor(Math.random() * (c.width - 100) + 50);
}

function randomY(){
  return Math.floor(Math.random() * (c.height - 100) + 50);
}

function addCharacter(keyList){
  keyArray.push(new Key(keyList[Math.floor(Math.random() * l1Keys.length)]));
}



//Procedural Code
gameLoop();
