let timer = 0;
let state = 0;
var mic;
var vol;

function setup() {
  createCanvas(500, 500);
  textSize(24);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1


    switch (state) {
      case 0:
        background('red');
        text('SHHHH', 250, 250);
          if (vol > .1) {
            state = 1;
          }
        break;

      case 1:
        background('green');
        text('Quiet down', 250, 250);
        timer = timer + 1;
        if (timer > 5 * 60) {
          state = 0;
          timer = 0;
        }
        break;


  }
}

function touchStarted() {
  getAudioContext().resume();
}
