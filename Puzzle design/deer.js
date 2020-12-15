
let me;
let deer;

function preload() {
  deer = loadImage('deer.png');
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawdeer(){  // draw the running person
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if(KeyIsDown(LEFT_ARROW)){
      this.x += this.speed
    }
    if(KeyIsDown(RIGHT_ARROW)){
      this.x += this.speed
    }
	}
 }
}
