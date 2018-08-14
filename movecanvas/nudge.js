window.onload = function() {

  var c = document.getElementById('canvas');
  var cx = c.getContext('2d');
  c.width =  window.innerWidth;
  c.height  = window.innerHeight;
  cx.translate(c.width / 2, c.height / 2);
  var nudgeX, nudgeY = 0;
  var centerX = c.width / 2;
  var centerY = c.height / 2;
  var mouseX = 0;
  var mouseY = 0;
  var slideX = 0;
  var slideY = 0;
  var items = [];
  var zoom = 0;
  var scale = 1;
  var startWidth = 32;
  var startHeight = 32;

  window.addEventListener('keydown', nudge);
  window.addEventListener('mousedown', mouseDown);
  window.addEventListener('mouseup', mouseUp);
  createItems(0 - startWidth / 2, 0 - startHeight / 2, startWidth);
  items[0].addChildren();
  console.log(items[0]);

  drawLoop();

  function nudge(e) {
      if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ||  e.keyCode == 96
        || e.keyCode == 107) {
        switch (e.keyCode) {
          case 37:
            nudgeX = -5;
            nudgeY = 0;
          break;

          case 39:
            nudgeX = 5;
            nudgeY = 0;
          break;

          case 38:
            nudgeY = -5;
            nudgeX = 0;
          break;

          case 40:
            nudgeY = 5;
            nudgeX = 0;
          break;

          case 96:
            resetLocation();
          break;

          case 107:
            zoomIn();
          break;

          default:
          nudgeX = nudgeY = 0;
        }

      for (var i = 0; i < items.length; i++) {
        items[i].cX += nudgeX;
        items[i].cY += nudgeY;
      }
      nudgeX, nudgeY = 0;
    }
  }

  function drawLoop() {
    requestAnimationFrame(drawLoop);
    cx.clearRect(-(c.width / 2),-(c.height / 2), c.width, c.height);
    for (var i = 0; i < items.length; i++) {
      items[i].draw();
    }
  }


  function mouseDown(e) {
    window.addEventListener('mousemove', mouseMove);
    mouseX = e.x;
    mouseY = e.y;
  }


  function mouseMove(e) {
    slideX = mouseX - e.x;
    slideY = mouseY - e.y;
  }


  function mouseUp(e) {
    window.removeEventListener('mousemove', mouseMove);
    for (var i = 0; i < items.length; i++) {
      items[i].newLoc();
    }
    slideX = 0;
    slideY = 0;
    mouseX = mouseY = null;
  }


  function createItems(x, y, w, h){
    for (var i = 0; i < 1; i++) {
      items.push(new Item(x, y, w, h));
    }
  }


  function zoomIn(){
    if (zoom == 0) {
      scale = 2;
      zoom = 1;
    }
    else if (zoom == 1) {
      scale = 2;
      zoom = 2;
    }
    else{
      scale = 0.25;
      zoom = 0;
    }
    console.log('Zoom:' + zoom);
    for (var i = 0; i < items.length; i++) {
      if (zoom == 0) {
        items[i].basicZoom();
      }
      else {
        items[i].scale();
      }
    }
  }


  function resetLocation(){
    for (var i = 0; i < items.length; i++) {
      items[i].resetLoc();
      items[i].basicZoom();
    }
  }


  function Item(_x, _y, _w){
    // used for image reset`
    this.startX = _x;
    this.startY = _y;
    this.gap = _w / 4;

    this.children = [];


    this.x = _x;
    this.y = _y;
    this.width = _w;
    this.height = _w;
    this.midX = _x + (_w / 2);
    this.midY = _y + (_w / 2);


    //for dragging and psudo Zoom
    this.cX = _x;
    this.cY = _y;
    this.cW = _w;
    this.cH = _w;


    this.addChildren = function(numChildren = null) {
      if (numChildren != null) {
        this.children.push(new Item(this.x - this.gap - this.width, this.y - this.gap - this.height, this.width));

      }
    }


    this.newLoc = function() {
      this.cX += (-slideX);
      this.cY += (-slideY);
      this.x += (-slideX);
      this.y += (-slideY);
      if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].newLoc();
        }
      }
    }


    this.resetLoc = function() {
      console.log('X: ' + this.x + ' | StartX: ' + this.startX);
      this.x = this.startX;
      this.y = this.startY;
      if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].resetLoc();
        }
      }
    }


    this.basicZoom = function() {
      this.cX = this.x;
      this.cY = this.y;
      this.cW = this.width;
      this.cH = this.height;
      if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].basicZoom();
        }
      }
    }


    this.scale = function() {
      if (this.midX < 0) {
        this.cW *= scale;
        this.cX -= this.cW;
      }
      else {
        this.cX += this.cW;
        this.cW *= scale;
      }

      if (this.midY < 0) {
        this.cH *= scale;
        this.cY -= this.cH;
      }
      else {
        this.cY += this.cH;
        this.cH *= scale;
      }
      if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].scale();
        }
      }
    }


    this.draw = function() {
      cx.beginPath();
      cx.strokeStyle = '#000';
      cx.rect(this.cX - slideX, this.cY - slideY, this.cW, this.cH);
      cx.stroke();
      cx.closePath();
      if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].draw();
        }
      }
    }
  }

}
