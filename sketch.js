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
        this.x = random(0,width);
        this.y = random(-200,-100);
        this.z = random(0,20);
        this.yspeed = map(this.z,0,10,2,10);
    }
    fall(){
        this.y = this.y + this.yspeed;
        var g = map(this.z,0,20,0,0.2);
        this.yspeed = this.yspeed + g;
        if(this.y > height){
            this.y = random(-200,-100);
            this.yspeed = random(2,10);
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

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(var i=0;i<480;i++)
    {
        drops[i] = new Drop();
    }

}

function draw()
{
    background(206,206,206);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].fall();
        drops[i].show();
    }
}
