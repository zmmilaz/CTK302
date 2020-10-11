let state = 0;

function setup() {
  createCanvas(800, 800);
  ellipseMose(CENTER);
  rectMode(CENTER);
}

function draw() {

  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 600);



  switch (state) {

    case 0: //red
      text("0", 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;

    case 1: //green
      text("1", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;

    case 2: //yellow
      text("2", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
