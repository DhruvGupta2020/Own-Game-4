var bird1, bird2 ;
var database;
var gameState=0;
var playerCount;
var bird1image,bird2image,bgImg;
var player;
var form;
var bg;


function preload(){
    bird1image = loadImage("images/YellowBird.png");
    bird2image = loadImage("images/BlueBird.png");
    bgImage = loadImage("images/sky.png");
  }
  
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){
    background("white");
 if(playerCount===2){
     game.update(1);
 }
 if(gameState===1){
     game.play()
 }
    drawSprites();
}

