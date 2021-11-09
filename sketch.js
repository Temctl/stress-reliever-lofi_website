let input, button, greeting, gif;

function preload(){
  gif = loadImage('rainy(1).gif');
}

function setup() {
  var width = windowWidth;
  var height = windowHeight;

  createCanvas(width, height);

  input = createInput();
  input.position(width/2, height/2);

  button = createButton('talk');
  button.position(input.x + input.width, height/2)
}

function talking(){
  button.mouseClicked.Pressed(talking);

  stuff = input.value();
  input.value('');
}

function respond(){

}

function draw() {
  background(220);
  image(gif, 0, 0);
  gif.play();
}
