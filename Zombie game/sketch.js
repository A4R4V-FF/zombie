var shooter,shooter1,shooter2;
var zombie1,zombie2,zombie3,zombie;
var backgroundImg,background;
var life,lifeImg;

function preload(){

//backgroundImg = loadImage("assets/background.jpg");
//shooter1 = loadImage("assets/shooter1.png");
//shooter2 = loadImage("assets/shooter2.png");
//zombie1 = loadImage("assets/Zombie1.png");
//zombie2 = loadImage("assets/Zombie2.png");
//zombie3 = loadImage("assets/Zombie3.png");
//lifeImg = loadImage("assets/life.png");

backgroundImg = loadImage("background.jpg");
shooter1 = loadImage("shooter1.png");
shooter2 = loadImage("shooter2.png");
zombie1 = loadImage("Zombie1.png");
zombie2 = loadImage("Zombie2.png");
zombie3 = loadImage("Zombie3.png");
lifeImg = loadImage("life.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
background = createSprite(200,200);
background.addImage('background.jpg',backgroundImg);
//shooter.scale = 0.7;

shooter = createSprite(200,350,50,50);
shooter.addImage('shooter1.png',shooter1);
shooter.scale = 0.27;


}



function draw(){


 drawSprites();
}