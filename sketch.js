var Obgroup,obimage,obstacle,score=0,background,Backimg;
var Bananaimg,banana,bananagroup,gamestate;
var monkeyimg,monkey,ground;

function preload()
{Backimg=loadImage("jungle.jpg")
Bananaimg=loadImage('banana-1.png')
 
monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png",
  "Monkey_03.png","Monkey_04.png","Monkey_05.png",
  "Monkey_06.png","Monkey_07.png",
  "Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
 obimage=loadImage('stone.png')
}

function setup()
{createCanvas(580, 400);
    
 background=createSprite(200,200) ;
 background.addImage(Backimg);  background.scale=1.3
background.velocityX=-2;
 
 //create the groups
 bananagroup=createGroup();
 Obgroup=createGroup();
 
ground=createSprite(200,350,400,10);  
ground.visible=false;
   
 monkey=createSprite(90,330);
 monkey.addAnimation('monkey_running',monkeyimg); 
 monkey.scale=0.15;  
 }

function draw()
{
//make the monkey collide
monkey.collide(ground);
  
  if (background.x===background.width/2){
    
  }

 // increasing mnkey size
  switch(score){
   case 8:monkey.scale=0.19
     break;
  case 15:monkey.scale=monkey.scale+0.02
     break;
  case 20:monkey.scale=monkey.scale+0.02
     break;
  case 30:monkey.scale=monkey.scale+0.02
     break;
     default: break; }
console.log(monkey.scale)
  
  //increase the score
  if(monkey.isTouching(bananagroup))
  {score=score+1
  bananagroup.destroyEach();}
  
// add gravity and make the monkey jump
monkey.velocityY=monkey.velocityY+2.5;
  
if(keyWentDown("space") && monkey.y >= 290){
  monkey.velocityY = -27 ;}
  
  if(monkey.isTouching(Obgroup)){
    monkey.scale=0.17
    score=0;
  }

// create the obstacles and fruits
food();    obstacles();

drawSprites();
stroke('white')
 textSize(20);   
 fill('yellow')
 text('score:'+score,400,50)  }// function draw end

function food() {
 if (World.frameCount%80===0) {
//create the banana sprite
var banana=createSprite(580,Math.round(random(230,130)));
banana.addImage(Bananaimg);
banana.lifetime=120; 
banana.scale=0.05;
banana.velocityX=-6;
bananagroup.add(banana); }}
   
function obstacles() {
 if (World.frameCount%300===0) {
//create the stone sprite
var obstacle=createSprite(580,340);
obstacle.addImage(obimage);
obstacle.lifetime=120; 
obstacle.scale=0.17;     
obstacle.velocityX=-6.8;
Obgroup.add(obstacle);
 }}
