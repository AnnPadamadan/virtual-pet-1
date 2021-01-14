//Create variables here
var Dog, happyDog, dog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  
  happyDog = loadImage("happyDog.png");
  Dog = loadImage("Dog.png");
}

function setup() {
	createCanvas(800, 800);
 
  database = firebase.database();
  dog = createSprite(400, 500, 10, 10);
  dog.addImage(Dog);
  dog.scale = 0.3;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);



}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){ 
  writeStock(foodS);
  //foodS = foodS-1;
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(20);
  fill(100, 255, 255);
  stroke(0);

text("Press the up arrow key to feed Fido milk!", 100, 200);
text("Number of food left: "+ foodS, 10, 30);
}


function readStock(data){
foodS = data.val();

}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else(x = x-1);
database.ref('/').update({
  Food:x
})
}

