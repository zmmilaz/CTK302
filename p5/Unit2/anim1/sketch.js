var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(x, 250, 50, 50);
  textSize(60);
  text("Hello",  x,  x);

  x = x + 1;

  if(x > width) {
    x = 0;
  }
}
