//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
happyDogImage = loadImage("happydog.png");
  
}

function setup() {
  createCanvas(500, 500);

database = firebase.database();

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

  dog = createSprite(200,300,30,30);
dog.addImage(dogImage);
dog.scale = 0.3;


  
  
  
}


function draw() {  
background(46,139,87);  

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage);
  dog.scale = 0.3;

}


  drawSprites();
  //add styles here
  textSize(25);
  fill("brown");
text("Food Stock" +  foodS, 200,100);
}
function readStock(data){
  foodS= data.val();

}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}

