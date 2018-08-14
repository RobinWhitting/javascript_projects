function Item(_x, _y, _w, _h){
  // used for image reset`
  this.startX = _x;
  this.startY = _y;

  this.children = [];


  this.x = _x;
  this.y = _y;
  this.width = _w;
  this.height = _h;
  this.midX = _x + (_w / 2);
  this.midY = _y + (_h / 2);


  //for dragging and psudo Zoom
  this.cX = _x;
  this.cY = _y;
  this.cW = _w;
  this.cH = _h;


  this.addChildren = function() {
    this.children.push(new Item(this.x - 50, this.y, this.width, this.height));
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
