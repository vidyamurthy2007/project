var movingRect , gameObject1 , gameObject2;

function setup() {
  createCanvas(1200,800);
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(600,400,50,80);
  gameObject1.shapeColor="white";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="white";
  
  
  
}

function draw() {
  background(0,0,0);  

 movingRect.x =   World.mouseX;
 movingRect.y =   World.mouseY;

if(isTouching(movingRect , gameObject1)){
  movingRect.shapeColor= "yellow";
  gameObject1.shapeColor = "yellow";
}
else{
  movingRect.shapeColor= "white";
  gameObject1.shapeColor = "white";
}
  drawSprites();
}

function isTouching(object1 , object2){
if(object1.x-object2.x<object2.width/2+object1.width/2 &&
  object2.x-object1.x<object2.width/2+object1.width/2 &&
  object1.y-object2.y<object2.height/2+object1.height/2 &&
  object2.y-object1.y<object2.height/2+object1.height/2){
  return true;

  }
  else{
    return false;
  }
}