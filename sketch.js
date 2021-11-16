let input, button, greeting, gif;
//do the snow gif
//add music (soundcloud api?, )

var width;
var height;

function setup() {

  width = windowWidth;
  height = windowHeight;
  
  createCanvas(width, height);

  input = createInput();
  input.size(100, 20);
  input.position(width/2 - 50, height/2);

  button = createButton('talk');
  button.position(input.x + input.width, height/2)

  //background();
}

// gonna do responds


function draw() {
  //sn.fall();
  
  let xAxis = float.random(0, width);
  ellipse(50, 50, 50, 50);
  let yAxis = float.random(-25, -5);
  let mass = float.random(2, 15); // this is gonna determine how big the snowflake is
  //and which will also determine how fast it will fall
  let speed = 15 + mass;
  let direction = random([-0.3, 0.3]); // snowflakes will either fall right way or left way slanted

  
  let sn = new Snowflake(xAxis, yAxis, mass, speed, direction);
  sn.fall;
  

}




class Snowflake{
  constructor(x, y, m, s, d){
    this.xAxis = x;
    this.yAxis = y;
    this.mass = m;
    this.speed = s;
    this.direction = d;
  }

  fall(){
    ellipse(50, 50, 50, 50);
  }
}


//talking stuff
function talking(){
  button.mouseClicked.Pressed(talking);

  stuff = input.value();
  input.value('');
}

function respond(){

}


