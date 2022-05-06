var easycam;
let angle = 0;
let mat01;
let mat02;
let mat03;
let mat00;
let cam;

function preload() {
  //mat00 = loadImage ('media/BILLBOARD-edit.jpg');
  mat01 = loadModel ('media/9157 Sunset Billboard_00-mat01.obj');
  mat02 = loadModel ('media/9157 Sunset Billboard_00-mat02.obj');
  mat03 = loadModel ('media/9157 Sunset Billboard_00-mat03.obj');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    
  // the simplest method to enable the camera
 easycam = createEasyCam({distance:1250});
 easycam.setRotationConstraint(true, true, true);
   
  // suppress right-click context menu
 document.oncontextmenu = function() { return false; }
  
    // disable default scrolling behavior on the canvas element and add
  // 'wheelDefaultDisabled' flag to p5 instance
  if (this.wheelDefaultDisabled !== true) {
    this.canvas.onwheel = () => false;
    this._setProperty('wheelDefaultDisabled', true);
  }
      
    cam = createCapture(VIDEO);
    //cam.size(0,0,cam.Height,cam.Width);
    cam.hide();
}


function draw() {
  background(255);
  noStroke();
  //ambientLight(200,255,255);
  ambientLight(229, 255, 255);
  //directionalLight(250, 25, 250, 1, 0, 1);
  directionalLight(250, 25, 250, 1, 3, -1);
  
  //rotateX(angle);
  rotateY(angle);
  rotateZ(PI);
  
  
  push();
  //specularMaterial(255,107,161);
  texture(cam);
  //translate(origin);
  model(mat01);
  pop();
  
  push();
  specularMaterial(200);
  model(mat02);
  pop();
  
  push();
  specularMaterial(175);
  model(mat03);
  pop();
  
  angle += 0.0025; 
}


function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
