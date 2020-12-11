function setup() {
  createCanvas(600, 600);
}

function forrest() {
  //the color of the leaves on the trees (green)
  let leaf = color(125, 209, 117);
  //another color for the leaves (orange)
  let leaf2 = color(252, 208, 73)
  //another color for the leaves (red)
  let leaf3 = color(171, 7, 62)
  //another color for the leaves (green) (different shade)
  let leaf4 = color(73, 171, 7)
  //another color for the leaves (green) (different shade)
  let leaf5 = color(42, 105, 0)
  let leaf6 = color(19, 73, 128)
  //color of the trunk for the trees
let trunk = color(161, 111, 84);

  //the color of the clouds
  let coo = color(255,255,255)

// color of the sky
  background(121, 192, 252);


 tree(20,305,110, 80,trunk,leaf);
  tree(110,310,110, 60,trunk,leaf2);
  tree(200,330,110, 20,trunk,leaf4);
  tree(290,360,110, 200,trunk,leaf);
  tree(380,320,110, 80,trunk,leaf3);
  tree(470,290,110, 80,trunk,leaf6);
  tree(560,335,110, 80,trunk,leaf5);




  fill(119, 214, 92);
  //rectangle representing grass
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

}

function cloud(x,y,somecolor) {
  strokeWeight(0)
  ellipse(x,y,40)
  ellipse(x-20, y, 30)
  ellipse(x+20, y, 30)
  ellipse(x-30, y, 20)
  ellipse(x+30, y,20)
}
//function for the tree
function tree(x,y,shape, size, colorp, colore){

  //this is the color for the trunks
  fill(colorp);
  //placement of the trunks for the trees
  rect(x+9,y+35,width/15,height/2);


  strokeWeight(0)
  //this is to make the
  //color of the leaves of the trees
  fill(colore)

  //tirangles that make up the leaf portion of the trees
triangle(x-20, y-20, x+30, y-90, x+70, y-20)
  triangle(x-20, y+10, x+30, y-90, x+70, y+10)
  triangle(x-20, y+40, x+30, y-90, x+70, y+40 )
}
