//Create variables here
var dogImg,dog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(900, 900);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale=0.3

  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  
  background(255,203,44)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg1)
    
  }

  drawSprites();
  //add styles here
  stroke("cyan")
  textSize(20)
  text("Food Remaining - "+foodS,170,180)
  text("Press up arrow to feed milk.",130,10,300,20)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
