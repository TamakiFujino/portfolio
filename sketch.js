// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var drops = [];

function setup() {
createCanvas (windowWidth, windowHeight)
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  var cnv = createCanvas(windowWidth, windowHeight);
 cnv.style('display', 'block');
}


function draw() {
  background(141, 156, 223, 100);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
