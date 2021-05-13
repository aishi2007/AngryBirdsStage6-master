class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
var posi=this.body.position
// console.log(posi.x +" , "+ posi.y)
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>5){
    var positionArray=[posi.x,posi.y]
    this.trajectory.push(positionArray)}
    for (let index = 0; index < this.trajectory.length; index++) {
      // const element = array[index];
      image(this.smokeImage,this.trajectory[index][0],this.trajectory[index][1])
    }
  }
}
