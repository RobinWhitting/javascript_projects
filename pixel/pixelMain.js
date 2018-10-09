/* FUNCTIONS */

const drawToCanvas = (cx, image2) => {
  cx.drawImage(image2, 0, 0, image2.width, image2.height);
}

const onlyRed = (cx, tempImg) => {
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i + 1] = 0;
    pixelData.data[i + 2] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}

const onlyGreen = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i] = 0;
    pixelData.data[i + 2] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}


const onlyBlue = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i] = 0;
    pixelData.data[i + 1] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}


const bothRG = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i + 2] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}


const bothRB = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i + 1] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}


const bothGB = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    pixelData.data[i] = 0;
  }
  cx.putImageData(pixelData, 0, 0);
}


const bwSimple = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    let avg = (pixelData.data[i] + pixelData.data[i + 1] + pixelData.data[i + 2]) / 3;
    pixelData.data[i] = avg;
    pixelData.data[i + 1] = avg;
    pixelData.data[i + 2] = avg;
  }
  cx.putImageData(pixelData, 0, 0);
}


const bwVivid = (cx, tempImg) => {
  drawToCanvas(cx, image);
  let pixelData = cx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    let bw = (0.2 * pixelData.data[i]) + (0.72 * pixelData.data[i + 1]) + (0.07 * pixelData.data[i + 2]);
    pixelData.data[i] = bw;
    pixelData.data[i + 1] = bw;
    pixelData.data[i + 2] = bw;
  }
  cx.putImageData(pixelData, 0, 0);
}


const c = document.getElementById('pixelArena');

let cx = c.getContext('2d');

let image = new Image();
//image.src= 'images/mario.png';
image.src = 'images/village.jpg';
//image.src= 'images/city.png';
c.width = image.width;
c.height = image.height;
console.log(image);

image.onload = () => {
  drawToCanvas(cx, image);
  document.getElementById('btnRed').addEventListener('click', () => {
    onlyRed(cx, image);
  });

  document.getElementById('btnGreen').addEventListener('click', () => {
    onlyGreen(cx, image);
  });

  document.getElementById('btnBlue').addEventListener('click', () => {
    onlyBlue(cx, image);
  });

  document.getElementById('btnRG').addEventListener('click', () => {
    bothRG(cx, image);
  });

  document.getElementById('btnRB').addEventListener('click', () => {
    bothRB(cx, image);
  });

  document.getElementById('btnGB').addEventListener('click', () => {
    bothGB(cx, image);
  });

  document.getElementById('btnGB').addEventListener('click', () => {
    bothGB(cx, image);
  });

  document.getElementById('btnBWS').addEventListener('click', () => {
    bwSimple(cx, image);
  });

  document.getElementById('btnBWV').addEventListener('click', () => {
    bwVivid(cx, image);
  });

  document.getElementById('btnReset').addEventListener('click', () => {
    drawToCanvas(cx, image);
  });
};
