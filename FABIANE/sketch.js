let costas1;
let costas2;
let farra1;
let quieto;
let farra2;
let olhando;
let gameover;
let situacao="olhando";
let proximaAlteracao=0;
let giz;
let grito;
let estaBaguncando=false



function preload(){
  costas1=loadImage("costas1.jpg");
  costas2=loadImage("costas2.jpg");
  quieto=loadImage("quieto.jpg");
  farra1=loadImage("farra1.jpg");
  farra2=loadImage("farra2.jpg");
  gameover=loadImage("gameover.jpg");
  olhando=loadImage("olhando.jpg");
  
  grito=loadSound("grito.mp3");
 grito.setLoop(true);
  giz=loadSound("giz.mp3");
  giz.setLoop(true);
}



function setup() {
  createCanvas(1024,576);
}

function troca(){
  proximaAlteracao=millis()+random(2500,7000);
  if(situacao==="olhando"){
    situacao="nao olhando";
 giz.play();
  }
  else{situacao="olhando"
  giz.pause();    
      }
}

function draw() {
  if (millis()>proximaAlteracao){troca();}
 if (situacao === "olhando"){image(olhando,0,0);}
  else{let tempo=millis()%1000;
  image(costas1,0,0);
  if (tempo>500){
    image(costas2,0,0);}
  else{image(costas1,0,0);}}
  //console.log(millis())
  //image(costas2,0,0);
  //origem
  //imagem:onde X vai colocar, onde Y vai colocar
  //tamanho X tamanho Y onde foi colocado
  //a partir de X e a partir de Y da origem
  //tamanho X tamanho Y da orignal
  
  if (mouseIsPressed||touches.length>0||keyIsPressed){
  if(estaBaguncando === false){
   grito.play();
     estaBaguncando=true
  }
    
    if (situacao === "olhando"){
   image(gameover,0,0);}
  
    let tempo=millis()%1200;
  if(tempo>400){
image(farra1,50,420,100,160,180,100,450,720);}
   else{  
image(farra2,50,420,100,160,180,100,450,720);}
  
   tempo=millis()%1250;
  if(tempo>400){
image(farra1,150,420,100,160,180,100,450,720);}
  else{image(farra2,150,420,100,160,180,100,450,720);}
    
  tempo=millis()%1300;
  if(tempo>400){
image(farra1,250,420,100,160,180,100,450,720);}
  else{image(farra2,250,420,100,160,180,100,450,720);}
    
  if(situacao === "olhando"){textSize (64);
    fill("red")
  textAlign (CENTER, CENTER);
text("GAME OVER", width / 2, height / 2);
  giz.stop();
   grito.stop();
  noLoop()
  } 
  }
  
  else{grito.pause();
       estaBaguncando=false
  image(quieto,50,420,100,160,180,100,450,720);
  image(quieto,150,420,100,160,180,100,450,720);
  image(quieto,250,420,100,160,180,100,450,720);
}
}
