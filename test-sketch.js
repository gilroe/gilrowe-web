function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  textSize(20);
  noLoop();
}
x = 25;
function draw() {
  background(0); // clear background
  fill(x/3,90,90)
  rect (x, 50, 100, 100); //shape to be set in motion

  x+= 5; // increasing variable by 5 (creates motion)

// resets shapes position once off right side of the screen
  if (x > width + 25) {
    x =-25;
  }

  }

function mousePressed() {
  // start/stop animation
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}
