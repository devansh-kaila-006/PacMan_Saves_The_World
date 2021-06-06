var pacman;
var a,b,c,d,e;
var w1,w2,w3,w4;
var b1,b2,b3,b4;
var c1,c2,c3,c4;
var d1,d2,d3,d4;
var e1,e2,e3,e4;
var f1,f2,f3,f4,f5;
var enemy1,enemy2,enemy3,enemy4;

function preload(){

a = loadAnimation('a.png');
b = loadAnimation('a.png','b.png','c.png');
c = loadAnimation('a.png','f.png','g.png');
d = loadAnimation('a.png','d.png','e.png');
e = loadAnimation('a.png','h.png','i.png');


}

function setup(){
  
 createCanvas(displayWidth, displayHeight-113);
 console.log(displayWidth, displayHeight-113);

 pacman = createSprite(200, 380, 20, 20);
 pacman.addAnimation("#pacman",a);
}

function draw(){
   background(0);
  
  pacman.setCollider('rectangle',0,0,25,25);
  pacman.debug = true;
   
   
 
   w1 = createSprite(1520,375,10,720);
   w2 = createSprite(16,375,10,720);
   w3 = createSprite(768,16,1514,10);
   w4 = createSprite(768,740,1514,10);
   
   b1 = createSprite(210,56,300,10);
   b2 = createSprite(210,356,300,10);
   b3 = createSprite(65,176,10,250);
   b4 = createSprite(365,206,10,310);

   c1 = createSprite(210,402,300,10);
   c2 = createSprite(210,702,300,10);
   c3 = createSprite(65,576,10,250);
   c4 = createSprite(365,552,10,310);

   d1 = createSprite(1320,56,300,10);
   d2 = createSprite(1320,356,300,10);
   d3 = createSprite(1475,176,10,250);
   d4 = createSprite(1175,206,10,310);

   e1 = createSprite(1320,402,300,10);
   e2 = createSprite(1320,702,300,10);
   e3 = createSprite(1475,576,10,250);
   e4 = createSprite(1175,552,10,310);

   f1 = createSprite(750,430,200,10);
   f2 = createSprite(650,385,10,100);
   f3 = createSprite(850,385,10,100);
   f4 = createSprite(682,300,75,10);
   f5 = createSprite(818,300,75,10);
   
 //  noFill();
 //  stroke('purple');
   //rect(400,50,100,50);
  
   keyPressed();

   drawSprites();
}

function keyPressed(){

   if (keyDown("up")) {
      pacman.velocityX=0;
      pacman.velocityY=-6;
      pacman.addAnimation("#pacman",e);
    }
    
     if (keyDown("down")) {
      pacman.velocityX=0;
      pacman.velocityY=6;
      pacman.addAnimation("#pacman",d);
    }
    
     if (keyDown("RIGHT")) {
      pacman.velocityX=6;
      pacman.velocityY=0;
      pacman.addAnimation("#pacman",b);
    }
    
     if (keyDown("LEFT")) {
      pacman.velocityX=-6;
      pacman.velocityY=0;
      pacman.addAnimation("#pacman",c);
    } 
    
    if (keyDown(" ")) {
      pacman.velocityX=0;
      pacman.velocityY=0;
      pacman.addAnimation("#pacman",a);
    }

}


