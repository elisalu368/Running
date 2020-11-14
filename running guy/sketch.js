const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [255, 225, 225];

let guy;
let guyAnimR;
let guyAnimL;

function preload() {
  const guyRWSpriteSheet = loadSpriteSheet("guy\guyfast2.jpgy/bRw.png", 30, 30, 3);
  const guyLWSpriteSheet = loadSpriteSheet("guy\guyfast3.jpg", 30, 30, 3);
  guyAnimR = loadAnimation(guyRWSpriteSheet);
  guyAnimL = loadAnimation(guyLWSpriteSheet);
  guy = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 30, 30);
  guy.moveSpeed = 2;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  guy.addAnimation("moveR", guyAnimR);
  guy.addAnimation("moveL", guyAnimL);
  guy.addImage("still", loadImage("guy\guyFast.jpg"));
  guy.setDefaultCollider()
}


function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("moveR");
  } else {
    object.changeImage("still");
  }
  guy.limitSpeed(guy.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(guy);
}