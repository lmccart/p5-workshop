function drawButtons() {
  for (var i = 0; i < numLocations; i++) {
    push();
    fill(0);
    rect(10 + 35 * i, height - 40, 30, 30);
    fill(255);
    text(i + 1, 22 + 35 * i, height - 20);
    pop();
  }
}

function detectButtonPress() {
  for (var i = 0; i < numLocations; i++) {
    if (mouseX > 10 + 35 * i && mouseX < 40 + 35 * i && mouseY > height - 40 && mouseY < height - 10) {
      curLocation = i + 1;
      print("curLocation = "+curLocation);
    }
  }
}