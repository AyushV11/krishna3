var newx=700
var life=3
var gameState="play2"
var bg=0
var newx2=0
function preload(){
  enemy2 = loadImage("enemy1.png")
  enemydead = loadImage("enemy defeated.png")
  log = loadImage("log.png")
 
}
function setup() {
  createCanvas(1200,800);
  edge1= createSprite(3000,20,6000,10)
  edge2= createSprite(3000,780,6000,10) 
  edge1.visible=false
  edge2.visible=false
 krishna = new Player(200,500)
 rockgroup= new Group()
 for(var i=0;i<=5;i++){
 rock1 = new Rock(newx)
 rockgroup.add(rock1.body)
 stone = new Stone(krishna.body.x,10)
 newx+=800
 }
 
 enemy = new Enemy(6000,500)
}

function draw() {
  background(bg);
 
  drawSprites();
  textSize(20)
  fill("white")
  text("life's : "+ life,krishna.body.x,50)
  console.log(krishna.body.x)
 
  rockgroup.bounceOff(edge1)
  rockgroup.bounceOff(edge2)
  camera.position.x= krishna.body.x+500

  if(keyDown(RIGHT_ARROW)){
    krishna.body.x+=30
  }

  if(keyDown(LEFT_ARROW)){
    krishna.body.x-=30
  }

 

  if(keyDown(DOWN_ARROW)){
    krishna.body.y+=10
  }
if(gameState==="play"){

  krishna.body.collide(edge1)
  krishna.body.collide(edge2)
  if(keyDown(UP_ARROW)){
    krishna.body.y-=10
  }
  if(krishna.body.x>5000){
    // stone = new Stone(krishna.body.x,krishna.body.y)
     enemy.body.addImage(enemy2)
     enemy.body.setCollider("rectangle",50,-80,50,50)
     enemy.body.scale=2
     text("press space to throw the stone",krishna.body.x,200)
     if(keyWentDown("space")){
       stone = new Stone(krishna.body.x,krishna.body.y)
     }
 
     if(frameCount%50===0){
       enemy.body.y=random(100,700)
     }

     if(stone.body.isTouching(enemy.body)){
    
     
      gameState="play2"
    }
  }
 
}
 
    if(gameState==="play2"){
      text("you are entering level 2",krishna.body.x,500)
      text ("press enter to go to level 2",krishna.body.x,600)
      enemy.body.addImage(enemydead)
      if(keyDown("enter")){
        gameState="play3"
        enemy.body.destroy()
        rockgroup.destroyEach()
        life=3
       // bg = loadImage("bg.png")
        //bg.addImage()
        krishna.body.x = 50
        krishna.body.y = 50
        for(var i=0;i<=10;i++){
          rock1 = new Rock(newx2)
          rock1.body.addImage(log)
          rockgroup.add(rock1.body)
         
          newx2+=800
          }
      }
    }

if(gameState==="play3"){
  krishna.body.collide(edge1)
  krishna.body.velocityY=5
  krishna.body.collide(rockgroup)
 if(keyDown(UP_ARROW)){
   krishna.body.setVelocity(10,-20)
 } 
if(krishna.body.isTouching(edge1)){
  life--
  krishna.body.x=100
  krishna.body.y=50
}
}


   

  if(life===0){
    gameState="end"

  }

  if(gameState==="end"){
    krishna.velocityX=0
    krishna.velocityY=0
    rockgroup.setVelocityEach(0,0)
    text("GAME OVER",krishna.body.x,200)
  }

  krishna.body.collide(rockgroup,comeback)
}

function comeback(krish,rock){
  krish.x=200
  krish.y=500
  krish.velocityX=0
  krish.velocityY=0
  life--

}