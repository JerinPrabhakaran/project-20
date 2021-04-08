var car ,wall;
var speed ,weight;
function setup() {
  speed = random(50,90);
  weight = random(400 ,1500);
  car = createSprite(50 ,200 ,50 ,50);
  car.velocityX = speed;
  wall = createSprite(1500 ,200 ,60 ,height/2);
  createCanvas(1600,400);

}
function draw() {
  background("black");
  if (wall.x - car.x < (car.width + wall.width/2))
   {
    car.velocityX = 0;
    var deformation = 0.5*weight * speed * speed / 22509;
  if (deformation < 100)  
{
  car.shapeColor = ("green");
}
  if (deformation > 100 && deformation<180)
  {
    car.shapeColor = ("yellow");
  }
  if (deformation > 180)
  {
    car.shapeColor = ("red");
  }




} 
  drawSprites();
}