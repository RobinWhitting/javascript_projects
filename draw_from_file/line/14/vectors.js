function vecToCoord(m, a) {
  var coord = [];
  coord.push(m * Math.cos(a));
  coord.push(m * Math.sin(a));
  return coord;
}
