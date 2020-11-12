var bubbles = [];
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = loadImage("assets/circle.jpg");

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '132LvN45P-MMvEeqY8mpiXBSYJ_e6ojMvc7aOIxL8EzQ'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Yours, data[i].Theirs, data[i].Versus)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  //background('blue');
  background(100);
  image(bg, 0, 0, width, height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myYours, myTheirs, myVersus) {
    this.yours = myYours;
    this.theirs = myTheirs;
    this.versus = myVersus;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }


  display() {
    //  if (this.shape == "Square") {
    //    rect(this.pos.x, this.pos.y, 50, 50);
    //  } else {
    //    ellipse(this.pos.x, this.pos.y, 50, 50);
    //  }

    //  text(this.name, this.pos.x, this.pos.y);

    ellipse(this.pos.x, this.pos.y, 80, 80);
    stroke(this.r, this.g, this.b);
    text(this.yours, this.pos.x, this.pos.y - 20);
    text(this.theirs, this.pos.x, this.pos.y);
    text(this.versus, this.pos.x, this.pos.y + 20);
  }
  drive() {
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x >width) this.pos.x=0;

  }

}
