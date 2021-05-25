
var score=0;
var edges;
var b;
var gamestate=1;
var lives=3;

function preload() {
   mon1img=loadImage("mon1.png");
   mon2img=loadImage("mon2.png");
   mon3img=loadImage("mon3.png");
   mon4img=loadImage("mon4.png");
   mon5img=loadImage("mon5.png");
   bgimg=loadImage("bac1.jpg");
   bg2img=loadImage("back3.jpg");
   plimg=loadImage("b2.png");
   bimg=loadImage("b3.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

    back1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    back1.addImage(bg2img);

    back1.scale=1.8;
 

pl = createSprite(windowWidth-200,windowHeight/2);
pl.addImage(plimg);
pl.scale=0.35;

pl2 = createSprite(170,40);
pl2.addImage(plimg);
pl2.scale=0.05;

pl3 = createSprite(200,40);
pl3.addImage(plimg);
pl3.scale=0.05;

pl4 = createSprite(230,40);
pl4.addImage(plimg);
pl4.scale=0.05;
/*mon2 = createSprite(200,200);
mon2.addImage(mon2img);
mon3 = createSprite(300,200);
mon3.addImage(mon3img);
mon4 = createSprite(400,200);
mon4.addImage(mon4img);
mon5 = createSprite(500,200);
mon5.addImage(mon5img);
mon5.scale=0.5;
*/


mon1gp=new Group();
mon2gp=new Group();
mon3gp=new Group();
mon4gp=new Group();
mon5gp=new Group();
bgp=new Group();
  
 
   edges= createEdgeSprites();
  
}

function draw(){
   // background(76,77,79)
   background("white")
   var r = Math.round(random(1,2));
   if(gamestate===1){
   MON1();
   if(score>15&&r===1){
   MON2();
   }
   if(score>25&&r===2)
   MON3();
  if(score>35&&r===1)
   MON4();
   if(score>45&&r===2)
   MON5();

   if(keyDown(UP_ARROW)){
      pl.y=pl.y-5;
   }
   if(keyDown(DOWN_ARROW)){
      pl.y=pl.y+5;
   }
    
   if(keyDown("space")&&frameCount%10===0){
      Bul();
   }
   
   if(bgp.isTouching(mon1gp)){
      mon1gp.get(0).destroy();
      bgp.get(0).destroy();
      score=score+1;

  }
  if(bgp.isTouching(mon2gp)){
   mon2gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+3;

}
if(bgp.isTouching(mon3gp)){
   mon3gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+5;

}
if(bgp.isTouching(mon4gp)){
   mon4gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+8;

}
if(bgp.isTouching(mon5gp)){
   mon5gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+10;

}

if(mon1gp.isTouching(pl)){
  lives=lives-1
  console.log(lives)
  if(lives===2){
   pl2.destroy();
   mon1gp.get(0).destroy();
  }
  else if(lives===1){
     pl3.destroy();
     mon1gp.get(0).destroy();
  }
  else if(lives===0){
   pl4.destroy();
   mon1gp.get(0).destroy();
  }
  else{
     gamestate=0;
  }
}
   

   
   drawSprites();
   }

if(gamestate===0){
   text("GAME OVER",windowWidth/2-100,windowHeight/2);
}
   textSize(30);
    fill("pink");
    text("SCORE : "+score,windowWidth-300,50);
    text("LIVES : ",50,50);

}

function MON1(){
  if(frameCount%100===0){
   mon1 = createSprite(100,Math.round(random(100,windowHeight-300)));
   mon1.addImage(mon1img);
   mon1.scale=0.35;
   mon1.velocityX=5+score/8;
   mon1.lifetime=(395);
   mon1gp.add(mon1);
  } 

}
function MON2(){
   if(frameCount%300===0){
    mon2 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon2.addImage(mon2img);
    mon2.scale=0.40;
    mon2.velocityX=6+score/8;
    mon2.lifetime=(350);
    mon2gp.add(mon2);
   } 
 }
 function MON3(){
   if(frameCount%500===0){
    mon3 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon3.addImage(mon3img);
    mon3.scale=0.40;
    mon3.velocityX=7+score/8;
    mon3.lifetime=(300);
    mon3gp.add(mon3);
   } 
 }
 function MON5(){
   if(frameCount%1000===0){
    mon4 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon4.addImage(mon4img);
    mon4.scale=0.35;
    mon4.velocityX=9+score/8;
    mon4.lifetime=(200);
    mon4gp.add(mon4);
   } 
 }
 function MON4(){
   if(frameCount%800===0){
    mon5 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon5.addImage(mon5img);
    mon5.scale=0.40;
    mon5.velocityX=8+score/8;
    mon5.lifetime=(150);
    mon5gp.add(mon5);
   } 
 }

function Bul(){
   b=createSprite(pl.x-23,pl.y-75);
   b.addImage(bimg);
   b.velocityX=-6;
   b.scale=0.18
   b.lifetime=180;
   bgp.add(b);
}


