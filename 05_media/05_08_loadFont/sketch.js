var font;

function preload() {
  font = loadFont("Stellar-Bold.otf");  
}

function setup() {
  createCanvas(600, 600);
  textSize(40);
  textFont(font);
}

function draw() {
  background(255);
  text("HELLO WORLD", 100, 100);
}