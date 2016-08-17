function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  drawRandomEllipse(200, 200);
  drawRandomEllipse(200, 400);
}

function drawRandomEllipse(inputx, inputy) {
  var x = inputx
  var y = inputy;
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var a = random(255);
  var s = random(10, 300);
  
  fill(r, g, b, a);
  ellipse(x, y, s, s);
}