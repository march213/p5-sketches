function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameCount(30);

  // Put setup code here
}

const foo = 'foo';

function draw() {
  // Put drawings here
  ellipse(mouseX, mouseY, 40, 40);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
