
let me;
let deer;
let wolf;
var stage;
var song;
particles1 = [];
particles2 = [];
function preload() {
  deer = loadImage('capture.png');
    song= loadSound("music.mp3");
    wolf= loadImage('wolf.png');
}

function setup() {
  createCanvas(600, 600);


stage=1;
  loadImage('capture.png');
  loadImage('wolf.png');
    me = new Avatar(width/2, 500, 3);

}

function draw() {

  if (stage == 1) {
    stageone();
    me.getKey();
    me.drawdeer();
    me.moveMe();
      keys()
    } else if (stage==2) {
    stagetwo();
    me.drawdeer();
    me.moveMe();
    } else if (stage==3) {
    stagethree();
    me.getKeypt2();
    me.drawdeer();
    me.moveMe();
    } else if (stage==4){
    stagefour();
    me.drawdeer();
    me.moveMe();
  }else if (stage==5){
    stagefive();
    me.drawdeer();
    me.moveMe();
    wolf();
  }
  }


  function stageone() {
    let leaf = color(125, 209, 117);
    let leaf2 = color(252, 208, 73)
    let leaf3 = color(171, 7, 62)
    let leaf4 = color(73, 171, 7)
    let leaf5 = color(42, 105, 0)
    let leaf6 = color(19, 73, 128)
  let trunk = color(161, 111, 84);
    let coo = color(255,255,255)
    background(121, 192, 252);
   tree(20,305,110, 80,trunk,leaf);
    tree(110,310,110, 60,trunk,leaf2);
    tree(200,330,110, 20,trunk,leaf4);
    tree(290,360,110, 200,trunk,leaf);
    tree(380,320,110, 80,trunk,leaf3);
    tree(470,290,110, 80,trunk,leaf6);
    tree(560,335,110, 80,trunk,leaf5);
    fill(119, 214, 92);
    rect(0,570,600,30);
    fill(0, 187, 250)
    rect(200,570,300,30);
    fill(255, 255, 255);
    cloud(30,40,"ye;;lo")
    cloud(100,80,coo)
    cloud(170,40,coo)
    cloud(240,80,coo)
    cloud(310,40,coo)
    cloud(380, 80,coo)
    cloud(450,40,coo)
    cloud(520,80,coo)
    cloud(590, 40, coo)
    textFont('Tahoma')
    textSize(30)
    let s = 'YOU HAVE BEEN SEPARATED FROM YOUR FELLOW DEER! WHERE ARE YOU? FIND KEYS TO FIND YOUR WAY BACK!';
  fill('white');
  text(s, 50, 100, 500, 500); // Text wraps within text box

  }
  function wolf(){
    image(wolf, 100,100)
  }
  function cloud(x,y,somecolor) {
    strokeWeight(0)
    ellipse(x,y,40)
    ellipse(x-20, y, 30)
    ellipse(x+20, y, 30)
    ellipse(x-30, y, 20)
    ellipse(x+30, y,20)
  }

  function tree(x,y,shape, size, colorp, colore){
    fill(colorp);
    rect(x+9,y+35,width/15,height/2);
    strokeWeight(0)
    fill(colore)
  triangle(x-20, y-20, x+30, y-90, x+70, y-20)
    triangle(x-20, y+10, x+30, y-90, x+70, y+10)
    triangle(x-20, y+40, x+30, y-90, x+70, y+40 )
  }

function keys(){
  noStroke()
  fill(237, 229, 0)
  strokeWeight(2)
ellipse(450, 550, 35, 45);
  fill(121, 192, 252)
ellipse(450,550,15,25)
  fill(237, 229, 0)
  rect(465, 540, 75, 15)
  rect(480, 555, 15, 25)
  rect(510, 555, 15, 25)
}

class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawdeer(){
    image(deer,this.x,this.y,100,100)
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.speed
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x += this.speed
    }
	}
  getKey() {
    if(this.x >= 400
      && this.x <= 600
      && this.y >= 300
      && this.y <= 600) {

      stage = 2;
    }
  }

