var anim_kiki, anim_lala;

function preload(){
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");
  anim_star = loadAnimation("assets/star1.png","assets/star4.png");
	
  cloud = loadImage('cloud.png');
  cloud2 = loadImage('cloud.png');
  cloud3 = loadImage('cloud.png');
  cloud4 = loadImage('cloud.png');
}
	
function setup(){
  createCanvas(1000, 1000);
  var sprite = createSprite(300, 630);
  sprite.addAnimation("kiki", anim_kiki); 
  sprite = createSprite(580, 780); 
  sprite.addAnimation("lala", anim_lala);
  sprite = createSprite(800, 200); 
  sprite.addAnimation("star", anim_star);
  sprite = createSprite(600, 300); 
  sprite.addAnimation("star", anim_star);
}

function draw(){
  background(158, 231, 250);
  drawSprites();
  image(cloud, 100, 150, 200, 200);
  image(cloud2, 500, 400, 200, 200);
  image(cloud3, 250, 600, 200, 200);
  image(cloud4, 600, 700, 200, 200);

}
