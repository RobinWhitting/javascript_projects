/* FUNCTIONS */

const pixels = {
  cache: {
    image:new Image(),
    imageDest: null,
    imageOrig: null,
    imageData: null,
    dataLen: null,
    pixelLen: null,
    c: document.getElementById('pixelArena'),
    cx: null
  },

  blue() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = 0;
      pixels.cache.imageDest.data[i + 1] = 0;
      pixels.cache.imageDest.data[i + 2] = pixels.cache.imageData.data[i + 2];
    }
  },

  bwSimple() {
    let bw;
    for (let i = 0; i < pixels.cache.dataLen; i += 4) {
      bw = (pixels.cache.imageData.data[i] + pixels.cache.imageData.data[i + 1] + pixels.cache.imageData.data[i + 2]) / 3;
      pixels.cache.imageDest.data[i] = bw;
      pixels.cache.imageDest.data[i + 1] = bw;
      pixels.cache.imageDest.data[i + 2] = bw;
    }
  },

  bwVivid() {
    let bw;
    for (let i = 0; i < pixels.cache.dataLen; i += 4) {
      bw = (0.2 * pixels.cache.imageData.data[i]) + (0.72 * pixels.cache.imageData.data[i + 1]) + (0.07 * pixels.cache.imageData.data[i + 2]);
      pixels.cache.imageDest.data[i] = bw;
      pixels.cache.imageDest.data[i + 1] = bw;
      pixels.cache.imageDest.data[i + 2] = bw;
    }
  },

  calcData() {
    for (var i = 0; i < pixels.cache.dataLen; i++) {
      if (pixels.cache.imageOrig.data[i] !== pixels.cache.imageDest.data[i]) {
        if (pixels.cache.imageOrig.data[i] < pixels.cache.imageDest.data[i]) {
          pixels.cache.imageOrig.data[i]++;
        }
        else{
          pixels.cache.imageOrig.data[i]--;
        }
      }
    }
  },

  drawFirst() { //runs once at the beginning
    pixels.cache.cx.drawImage(pixels.cache.image, 0, 0, pixels.cache.c.width, pixels.cache.c.height);
    pixels.cache.imageData = pixels.cache.cx.getImageData(0, 0, pixels.cache.c.width, pixels.cache.c.height);
    pixels.cache.imageOrig = pixels.cache.cx.getImageData(0, 0, pixels.cache.c.width, pixels.cache.c.height);
    pixels.cache.imageDest = pixels.cache.cx.getImageData(0, 0, pixels.cache.c.width, pixels.cache.c.height);
    pixels.cache.dataLen = pixels.cache.imageData.data.length;
  },

  drawLoop() { //Main Animation Loop


    pixels.drawToCanvas();
    requestAnimationFrame(pixels.drawLoop);
  },

  drawToCanvas() {
    pixels.calcData();
    pixels.cache.cx.putImageData(pixels.cache.imageOrig, 0, 0);
  },

  green() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = 0;
      pixels.cache.imageDest.data[i + 1] = pixels.cache.imageData.data[i + 1];
      pixels.cache.imageDest.data[i + 2] = 0;
    }
  },

  greenBlue() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = 0;
      pixels.cache.imageDest.data[i + 1] = pixels.cache.imageData.data[i + 1];
      pixels.cache.imageDest.data[i + 2] = pixels.cache.imageData.data[i + 2];
    }
  },

  init() {
    window.addEventListener('click', (e) => {
      pixels.testClick(e);
    });
    pixels.setupCache();
    pixels.drawFirst();
    pixels.drawLoop();
  },

  setupCache() {
    pixels.cache.c.width = pixels.cache.image.naturalWidth;
    pixels.cache.c.height = pixels.cache.image.naturalHeight;
    pixels.cache.cx = pixels.cache.c.getContext('2d');
    pixels.cache.imageLen = pixels.cache.imageData;
  },

  red() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = pixels.cache.imageData.data[i];
      pixels.cache.imageDest.data[i + 1] = 0;
      pixels.cache.imageDest.data[i + 2] = 0;
    }
  },

  redGreen() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = pixels.cache.imageData.data[i];
      pixels.cache.imageDest.data[i + 1] = pixels.cache.imageData.data[i + 1];
      pixels.cache.imageDest.data[i + 2] = 0;
    }
  },

  redBlue() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = pixels.cache.imageData.data[i];
      pixels.cache.imageDest.data[i + 1] = 0;
      pixels.cache.imageDest.data[i + 2] = pixels.cache.imageData.data[i + 2];
    }
  },

  reset() {
    for (var i = 0; i < pixels.cache.dataLen; i+=4) {
      pixels.cache.imageDest.data[i] = pixels.cache.imageData.data[i];
      pixels.cache.imageDest.data[i + 1] = pixels.cache.imageData.data[i + 1];
      pixels.cache.imageDest.data[i + 2] = pixels.cache.imageData.data[i + 2];
    }
  },


  testClick(e) {
    switch (e.target.id) {
      case 'btnBWV':
        pixels.bwVivid();
        break;
      case 'btnBWS':
        pixels.bwSimple();
        break;
      case 'btnRed':
        pixels.red();
        break;
      case 'btnGreen':
        pixels.green();
        break;
      case 'btnBlue':
        pixels.blue();
        break;
      case 'btnRG':
        pixels.redGreen();
        break;
      case 'btnRB':
        pixels.redBlue();
        break;
      case 'btnGB':
        pixels.greenBlue();
        break;
      case 'btnReset':
        pixels.reset();
        break;
    }
  },
}



pixels.cache.image.src = 'images/village.jpg';


pixels.cache.image.onload = () => {
  pixels.init();


};
