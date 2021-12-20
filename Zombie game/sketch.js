var shooter,shooter1,shooter2;
var zombie1img,zombie2img,zombie1,zombie2,zombieGrp;
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
zombie1img = loadImage("Zombie1.png");
zombie2img = loadImage("Zombie2.png");

lifeImg = loadImage("life.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
//createCanvas(1000,1000);
background = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
background.addImage('background.jpg',backgroundImg);
background.scale =2

shooter = createSprite(displayWidth-1150,displayHeight-300,50,50);
shooter.addImage('shooter1.png',shooter1);
shooter.scale = 0.7;
zombieGrp = new Group();

}



function draw(){

 createzombie();   
 drawSprites();
}

//creating zombie grp
function createzombie(){
if (frameCount%50==0){
zombie1 = createSprite(random(500,1000),random(100,500),20,20);
zombie1.addImage(zombie1img);
zombie1.scale = 0.2;
zombie1.debug =true;
zombie1.setCollider("rectangle",0,0,400,400)
zombieGrp.add(zombie1)

zombie2 = createSprite(random(500,1000),random(100,500),20,20);
zombie2.addImage(zombie2img);
zombie2.scale = 0.14;
zombie2.debug =true;
zombie2.setCollider("rectangle",0,0,400,400)
zombieGrp.add(zombie2)
}
}