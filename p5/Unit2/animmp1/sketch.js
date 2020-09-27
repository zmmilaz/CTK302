var x=0;


function setup() {
  createCanvas(500, 500);
}

function draw() {


  if (mouseIsPressed) { background('salmon');
  } else { background('lightblue');
  }
  //////////shapes///////////


  //body
  fill('brown')
  arc(x, 253, 50, 100, 0, 50, PI);

  //body
  fill('brown');
  circle(x, 270, 90);

  //body
  noStroke()
  fill('brown');
  circle(x, 230, 80);

   if (mouseIsPressed) {

     //right eye
  fill('black')
  circle(x, 220, 32);

  //right eye
  fill('red')
  circle(x, 220, 30);

  //left eye
   fill('black')
  circle(x, 220, 32);

  //left eye
  fill('red')
  circle(x, 220, 30);

  //left eye
  fill('black')
  circle(x, 220, 20);

  //right eye
  fill('black')
  circle(x, 220, 20);

     //left eyebrow
     rect(x-20, 200, 45, 15);

     //right eyebrow
     rect(x-20, 200, 45, 15);



   } else {
     //right eye
  fill('black')
  circle(x, 220, 32);

  //right eye
  fill('white')
  circle(x, 220, 30);

  //left eye
   fill('black')
  circle(x, 220, 32);

  //left eye
  fill('white')
  circle(x, 220, 30);

  //left eye
  fill('black')
  circle(x, 220, 20);

  //right eye
  fill('black')
  circle(x, 220, 20);


   }



  if (mouseIsPressed) {
    //frown
   arc(x, 262, 20, 60, PI, 0);



  } else {
    //smile
   arc(x, 235, 20, 40, 0, PI);
  }






  /////////////text/////////////////

  if (mouseIsPressed) {
  textSize(40);
 text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", -8, 160)
  } else {
   textSize(40);
     text("CLICK ON KALPO ", 90, 360)
  }

  textSize(14);
  fill('black') ;
    text("This is Kalpo, the angry bean. A particularly short tempered fellow, he prefers ", 10, 20);

  textSize(14);
  text("to stay unbothered, yet around people. When unsuspecting people poke him, ", 10, 40)

  textSize(14);
  text(" he screams ceaselessly with his tiny voice. Poke Kalpo because it's fun!", 10, 60)

  //fill('white') ;
    //text(mouseX + ', ' + mouseY,20, 20);

    x = x + 1;

    if(x > width) {
      x = 0;
    }

}
