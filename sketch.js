var newx=700
var life=3
var gameState="play"
var bg=0
var newx2=600
function preload(){
  enemy2 = loadImage("enemy1.png")
  enemydead = loadImage("enemy defeated.png")
  log = loadImage("log.png")
 
}
function setup() {
  createCanvas(1200,800);
  edge1= createSprite(3000,20,6000,10)
 
  
  edge2= createSprite(3000,780,6000,10) 
  edge1.visibility=false
  edge2.visibility = false
 
 krishna = new Player(200,500)
 rockgroup= new Group()
  stonegroup = new Group()
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
   
     enemy.body.addImage(enemy2)
     enemy.body.setCollider("rectangle",50,-80,50,50)
     enemy.body.scale=2
     text("press space to throw the stone",krishna.body.x,200)
     if(keyWentDown("space")){
       stone = new Stone(krishna.body.x,krishna.body.y)
       stonegroup.add(stone.body)

     }
 
     if(frameCount%50===0){
       enemy.body.y=random(100,700)
     }

     stonegroup.collide(enemy.body,levelchange)
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
        rock1 = new Rock(100)
        rock1.body.addImage(log)
        rock1.body.setCollider("rectangle", -10, -80, 500, 180)
        rock1.body.y=400
        rock1.body.velocityY=0
        rockgroup.add(rock1.body)
        for(var i=0;i<=10;i++){
          rock1 = new Rock(newx2)
          rock1.body.velocityY=5
          rock1.body.addImage(log)
          rock1.body.setCollider("rectangle", -10, -80, 500, 180)
          rockgroup.add(rock1.body)
         
          newx2+=300
          }
        enemy = new Enemy(newx2, 500)
      }
    }

if(gameState==="play3"){
  krishna.body.collide(edge1)
  krishna.body.velocityY=15
  krishna.body.collide(rockgroup)
  krishna.body.velocityX=0
 if(keyDown(UP_ARROW)){
   krishna.body.setVelocity(5,-30)
 } 
krishna.body.collide(edge1,comeback)
  krishna.body.collide(edge2, comeback)
  if (krishna.body.isTouching(enemy.body)) {

gameState='gameOver'
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

  if(gameState=='gameOver'){
    camera.position.x=newx2
    krishna.body.velocityX = 5
    krishna.body.velocityY = 0
    enemy.body.velocityX = 5

    textSize(30)
    text('GAME OVER ...... you won the game'  , newx2, height / 2)
  }

  krishna.body.collide(rockgroup,comeback)
  drawSprites();
}

function comeback(krish,rock){
  krish.x=200
  krish.y=500
  krish.velocityX=0
  krish.velocityY=0
  life--

}
function levelchange(){
  gameState = "play2"
}