var sound;

function preload() {
  sound = loadSound("beat.mp3");  
}

function setup() {
  createCanvas(600, 600);
  sound.loop();
}

function draw() {
  background(255);
  sound.setVolume(mouseX/width);
}
