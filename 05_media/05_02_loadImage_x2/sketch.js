var cat;
var dog;

function preload() {
  cat = loadImage("cat.jpg");
  dog = loadImage("dog.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  image(cat, 0, 0);
  image(dog, 100, 100);
}