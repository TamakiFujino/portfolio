let vid;
let camera;
let poseNet;
let pose;
let x;
let y;


function setup() {
  noCanvas();

  vid = createVideo(
    ['chrome.webm'],
    vidLoad
  );
vid.size(1400, 1400);
vid.position(0,-400,'fixed');

}


// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
