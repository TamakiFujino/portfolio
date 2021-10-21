let video;
let vid;
let poseNet;
let pose;
let button;

let polySynth;
let t;


//////////////////////////////////////////////

function setup() {
  createCanvas(850, 300);
  background(255);

  //pose detection set up
  video = createCapture(VIDEO);
  video.hide();
  tint(0, 0);
  //fill(0);
  // rect(600,400,0,0);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

  // vid = createVideo(['wave.mp4', 'wave.mov'], vidLoad);
  // vid.size(windowWidth, windowHeight);
playSynth();
polySynth = new p5.PolySynth();

}


/////////////////////////////////////poseNet setup

// function vidLoad() {
//   vid.loop();
//   vid.volume(0);
// }


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
  image(video, 0, 0);
  background(0);

  if (pose) {
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
      for (let i = 0; i <= 120; i++) {
        // halfx_speed();
        polySynth.play('E2', 10, 0, );
        background(0);

      }
    }
    if (pose.nose.x > 75 && pose.nose.x < 150) {
      for (let i = 0; i <= 120; i++) {
        // onex_speed();
        polySynth.play('G2', 10, 0, 1);
        background(10);
      }
    }

    if (pose.nose.x > 150 && pose.nose.x < 225) {
      for (let i = 0; i <= 120; i++) {
        // twox_speed();
        polySynth.play('G3', 10, 0, 1);
        background(20);
      }
    }

    if (pose.nose.x > 225 && pose.nose.x < 300) {
      for (let i = 0; i <= 120; i++) {
        // fourx_speed();
        polySynth.play('D2', 10, 0, 1);
        background(30);
      }
    }


    if (pose.nose.x > 300 && pose.nose.x < 375) {
      for (let i = 0; i <= 120; i++) {
        // sixx_speed();
        polySynth.play('D3', 10, 0, 1);
        background(40);
      }
    }

    if (pose.nose.x > 375 && pose.nose.x < 450) {
      for (let i = 0; i <= 120; i++) {
        // eightx_speed();
        polySynth.play('A2', 10, 0, 1);
        background(50);
      }
    }

    if (pose.nose.x > 450 && pose.nose.x < 525) {
      for (let i = 0; i <= 120; i++) {
        // twlx_speed();
        polySynth.play('C2', 10, 0, 1);
        background(60);
      }
    }

    if (pose.nose.x > 525 && pose.nose.x < 600) {
      for (let i = 0; i <= 120; i++) {
        // sixtx_speed();
        polySynth.play('C3', 10, 0, 1);
        background(70);
      }
    }

  }

}

function halfx_speed() {
  vid.speed(0.5);
}

function onex_speed() {
  vid.speed(0.7);
}

function twox_speed() {
  vid.speed(1);
}

function fourx_speed() {
  vid.speed(2);
}

function sixx_speed() {
  vid.speed(4);
}

function eightx_speed() {
  vid.speed(6);
}

function twlx_speed() {
  vid.speed(8);
}

function sixtx_speed() {
  vid.speed(16);
}

function playSynth () {
  userStartAudio();
}
