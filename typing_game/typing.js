var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext('2d');
c.style.backgroundColor = 'skyblue';
c.style.display = 'block';

var keyList = [];
var letterX;
var letterY;

window.addEventListener('keydown', function(e){
  if (e.which === 27) {
    ctx.clearRect(0, 0, c.width, c.height);
    keyList.length = 0;
  }
  else {
    letterX = Math.floor(Math.random() * c.width);
    letterY = Math.floor(Math.random() * c.height);
    ctx.fillText(e.key, letterX, letterY);
    keyList.push([e.key, letterX, letterY]);
  }
});

gameLoop();


function gameLoop(){
  updateGame();
  requestAnimationFrame(gameLoop);
}

function updateGame(){
  ctx.clearRect(0, 0, c.width, c.height);
  for (var i = 0; i < keyList.length; i++) {
    keyList[i][2] += 1;
    ctx.fillText(keyList[i][0], keyList[i][1], keyList[i][2]);
    if (keyList[i][2] > (c.height + 50)) {
      keyList.splice(i, 1);
    }
  }
}
