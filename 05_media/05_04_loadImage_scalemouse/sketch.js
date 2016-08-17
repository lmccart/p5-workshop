var img;

function preload() {
  img = loadImage("cat.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(img, 0, 0, mouseX * 2, mouseY * 2)

}