const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tree, treeImg;
var boy, boyImg;
var stone, stoneImg;
var mango1, mango2, mango3, mango4, mango5;
var mango1Img, mango2Img, mango3Img, mango4Img, mango5Img;

function preload() {
  treeImg.loadImage("Plucking mangoes/tree.png");

  stoneImg = loadImage("Plucking mangoes/stone.png");

  boyImg = loadImage("Plucking mangoes/boy.png");

  mango1Img = loadImage("Plucking mangoes/mango.png");
  mango2Img = loadImage("Plucking mangoes/mango.png");
  mango3Img = loadImage("Plucking mangoes/mango.png");
  mango4Img = loadImage("Plucking mangoes/mango.png");
  mango5Img = loadImage("Plucking mangoes/mango.png");
}

function setup() {
  createCanvas(1600,800);

  boy = createSprite(400, 200, 50, 50);
  boy = addImage(boyImg, "boy.png");

  tree = new Tree(200, 200, 50, 50);

  stone = new Stone(300, 300, 50);

  mango1 = new Mango(500, 200, 50);
  mango2 = new Mango(500, 200, 50);
  mango3 = new Mango(500, 200, 50);
  mango4 = new Mango(500, 200, 50);
  mango5 = new Mango(500, 200, 50);
}

function draw() {
  background(255,255,255); 
  
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mouseDragged();
  mouseReleased();
  keyPressed();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32) {
      slingshot.attach(bird.body);
  }
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
   if(distance<-lmango.r+lstone.r) {
     Matter.Body.setStatic(lmango.body, false);
   }
}
