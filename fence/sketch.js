var area1;
var lat = '';
var lon = '';
var font;

function preload() {
  font = loadFont('Stellar-Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    intervalCurrentPosition(positionUpdated, 1000)
  }
  textAlign(CENTER);
  fill(255);
  textFont(font);
}

function draw() {
  if (area1) {
    background(255, 0, 50);
    textSize(windowWidth * 0.4);
    fill(0);
    if (area1.insideFence) {
      text("IN", width / 2, height / 2);
    } else {
      text("OUT", width / 2, height / 2);
    }
  } else {
    background(255, 100, 0);
  }

  fill(255);
  textSize(windowWidth*0.15);
  text("LAT", width / 2, height * 0.32);
  text(lat, width / 2, height * 0.42);
  text("LON", width / 2, height * 0.57);
  text(lon, width / 2, height * 0.67);
}

function positionUpdated(position) {
  lat = nfc(position.latitude, 8);
  lon = nfc(position.longitude, 8);
  print("lat: " + lat + " lon: " + lon);
}

function touchStarted() {
  if (!area1) {
    area1 = new geoFenceCircle(39.2135331, -106.9365780, 0.01);
  } else {
    area1.clear();
    area1 = null;
  }
}