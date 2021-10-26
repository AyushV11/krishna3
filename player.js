class Player{
    constructor(x,y){
this.body = createSprite(x,y)
this.image=loadImage("krishna.png")
this.body.addImage(this.image)
this.body.scale=1
this.body.debug=true
this.body.setCollider("rectangle",50,0,100,200)
    }

    
}