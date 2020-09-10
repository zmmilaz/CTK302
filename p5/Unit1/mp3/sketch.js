var song1 ;

function preload() {
  song1=loadSound("assets/Langley.mp3") ;
}

function setup() {
  createCanvas(400, 400);
  song1.loop();

}

function draw() {
  background(220);
}

function mouseReleased() {
  if (song1.isPlaying()){
    song1.pause();
  } else {
    song1.loop();
  }
}
