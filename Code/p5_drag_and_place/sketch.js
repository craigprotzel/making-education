var x = [],
  y = [],
  angle = [],
  segNum = 200,
  segLength = 1,
  curSeg = 0;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

var dragging = true;
var toggleSide = false;

function setup() {
  createCanvas(710, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);

  dragSegment(0, mouseX, mouseY);
  for(var i=curSeg; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  } 
}

function dragSegment(i, xin, yin) {
  if (dragging){
    var dx;
    var dy;
    var curAngle;
    if (toggleSide){
      if (i > segNum/2){
        console.log("Switch!!!");
        dx = xin - x[i];
        dy = yin - y[i];
        curAngle = atan2(dy, dx);
        angle[i] = curAngle;
        x[i] = xin - cos(angle[i]) * segLength;
        y[i] = yin - sin(angle[i]) * segLength;
      }
      else{
        //do nothing
      }
    }
    else{
      dx = xin - x[i];
      dy = yin - y[i];
      curAngle = atan2(dy, dx);
      angle[i] = curAngle;
      x[i] = xin - cos(angle[i]) * segLength;
      y[i] = yin - sin(angle[i]) * segLength;
    }
  }
  segment(x[i], y[i], angle[i]);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
function mousePressed(){
  dragging = !dragging;
}
function keyPressed(evt){
  console.log(evt);
  if (keyCode == 32){
    toggleSide = !toggleSide;
    console.log(toggleSide);
  }
}

