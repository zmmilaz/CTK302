let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
    background('purple');
    text('how many college\n roomates does it\n take to fix a lightbulb?', 250, 250);
    break;


    case 1:
    background('orange');
    text('unscrew one a little \nand then sit back and find out', 250, 250);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
