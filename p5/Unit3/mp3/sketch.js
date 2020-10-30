var cars = [];
var frogPos;
var myState = -1;
var maxCars = 20;
var maxTimer = 20*60;
var timer = maxTimer;
var boot;
var gremlin;
var sneaky;
let bg;

function setup() {
  createCanvas(800, 650);



  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
  imageMode(CENTER);
  boot = loadImage('assets/boot.png');
  gremlin = loadImage('assets/gremlins.png');
  sneaky = loadSound('assets/sneaky.mp3') ;
  bg = loadImage('assets/mat.jpg');

}






function draw() {

  switch (myState) {
    case -1:
    //sneaky.loop();
    myState=0;
    break;

    case 0:
      background('red');
      fill('white');
      textSize(24);
      text("Gremlins are all over your front porch! \n Stomp on em! \n Move with Arrow keys", 250, height / 2);


      break;

    case 1: //game state
      game();


      timer = timer -1;
      if (timer <= 0) {
        timer = maxTimer ;
        myState = 3;
      }
      break;

    case 2: //win state
      background('green');
      text("Winner", 250, height / 2);
      break;

    case 3: //lose state
      background('green');
      fill('white');
      text("If you got all the gremlins, congrats! You've won! \n If you missed some of them, don't \n worry, there's always next Halloween! \n \n Click to Restart ", 300, height / 2);
      break;



  }

}




function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //they won!
    //reset timer!
    timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0
      break;

    case 3: //they last!
    //reset timer!
    timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0
      break;


  }



}




function game() {


  background(100);
  image(bg, 400, 350, width, height);


  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 40) {
      cars.splice(i, 1);

    }

  }



  if (cars.length == 0) {
    myState == 2;
  }




  //frog class
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(boot, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}



//class
function Car() {

  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  //methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30, 30);
    image(gremlin, this.pos.x, this.pos.y, 50, 50);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
