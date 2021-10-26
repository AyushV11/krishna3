class Stone{
    constructor(x,y){
        
        this.body = createSprite(x,y)
        this.image = loadImage("stone.png")
        this.body.addImage(this.image)
        this.body.scale=0.5
       this.body.velocityX=15
      // this.body.lifetime=200
        this.body.debug=true
        this.body.setCollider("rectangle",0,0,100,100)
    
    }
    }