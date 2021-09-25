const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage,playerimage

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
var options={
  isStatic:true
}
  //create player base body
playerbase=Bodies.rectangle(100,350,50,100,options)
World.add(world,playerbase)
  //create player body
player=Bodies.rectangle(100,250,100,50,options)
World.add(world,player)

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  
  image(playerimage,player.position.x,player.position.y,50,100)

  //show the playerbase image using image() function
  image(baseimage,playerbase.position.x,playerbase.position.y,150,150)
  
  Engine.update(engine);
 
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
