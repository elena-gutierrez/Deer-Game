
let me;
let deer;

function preload() {
  deer = loadImage('capture.png');
}

function setup() {
  createCanvas(600, 600);
  loadImage('capture.png');
    me = new Avatar(width/2, 300, 3);
}

function draw() {
  background("white");
  forrest ()
  keys()
  me.drawdeer();
  me.moveMe();
  }


  function forrest() {
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
    let s = 'You have been separated from your fellow deer! Where are you? Find keys to find your way back!';
  fill(50);
  text(s, 220, 100, 200, 100); // Text wraps within text box
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
  fill('yellow')
  strokeWeight(2)
ellipse(450, 550, 35, 45);
  fill('white')
ellipse(450,550,15,25)
  fill('yellow')
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
    image(deer,this.x,this.y)
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
 }
