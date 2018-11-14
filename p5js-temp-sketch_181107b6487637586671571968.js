var cigarette;
var candy;
var gum;
var bottle;
var straw;
var original;

function setup() {
  createCanvas(600,600);
  cigarette=loadImage("cigarette.png");
  candy=loadImage("candy.png");
  gum=loadImage("gum.png");
  bottle=loadImage("bottle.png");
  straw=loadImage("straw.png");
  original=loadImage("original.png");
}

function draw() {
   if(mouseX>0 && mouseX<300 && mouseY>0 && mouseY<200) {
     image(cigarette,0,0);
   }
   if(mouseX>300 && mouseX<600 && mouseY>0 && mouseY<200) {
     image(candy,0,0);
   }
   if(mouseX>0 && mouseX<300 && mouseY>200 && mouseY<400) {
     image(gum,0,0);
   }
   if(mouseX>300 && mouseX<600 && mouseY>200 && mouseY<400) {
     image(bottle,0,0);
   }
   if(mouseX>0 && mouseX<300 && mouseY>400 && mouseY<600) {
     image(straw,0,0);
   }
   if(mouseX>300 && mouseX<600 && mouseY>400 && mouseY<600) {
     image(original,0,0);
   }
}
