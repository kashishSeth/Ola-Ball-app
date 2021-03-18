//name spacing (nicknames)  
var Engine = Matter.Engine
var World = Matter.World
var Events = Matter.Events
var Bodies = Matter.Bodies
var database;
var gameState = 0; 
var score = 0;
var playerCount, allPlayers;
var form, player, game; 
var players, player1, player2, player3, player4, ball;
var ball_image, Elena_image, Gabe_image, Mateo_image, Naomi_image;
var ball1, obj1, obj2, obj3, obj3, objs;
var ballPosition;

function preload(){
  Ball = loadImage("images/Ball.png");
  Elena = loadImage("images/Elena.png");
  Gabe = loadImage("images/Gabe.png");
  Mateo = loadImage("images/Mateo.png");
  Naomi = loadImage("images/Naomi.png");
}
function setup() {

  createCanvas(800, 1000);
  engine = Engine.create();
  //small w and e have their own program
  world = engine.world;

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
   Engine.update(engine);
 
  if(playerCount === 4){
    game.update(1);
    background("Green");
  }
  if(gameState === 1){
    clear();
    game.play();

   //if(ball.isTouching()){

   //}

    rectMode(CENTER);
    noFill();
    stroke("Green");
    strokeWeight(3)
    rect(80, 117, 130, 35);

    noFill();
    stroke("Red");
    strokeWeight(3)
    rect(725, 883, 130, 35);

    fill("Black");
    noStroke();
    textSize(20);
    text("Team 1 : " + score, 27, 125);
    
    fill("Black");
    noStroke();
    textSize(20);
    text("Team 2 : " + score, 670, 890); 

    /*fill("Black");
    noStroke();
    text(mouseX + ", " + mouseY, mouseX,mouseY);*/

  }
}