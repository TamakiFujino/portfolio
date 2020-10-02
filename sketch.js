//
// var drops = [];
//
// function setup() {
// createCanvas (windowWidth, windowHeight)
//   for (var i = 0; i < 500; i++) {
//     drops[i] = new Drop();
//   }
//   var cnv = createCanvas(windowWidth, windowHeight);
//  cnv.style('display', 'block');
// }
//
//
// function draw() {
//   background(nofill);
//   for (var i = 0; i < drops.length; i++) {
//     drops[i].fall();
//     drops[i].show();
//   }
//
// }
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

// var drops = [];
//
// function setup() {
//  createCanvas(windowWidth, windowHeight);
//  for (var i = 0; i < 500; i++) {
//    drops[i] = new Drop();
//  }
//  var cnv = createCanvas(windowWidth, windowHeight);
// cnv.style('display', 'block');
// }
//
// function draw() {
//  background(rgb(0,0,0));
//  for (var i = 0; i < drops.length; i++) {
//    drops[i].fall();
//    drops[i].show();
//  }
// }

class Drop{

    constructor(){
        this.x = random(mouseX,width);
        this.y = random(mouseY,-100);
        this.z = random(0,20);
        this.yspeed = map(this.z,0,10,2,10);
    }
    fall(){
        this.y = this.y + this.yspeed;
        var g = map(this.z,0,20,0,0.2);
        this.yspeed = this.yspeed + g;
        if(this.y > height){
            this.y = random(mouseX,mouseY);
            this.yspeed = random(mouseX,mouseY);
        }
    }
    show(){
        var l = map(this.z,0,20,10,20);
        var thickness = map(this.z,0,20,1,1);
        strokeWeight(thickness);
        stroke(255,255,255);
        line(this.x,this.y,this.x,this.y+l);
    }
}


var drops=[];
let osc, playing, freq, amp;
let osc1, playing1, freq1, amp1;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(playOscillator);
 osc = new p5.Oscillator('triangle');
 osc1 = new p5.Oscillator('sine');
    for(var i=0;i<480;i++)
    {
        drops[i] = new Drop();
    }
noCursor();
}

function draw()
{
    background(206,206,206);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].fall();
        drops[i].show();
    }

    freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 0.2), 0.01, 0.05);
  freq1 = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
amp1 = constrain(map(mouseY, height, 0, 0, 0.2), 0, 0.2);

  // text('tap to play', 20, 20);
  // text('freq: ' + freq, 20, 40);
  // text('amp: ' + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    osc1.freq(freq, 0.1);
    osc1.amp(amp, 0.1);
  }

    if (keyIsPressed === true) {
    // nested if statement checks to see what key is pressed
    // if (key === 'a') {
    //   ellipse(mouseX, mouseY, 50, 50);
    //   stroke(206,206)
    // } else if (key === 's') {
    //   ellipse(mouseX, mouseY, 75, 75);
    //   stroke(206,206)
    // }
    // else if (key === 'd') {
    //   ellipse(mouseX, mouseY, 90, 90);
    //   stroke(206,206)
    // }
    // else if (key === 'f') {
    //   ellipse(mouseX, mouseY, 115, 115);
    //   stroke(206,206)
    // }
    // else if (key === 'g') {
    //   ellipse(mouseX, mouseY, 130, 130);
    //   stroke(206,206)
    // }
    // else if (key === 'h') {
    //   ellipse(mouseX, mouseY, 155, 155);
    //   stroke(206,206)
    // }
  } else {
    fill(206,206,206);
  }

  // draw rectangle
  ellipse(mouseX, mouseY, 35, 35);
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
  osc1.start();
  playing1 = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.3);
  playing = false;
  osc1.amp(0, 0.3);
  playing1 = false;
}
