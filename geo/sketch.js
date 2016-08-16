var area1;
var lat = '',
  lon = '';

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    intervalCurrentPosition(positionUpdated, 1000)
  }
  textAlign(CENTER);
  fill(255);
}

function draw() {
  if (area1) {
    background(0, 255, 0);
    textSize(windowWidth * 0.1);
    if (area1.insideFence) {
      text("IN", width / 2, height / 2);
    } else {
      text("OUT", width / 2, height / 2);
    }
  } else {
    background(255, 0, 0);
  }
  textSize(windowWidth*0.05);
  text("lat: " + lat + "     lon: " + lon, width / 2, height * 0.2);
}

function positionUpdated(position) {
  lat = nfc(position.latitude, 3);
  lon = nfc(position.longitude, 3);
  print("lat: " + lat + " lon: " + lon);
}

function touchStarted() {
  if (!area1) {
    console.log('hi')
    area1 = new geoFenceCircle(39.214, -106.937, 0.1);
  } else {
    area1.clear();
    area1 = null;
  }
}