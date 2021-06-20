class Paper{
constructor(x,y,r){
var options={
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2   
}
this.body=Bodies.circle(x,y,r/2-10,options)
this.r=r
World.add(world,this.body)
this.image=loadImage("paper.png")
}
display(){
var p=this.body.position 
var a=this.body.angle   
push ()
translate(p.x,p.y)
rotate(a)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop ()
}

}