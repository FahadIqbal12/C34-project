//Create variables here
var dog,dogImg,dogImg1,database,foodS,foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
}

function setup() {
  
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(400,400);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);

    
  }





  drawSprites();
  //add styles here
  textSize(39);
  text("Press UP_ARROW key to feed the dog",100,200);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
