var arrayOfDots = [];
function setup() {
createCanvas(400, 3000);
background(0);
}

function draw() {
 background(0);
 text(frameRate(), 10,10);
 fadeDots();
}

function touchStarted() {
 makeDot();
}

function makeDot() {
 var dot = {
   "opacity" : 255,
   "oX" : mouseX,
   "oY" : mouseY
 }
 arrayOfDots.push(dot);
}

function fadeDots() {
 for(i = arrayOfDots.length-1; i > 0; i--){
   if (arrayOfDots[i].opacity > 0){
     arrayOfDots[i].opacity = arrayOfDots[i].opacity - 25;
     fill(255, arrayOfDots[i].opacity);
     noStroke();
     ellipse(arrayOfDots[i].oX, arrayOfDots[i].oY, 60, 60);
   } else {
     arrayOfDots.splice(i,1);
     print("one dead, total left = " + arrayOfDots.length);
   }
 }
}
