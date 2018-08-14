function clockLoop(){
  displayLines();
  getTime();
  drawClock();
  circleClock();
  displayBinary();
  wedgeClock();
}

clockLoop();
setInterval(clockLoop, 50);
