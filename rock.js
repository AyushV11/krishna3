class Rock{
constructor(x){
    
    this.body = createSprite(x,random([100,300,500]))
    this.image = loadImage("rock.png")
    this.body.addImage(this.image)
    this.body.scale=0.5
    this.body.velocityY=10
    this.body.debug=true
    this.body.setCollider("rectangle",-10,-80,700,180)

}
}