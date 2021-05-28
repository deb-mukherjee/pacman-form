var start=0,play=1,end=2,win=3,restart=4;
var gameState=start;
var L1,L2;
var levels;
var l1=0,l2=1;
function setup() {
  createCanvas(displayWidth+150,displayHeight-20);
  
}

function draw() {
  background(255,255,255); 
  if(gameState===start){
    var heading = createElement("h1")
    heading.position(700,200)
    heading.html("Welcome!")

    var startButton = createButton("PLAY")
    startButton.position(displayWidth/2,displayHeight/2)
    startButton.style('background-color', "yellow");


    startButton.mousePressed(()=>{
      removeElements();
      frameCount=0;
      setup();
      gameState=restart;
    })
  }
  if(gameState===restart){
    var heading = createElement("h1")
    heading.position(700,200)
    heading.html("Levels")
    drawSprites();

    fill("white")

    L1=createSprite(400,400,200,150)
    L1.shapeColor="blue";
    text("level 1",400,600);


    L2=createSprite(1200,400,200,150)
    L2.shapeColor="red"
    text("level 2",600,400);
    
    if(mousePressedOver(L1)){
      levels=l1;
      removeElements();
      frameCount=0;
      setup();
      gameState=play;
    }
    if(mousePressedOver(L2)){
      levels=l2;
      removeElements();
      frameCount=0;
      setup();
      gameState=play;
    }
  }
  if(gameState===play){
    if(levels===l1){
      L1.visible=false;
      L2.visible=false;
      background("yellow")
      //call the function for level 1
    }
    if(levels===l2){
      L1.visible=false;
      L2.visible=false;
      background("green")
      //call the function for level 2
    }
      drawSprites();
  }
 
}