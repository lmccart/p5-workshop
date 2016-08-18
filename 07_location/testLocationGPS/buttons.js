var fences = [];
var newLocation = -1;
var _s;
var _g;
var _lat, _lon;

function drawButtons() {

  _s = width / 10;
  _g = _s / 4;

  for (var i = 0; i < numLocations; i++) {
    push();
    fill(0);
    rect(_g + (_s + _g) * i, height - _s - _g, _s, _s);
    fill(255);
    textSize(_s / 2);
    textFont('Arial');
    text(i + 1, 2 * _g + (_s + _g) * i, height - _s / 3 - _g);
    pop();
  }
}

function detectButtonPress() {
  for (var i = 0; i < numLocations; i++) {
    if (mouseX > _g + (_s + _g) * i && mouseX < _g + (_s + _g) * i + _s && mouseY > height - _s - _g && mouseY < height - _g) {
      curLocation = i + 1;
      print("curLocation = " + curLocation);
    }
  }
}

function addFence(lat, lon) {
  fences.push(new geoFenceCircle(lat, lon, 0.01)); // printmaking
}

function checkLocations() {
  var _minD = 100000;
  var _closestL = 0;
  for (var i = 0; i < fences.length; i++) {
    if (fences[i].insideFence && fences[i].distance < _minD) {
      _minD = fences[i].distance;
      _closestL = i + 1;
    }
  }
  if (!_closestL) {
    _closestL = 1;
  }

  if (_closestL && _closestL != curLocation) {
    curLocation = _closestL;
    changeLocation();
  }
}



function positionUpdated(position) {
  _lat = nfc(position.latitude, 8);
  _lon = nfc(position.longitude, 8);
  print("lat: " + _lat + " lon: " + _lon);
}