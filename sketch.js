
var r = 0;
var g = 50;
var b =255;
var background = r,g,b
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

var mouse;


function setup(){

  createCanvas(1200,400);

  mouse = createSprite(600,400,10,10);
  mouse.shapeColor = "red";
}


function draw(){
    background(r,g,b);
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX, 0, 320,230,84 );
  g = map(mouseX, 0, 320,230,213);
  b = map(mouseX, 0, 320,23,90);
 

  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  fill("beige")
  ellipseMode(RADIUS)
  ellipse(mouseX,200,10,10);
  // Remember to fill the canvas with white paint before creating the ellipse.
}