const checkCookie = () => {
  let wX = readCookie('weightX');
  let wY = readCookie('weightY');

  if (wX === null) {
    wX = singleRND(-1, 1);
  }
  if (wY === null) {
    wY = singleRND(-1, 1);
  }
  return {x: wX, y: wY};
}


const defineTeam = (data) => {
  let team = [];
  for (let i = 0; i < data.length; i++) {
    data[i].x >= data[i].y ? team[i] = 1 : team[i] = -1;
  }
  return team;
}


const deleteCookies = () => {
  setCookie({x:null, y:null}, -1);
}


const fillSvg = (data) => {
  let temp = '';
  let guessTeam = [];
  for (let i = 0; i < data.length; i++) {
    guessTeam[i] = guess(currentWeight, {x: data[i].x, y: data[i].y});
    temp += `<circle
    cx="${data[i].x}"
    cy="${data[i].y}"
    r="3"
    fill="${guessTeam[i] === -1 ? 'blue' : 'red'}"/>\n`;
  }

  temp += `<line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />`;
  return {temp, guessTeam};
}


const genRndArray = (max) => {
  let arr1 = [];
  for (let i = 0; i < max; i++) {
    arr1.push({x:Math.random() * X_MAX, y:Math.random() * Y_MAX});
  }
  return arr1;
}


const guess = (weights, point) => {
  const sum = (point.x * weights.x) + (point.y * weights.y);
  const team = sum >= 1 ? 1 : -1;
  return team;
}


const randomWeights = () => {
  return {x: singleRND(-1, 1), y: singleRND(-1, 1)}
}


const readCookie = (name) => {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


const setCookie = (info, days) => {
  let d = new Date();
  if (days === -1) {
    d.setTime(d.getTime() - (60*1000));
  }
  else {
    d.setTime(d.getTime() + (days*24*60*60*1000));
  }

   let expires = "expires="+ d.toUTCString();
  document.cookie = "weightX=" + info.x + ";" + expires + ";path=/";
  document.cookie = "weightY=" + info.y + ";" + expires + ";path=/";
}


const singleRND = (min, max) => {
  return Math.random() * (max - min) + min;
}


const train = (weights, points, actualTeam) => {
  for (let i = 0; i < points.length; i++) {
    let thisGuess = guess(weights, points[i]);
    // console.log(thisGuess, actualTeam[i]);
    if (thisGuess !== actualTeam[i]) {
      // console.log(((actualTeam[i] - thisGuess) * points[i].x) + parseInt(weights.x));
      weights.x = parseInt(weights.x) + ((actualTeam[i] - thisGuess) * points[i].x);
      weights.y = parseInt(weights.y) + ((actualTeam[i] - thisGuess) * points[i].y);
      // console.log(weights.y);
    }
  }
  return weights;
}


const updateCookie = (info, days) => {
  deleteCookies({x:"", y:""}, -1);
  setCookie(info, days)
}


const dc = document.getElementById('deleteCookies');

dc.addEventListener('click', () => {
  deleteCookies();
});



const X_MAX = 400;
const Y_MAX = 400;
const svgSpace = document.getElementById('svgSpace');

const rndData = genRndArray(300);

let currentWeight = checkCookie();
console.log(currentWeight);
// let testGuess = guess(currentWeight, {x: 300, y:400});
updateCookie(train(currentWeight, rndData, defineTeam(rndData)), (10*365));
const dataSet = fillSvg(rndData);
svgSpace.innerHTML = dataSet.temp;
