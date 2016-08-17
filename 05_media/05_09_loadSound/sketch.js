var sound;

function preload() {
  sound = loadSound("beat.mp3");  
}

function setup() {
  createCanvas(600, 600);
  sound.play();
}

function draw() {
  background(255);
}