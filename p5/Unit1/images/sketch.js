var img1, img2, img3;


function setup() {
  createCanvas(800, 800);

  img1 = loadImage("assets/cat.jpg");
  img2 = loadImage("assets/seal.jpg");
  img3 = loadImage("assets/subway.jpg");

}

function draw() {

  //image(img1, img2, img3)
  image(img1, width / 2, height / 2, 200, 200);
  image(img2, width / 2, height / 2 - 210, 200, 200);
  image(img3, width / 2, height / 2 + 210, 200, 200);
}
