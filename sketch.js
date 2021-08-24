class Drop {

  constructor() {
    this.x = random(mouseX, width);
    this.y = random(mouseY, -100);
    this.z = random(0, 20);
    this.yspeed = map(this.z, 0, 10, 2, 10);
  }
  fall() {
    this.y = this.y + this.yspeed;
    var g = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + g;
    if (this.y > height) {
      this.y = random(mouseX, mouseY);
      this.yspeed = random(mouseX, mouseY);
    }
  }
  show() {
    var l = map(this.z, 0, 20, 10, 20);
    var thickness = map(this.z, 0, 20, 1, 1);
    strokeWeight(thickness);
    stroke(255,255,255);
    line(this.x, this.y, this.x, this.y + l);
  }
}


var drops = [];
let array = [];
let osc, playing, freq, amp;
let osc1, playing1, freq1, amp1;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc1 = new p5.Oscillator('triangle');
  for (var i = 0; i < 480; i++) {
    drops[i] = new Drop();
  }
  noCursor();
}

function draw() {
  background(0,173,150);

  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }

  freq = constrain(map(mouseX, 0, width, 100, 800), 100, 800);
  amp = constrain(map(mouseY, height, 0, 0, 0.2), 0.4, 0.05);
  freq1 = constrain(map(mouseX, 0, width, 30, 500), 100, 500);
  amp1 = constrain(map(mouseY, height, 0, 0, 0.2), 0, 0.2);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    osc1.freq(freq1, 0.1);
    osc1.amp(amp1, 0.1);
  }

  // draw rectangle
  strokeWeight(3);
  stroke(255,255,255);
  noFill();
  ellipse(mouseX, mouseY, 60, 60);
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
  osc.amp(0, 0.5);
  playing = false;
  osc1.amp(0, 0.5);
  playing1 = false;
}
