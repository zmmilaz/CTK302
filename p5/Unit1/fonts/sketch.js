var f;
var f1;

function setup()
{
  createCanvas(800, 800);

  f = loadFont("assets/bittype.ttf");
  f = loadFont("assets/viking.TTF");

  textAlign(CENTER);
}

function draw()
{
  background(100);

  textFont(f);
  textSize(60);
  text("Hello", width / 2, height / 2);
}
