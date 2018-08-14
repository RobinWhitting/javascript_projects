const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');



let rect1 = {
  x1:300, y1: 200,
  x2:176, y2:100,
  x3:0, y3: 200,
  x4: -176, y4: -100
};

let rect2 = {
  x1:rect1.x1 + 5, y1: rect1.y1 - 10,
  x2:176, y2:100,
  x3:176, y3: -100,
  x4: -176, y4: -100
}

let rect3 = {
  x1:rect1.x1 + rect1.x2 + 10, y1: rect1.y1 + rect1.y2,
  x2:176, y2: -100,
  x3:0, y3: 200,
  x4: -176, y4: 100
}


const animate = () => {
  update();
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.moveTo(rect1.x1, rect1.y1);
  ctx.lineTo(rect1.x1 + rect1.x2, rect1.y1 + rect1.y2);
  ctx.lineTo(rect1.x1+ rect1.x2 + rect1.x3, rect1.y1 + rect1.y2 + rect1.y3);
  ctx.lineTo(rect1.x1+ rect1.x2 + rect1.x3 + rect1.x4, rect1.y1 + rect1.y2 + rect1.y3 + rect1.y4);
  ctx.lineTo(rect1.x1, rect1.y1);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.moveTo(rect2.x1, rect2.y1);
  ctx.lineTo(rect2.x1 + rect2.x2, rect2.y1 + rect2.y2);
  ctx.lineTo(rect2.x1+ rect2.x2 + rect2.x3, rect2.y1 + rect2.y2 + rect2.y3);
  ctx.lineTo(rect2.x1+ rect2.x2 + rect2.x3 + rect2.x4, rect2.y1 + rect2.y2 + rect2.y3 + rect2.y4);
  ctx.lineTo(rect2.x1, rect2.y1);
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.moveTo(rect3.x1, rect3.y1);
  ctx.lineTo(rect3.x1 + rect3.x2, rect3.y1 + rect3.y2);
  ctx.lineTo(rect3.x1+ rect3.x2 + rect3.x3, rect3.y1 + rect3.y2 + rect3.y3);
  ctx.lineTo(rect3.x1+ rect3.x2 + rect3.x3 + rect3.x4, rect3.y1 + rect3.y2 + rect3.y3 + rect3.y4);
  // ctx.lineTo(rect2.x1, rect2.y1);
  ctx.fill();
  ctx.stroke();




  ctx.closePath();


  requestAnimationFrame(animate);
}


const update = () => {
  rect1.x += 1;
  rect1.y += 1;
}

animate();