getKeypt2(){
if(this.x>= 0
&& this.x<= 100
&& this.y <=500
&& this.y <=600){

  stage=5
}
}
 }
 class Particle1 {

  constructor() {
    this.x = 580;
    this.y = 340;
    this.vx = random(-1, 1);
    this.vy = random(5, 1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }



  show() {
    noStroke();
    //stroke(255);
    fill(204,255,255, this.alpha);
    ellipse(this.x, this.y,10);
  }

 //2



}

 function stagetwo(){
   let leaf = color(48, 74, 47);
   let leaf2 = color(179, 16, 49)
   let leaf3 = color(236, 184, 245)
   let leaf4 = color(252, 208, 732)
   let leaf5 = color(128, 255, 147)
   let leaf6 = color(174, 230, 46)
 let trunk = color(161, 111, 84);
   let coo = color(255,255,255)
   background(121, 192, 252);
  tree(20,305,110, 80,trunk,leaf);
   tree(110,310,110, 60,trunk,leaf2);
   tree(200,330,110, 20,trunk,leaf4);
   tree(290,360,110, 200,trunk,leaf);
   tree(380,320,110, 80,trunk,leaf3);
   tree(470,290,110, 80,trunk,leaf6);
   tree(560,335,110, 80,trunk,leaf5);
   fill(119, 214, 92);
   rect(0,570,600,30);
   fill(0, 187, 250)
   rect(200,570,300,30);
   fill(255, 255, 255);
   cloud(30,40,"ye;;lo")
   cloud(100,80,coo)
   cloud(170,40,coo)
   cloud(240,80,coo)
   cloud(310,40,coo)
   cloud(380, 80,coo)
   cloud(450,40,coo)
   cloud(520,80,coo)
   cloud(590, 40, coo)
   textSize(30);
   fill('white');
   textFont('Tahoma')
   text("YOU SEE A FAMILIAR WATERFALL AHEAD!",20,150)
   text("DO YOU...",220,200)
   fill('black')
   textSize(14);
   text("SEE WHAT'S BEHIND THE WATERFALL",10,400)
   text("(PRESS 3)",110,450)
   text("(PRESS 4)",400,450)
   text("TURN BACK AND WAIT FOR YOUR FELLOW DEER",280,400)
   for (let i = 0; i < 5; i++) {
    let p = new Particle1();
    particles1.push(p);
  }
  for (let i = particles1.length - 1; i >= 0; i--) {
    particles1[i].update();
    particles1[i].show();
    if (particles1[i].finished()) {
      // remove this particle
      particles1.splice(i, 1);
    }


  }

 }

 function stagethree(){
   let leaf = color(125, 209, 117);
   let leaf2 = color(252, 208, 73)
   let leaf3 = color(171, 7, 62)
   let leaf4 = color(73, 171, 7)
   let leaf5 = color(174, 230, 46)
   let leaf6 = color(190, 73, 128)
 let trunk = color(161, 111, 84);
   let coo = color(255,255,255)
   background(121, 192, 252);
  tree(20,305,110, 80,trunk,leaf);
   tree(110,310,110, 60,trunk,leaf2);
   tree(200,330,110, 20,trunk,leaf4);
   tree(290,360,110, 200,trunk,leaf);
   tree(380,320,110, 80,trunk,leaf3);
   tree(470,290,110, 80,trunk,leaf6);
   tree(560,335,110, 80,trunk,leaf5);
   fill(119, 214, 92);
   rect(0,570,600,30);
   fill(0, 187, 250)
   rect(200,570,300,30);
   fill(255, 255, 255);
   cloud(30,40,"ye;;lo")
   cloud(100,80,coo)
   cloud(170,40,coo)
   cloud(240,80,coo)
   cloud(310,40,coo)
   cloud(380, 80,coo)
   cloud(450,40,coo)
   cloud(520,80,coo)
   cloud(590, 40, coo)
   noStroke()
   fill(237, 229, 0)
   strokeWeight(2)
 ellipse(50, 550, 35, 45);
   fill(121, 192, 252)
 ellipse(50,550,15,25)
   fill(237, 229, 0)
   rect(65, 540, 75, 15)
   rect(80, 555, 15, 25)
   rect(100, 555, 15, 25)
   fill('white')
   textFont('Tahoma')
   textSize(30)
   text("LOOK! A KEY BEHIND THE WATERFALL!",30,200)
 }

 function stagefour(){
   let leaf = color(97, 191, 38);
   let leaf2 = color(97, 191, 38)
   let leaf3 = color(223, 227, 107)
   let leaf4 = color(222, 27, 92)
   let leaf5 = color(7, 99, 145)
   let leaf6 = color(223, 227, 107)
 let trunk = color(161, 111, 84);
   let coo = color(255,255,255)
   background(0, 12, 74);
  tree(20,305,110, 80,trunk,leaf);
   tree(110,310,110, 60,trunk,leaf2);
   tree(200,330,110, 20,trunk,leaf4);
   tree(290,360,110, 200,trunk,leaf);
   tree(380,320,110, 80,trunk,leaf3);
   tree(470,290,110, 80,trunk,leaf6);
   tree(560,335,110, 80,trunk,leaf5);
   fill(119, 214, 92);
   rect(0,570,600,30);
   fill(0, 187, 250)
   rect(200,570,300,30);
   fill(255, 255, 255);
   cloud(30,40,"ye;;lo")
   cloud(100,80,coo)
   cloud(170,40,coo)
   cloud(240,80,coo)
   cloud(310,40,coo)
   cloud(380, 80,coo)
   cloud(450,40,coo)
   cloud(520,80,coo)
   cloud(590, 40, coo)
   textFont('Tahoma')
   textSize(29.5)
   fill('white')
   text("THEY NEVER CAME! PRESS 1 TO TRY AGAIN.",1,150)
   textSize(50)
   text("GAME OVER...",150,200)
 }
function stagefive(){
  let leaf = color(38, 101, 97);
  let leaf2 = color(38, 101, 97)
  let leaf3 = color(200, 165, 43)
  let leaf4 = color(55, 107, 205)
  let leaf5 = color(222, 111, 101)
  let leaf6 = color(12, 56, 107)
let trunk = color(161, 111, 84);
  let coo = color(255,255,255)
  background(121,192,252);
 tree(20,305,110, 80,trunk,leaf);
  tree(110,310,110, 60,trunk,leaf2);
  tree(200,330,110, 20,trunk,leaf4);
  tree(290,360,110, 200,trunk,leaf);
  tree(380,320,110, 80,trunk,leaf3);
  tree(470,290,110, 80,trunk,leaf6);
  tree(560,335,110, 80,trunk,leaf5);
  fill(119, 214, 92);
  rect(0,570,600,30);
  fill(0, 187, 250)
  rect(200,570,300,30);
  fill(255, 255, 255);
  cloud(30,40,"ye;;lo")
  cloud(100,80,coo)
  cloud(170,40,coo)
  cloud(240,80,coo)
  cloud(310,40,coo)
  cloud(380, 80,coo)
  cloud(450,40,coo)
  cloud(520,80,coo)
  cloud(590, 40, coo)
  noStroke()
  fill(237, 229, 0)
  strokeWeight(2)
ellipse(450, 550, 35, 45);
  fill(121, 192, 252)
ellipse(450,550,15,25)
  fill(237, 229, 0)
  rect(465, 540, 75, 15)
  rect(480, 555, 15, 25)
  rect(510, 555, 15, 25)
  textFont('Tahoma')
  textSize(30)
  fill('white')
  text("ESCAPE THE WOLF AND GET THE KEY!",30,150)

}
function stagesix(){
  let leaf = color(120, 143, 126);
  let leaf2 = color(140, 143, 120)
  let leaf3 = color(156, 129, 134)
  let leaf4 = color(133, 134, 148)
  let leaf5 = color(158, 149, 134)
  let leaf6 = color(111, 135, 131)
let trunk = color(105, 73, 55);
  let coo = color(179, 179, 179)
  background(54, 85, 112);
 tree(20,305,110, 80,trunk,leaf);
  tree(110,310,110, 60,trunk,leaf2);
  tree(200,330,110, 20,trunk,leaf4);
  tree(290,360,110, 200,trunk,leaf);
  tree(380,320,110, 80,trunk,leaf3);
  tree(470,290,110, 80,trunk,leaf6);
  tree(560,335,110, 80,trunk,leaf5);
  fill(65, 117, 50);
  rect(0,570,600,30);
  fill(1, 96, 128)
  rect(200,570,300,30);
  fill(255, 255, 255);
  cloud(30,40,"ye;;lo")
  cloud(100,80,coo)
  cloud(170,40,coo)
  cloud(240,80,coo)
  cloud(310,40,coo)
  cloud(380, 80,coo)
  cloud(450,40,coo)
  cloud(520,80,coo)
  cloud(590, 40, coo)
  textFont('Tahoma')
  textSize(29.5)
  fill('red')
  text("YOU WERE EATEN BY THE WOLF.",1,150)
  textSize(50)
  text("GAME OVER...",150,200)
}
function stageseven(){
  let leaf = color(125, 209, 117);
  let leaf2 = color(252, 208, 73)
  let leaf3 = color(171, 7, 62)
  let leaf4 = color(73, 171, 7)
  let leaf5 = color(174, 230, 46)
  let leaf6 = color(190, 73, 128)
let trunk = color(161, 111, 84);
  let coo = color(255,255,255)
  background(121, 192, 252);
 tree(20,305,110, 80,trunk,leaf);
  tree(110,310,110, 60,trunk,leaf2);
  tree(200,330,110, 20,trunk,leaf4);
  tree(290,360,110, 200,trunk,leaf);
  tree(380,320,110, 80,trunk,leaf3);
  tree(470,290,110, 80,trunk,leaf6);
  tree(560,335,110, 80,trunk,leaf5);
  fill(119, 214, 92);
  rect(0,570,600,30);
  fill(0, 187, 250)
  rect(200,570,300,30);
  fill(255, 255, 255);
  cloud(30,40,"ye;;lo")
  cloud(100,80,coo)
  cloud(170,40,coo)
  cloud(240,80,coo)
  cloud(310,40,coo)
  cloud(380, 80,coo)
  cloud(450,40,coo)
  cloud(520,80,coo)
  cloud(590, 40, coo)
  textFont('Tahoma')
  textSize(29.5)
  fill('white')
  text("YOU MADE IT BACK TO YOUR HERD!",1,150)
  textSize(50)
  text("THANKS FOR PLAYING :)",150,200)
}

 function keyPressed(){
   if (key == '1') {
    stage = 1;
  }else if (key == '3') {
    stage = 3;
  }else if (key == '4') {
    stage = 4;
  }
 }
