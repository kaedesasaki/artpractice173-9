var anim_kiki, anim_lala, anim_star, anim_star2;

function preload(){
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");
  anim_star = loadAnimation("assets/star1.png","assets/star4.png");
  anim_star2 = loadAnimation("assets/star2.png","assets/star4.png");
	
  cloud = loadImage('cloud.png');
  cloud2 = loadImage('cloud.png');
  cloud3 = loadImage('cloud.png');
  cloud4 = loadImage('cloud.png');
}
	
function setup(){
  createCanvas(1000, 1000);
	for (var i=0 ; i < 7 ; i++){
    var sprite = createSprite(random(width), random(-height)); //座標を上方向、左右にずらす
    sprite.addAnimation("star", "assets/star1.png", "assets/star4.png");
    sprite.velocity.y = 1; //落ちてくる速度(y軸方向の速度) 
  }
	
  var sprite = createSprite(300, 630);
  sprite.addAnimation("kiki", anim_kiki); 
  sprite = createSprite(600, 730); 
  sprite.addAnimation("lala", anim_lala);
}

function draw(){
  background(158, 231, 250);
  drawSprites();
  image(cloud, 100, 150, 200, 200);
  image(cloud2, 500, 400, 200, 200);
  image(cloud3, 250, 600, 200, 200);
  image(cloud4, 600, 700, 200, 200);

}
