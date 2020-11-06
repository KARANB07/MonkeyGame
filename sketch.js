
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.13;
  monkey.y=520;
  ground=createSprite(200,560,900,20);
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
  background("white");
  if(keyDown("space") && monkey.y==510.09){
    monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+ 0.8;
  monkey.collide(ground);
  obstacleS();
  bannanaS();
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  if(monkey.isTouching(obstacleGroup)){
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.destroyEach();
    survivalTime=0;
  }
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,100,50);


function obstacleS(){
  if(frameCount%300===0){
    obstacle=createSprite(600,520,50,50);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.setLifetime=200;
    obstacle.debug=true;
    obstacle.setCollider("circle",0,0,200);
    obstacleGroup.add(obstacle);
  }
}
function bannanaS(){
  if(frameCount%80===0){
  banana=createSprite(600,250,30,30);
  banana.velocityX=-10;
  banana.addImage(bananaImage);
  banana.scale=0.2;
  banana.setLifetime=200;
  banana.y=Math.round(random(240,400));
  bananaGroup.add(banana);
  }
}

}
