var fences = [];
var newLocation = -1;

function drawButtons() {
  for (var i = 0; i < numLocations; i++) {
    push();
    fill(0);
    rect(10 + 35 * i, height - 40, 30, 30);
    fill(255);
    textSize(12);
    textFont('Arial');
    text(i + 1, 22 + 35 * i, height - 20);
    pop();
  }
}

function detectButtonPress() {
  for (var i = 0; i < numLocations; i++) {
    if (mouseX > 10 + 35 * i && mouseX < 40 + 35 * i && mouseY > height - 40 && mouseY < height - 10) {
      curLocation = i + 1;
      print("curLocation = " + curLocation);
    }
  }
}

function addFence(lat, lon) {
  fences.push(new geoFenceCircle(39.2137056, -106.93653110, 0.01)); // printmaking
  fences.push(new geoFenceCircle(39.21391712, -106.93599236, 0.01)); // woodshop
  fences.push(new geoFenceCircle(39.21406986, -106.93579980, 0.01)); // ceramics
  fences.push(new geoFenceCircle(39.21427167, -106.93622730, 0.01)); // cafe
  fences.push(new geoFenceCircle(39.21434363, -106.93645512, 0.01)); // meeting hall
}

function checkLocations() {
  for (var i = 0; i < fences.length; i++) {
    if (fences[i].insideFence) {
      newLocation = i + 1;
      if (newLocation != curLocation) {
        curLocation = newLocation;
        resetLocation();
      }
    }
  }
}