let input, button, greeting, gif;
//do the snow gif
//add music (soundcloud api?, )

var width;
var height;

function setup() {
  sn = new Snowflake;

  width = windowWidth;
  height = windowHeight;
  
  createCanvas(width, height);

  input = createInput();
  input.size(100, 20);
  input.position(width/2 - 50, height/2);

  button = createButton('talk');
  button.position(input.x + input.width, height/2)
  ellipse(50, 50, 50, 50);

  background();
}

// gonna do responds


function draw() {
  //sn.fall();
  
}

const Snowflake = {

  xAxis = float.random(0, width),
  yAxis = float.random(-25, -5),
  mass = float.random(2, 15), // this is gonna determine how big the snowflake is
  //and which will also determine how fast it will fall
  speed = 15 + mas,
  direction = random([-0.3, 0.3]), // snowflakes will either fall right way or left way slanted

  fall : function(){
    //ellipse(xAxis + direction, yAxis - speed, mass, mass);
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


