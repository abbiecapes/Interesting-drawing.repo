function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(125);
  circle (250, 250, 300)
  fill("yellow")
  stroke("yellow");
  circle (200, 200, 50)
  fill("black")
  circle (300, 200, 50)
  arc(250, 300, 80, 80, 0, PI + QUARTER_PI, CHORD);
}
