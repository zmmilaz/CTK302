let timer = 0;
let state = 0;
var img1, img2, img3;

function setup() {
  createCanvas(1500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
  img1 = loadImage("assets/wait.jpeg");
  img2 = loadImage("assets/patient.jpeg");
  img3 = loadImage("assets/impatient.jpeg");
}

function draw() {

  switch (state) {

    case 0:
      background('tan');
  image(img1, width / 2, 100, 200, 300);
      text("Hey pal, want a cookie? \n Alright gimme a second, \n I know I got it in \n here somewhere..", 250, 250);
      timer = timer + 1;
      if (timer > 10 * 60) {
        state = 1;
        timer = 0;
      }


      break;

    case 1:
      background('tan');
  image(img2, width / 2, 100, 200, 300);
      text("Ah, here it is. Thanks for waiting,\n I know it took me a second to find it!\n Here, you've earned it.", 250, 250, 350, 200);
      break;

    case 2:
      background('tan');
  image(img3, width / 2, 100, 200, 300);
      text("Alright alright, geez! \n I've got it right here, settle down. \n Here's your cookie, Mr Patience.", 250, 250);
      break;

  }
}

function mouseReleased() {
  state = 2;
  //  if (state > 1) {
  //  state = 0;
  //  }
}
