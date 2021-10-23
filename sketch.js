let video;
let vid;
let poseNet;
let pose;
let button;

// let polySynth;
// let t;


//////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);

  //pose detection set up
  video = createCapture(VIDEO);
  video.hide();
  tint(0, 0);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

  vid = createVideo(
   ['chrome.webm'],vidLoad);
   vid.size(windowWidth, windowHeight);
  // playSynth();
  // polySynth = new p5.PolySynth();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

/////////////////////////////////////poseNet setup

function vidLoad() {
  vid.loop();
}


function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelReady() {
  console.log('model ready');
}
//////////////////////////////////////////////////


function draw() {
  // background(220, 10);
  image(video, 0, 0);

  if (pose) {

    noFill();
    strokeWeight(3);
    ellipse(60,60,60,60);
    // t.style('z-index', '2');
    // bubbleNose.show();
    // bubbleNose.x = pose.nose.x;
    // bubbleNose.y = pose.nose.y;
    //
    // bubbleRArm.show();
    // bubbleRArm.x = pose.rightWrist.x;
    // bubbleRArm.y = pose.rightWrist.y;
    //
    // bubbleLArm.show();
    // bubbleLArm.x = pose.leftWrist.x;
    // bubbleLArm.y = pose.leftWrist.y;
    //
    // bubbleREye.show();
    // bubbleREye.x = pose.rightKnee.x;
    // bubbleREye.y = pose.rightKnee.y;
    //
    // bubbleLEye.show();
    // bubbleLEye.x = pose.leftKnee.x;
    // bubbleLEye.y = pose.leftKnee.y;
    //
    // bubbleREar.show();
    // bubbleREar.x = pose.rightEar.x;
    // bubbleREar.y = pose.rightEar.y;
    //
    // bubbleLEar.show();
    // bubbleLEar.x = pose.leftEar.x;
    // bubbleLEar.y = pose.leftEar.y;
    //
    // bubbleRShoulder.show();
    // bubbleRShoulder.x = pose.rightShoulder.x;
    // bubbleRShoulder.y = pose.rightShoulder.y;
    //

    if (pose.nose.x > 0 && pose.nose.x < 75) {
        halfx_speed();
        // polySynth.play('E2', 10, 0, );
    }
    else if (pose.nose.x > 75 && pose.nose.x < 150) {
        onex_speed();
        // polySynth.play('G2', 10, 0, 1);
    }
    else if (pose.nose.x > 150 && pose.nose.x < 225) {
        twox_speed();
        // polySynth.play('G3', 10, 0, 1);
        stroke('rgb(64,66,129)');
    }

    else if (pose.nose.x > 225 && pose.nose.x < 300) {
        fourx_speed();
        // polySynth.play('D2', 10, 0, 1);
        stroke('rgb(58,60,179)');
    }
    else if (pose.nose.x > 300 && pose.nose.x < 375) {
        sixx_speed();
        // polySynth.play('D3', 10, 0, 1);
        stroke('rgb(99,101,196)');
    }
    else if (pose.nose.x > 375 && pose.nose.x < 450) {
        eightx_speed();
        stroke('rgb(134,132,230)');
    }
    else if (pose.nose.x > 450 && pose.nose.x < 525) {
        twlx_speed();
        // polySynth.play('C2', 10, 0, 1);
        stroke('rgb(171,172,223)');
    }

    else if (pose.nose.x > 525 && pose.nose.x < 600) {
        sixtx_speed();
        // polySynth.play('C3', 10, 0, 1);
        stroke('rgb(205,205,236)');
    }

  }

}

function halfx_speed() {
  vid.speed(0.2);
}

function onex_speed() {
  vid.speed(0.5);
}

function twox_speed() {
  vid.speed(0.7);
}

function fourx_speed() {
  vid.speed(1);
}

function sixx_speed() {
  vid.speed(2);
}

function eightx_speed() {
  vid.speed(4);
}

function twlx_speed() {
  vid.speed(6);
}

function sixtx_speed() {
  vid.speed(8);
}

// function playSynth() {
//   userStartAudio();
// }
