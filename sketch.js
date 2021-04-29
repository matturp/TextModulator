var gui;
var defineSize = 100;
var defineColor = '#FFFFFF';
var canvasColor = '#000000';
var waveAmount = 100;
var waveType = ['static','wave1','wave2','wave3'];
var write = 'write';
var fontSelect = ['roboto','bebas','cinzel', 'josefin', 'barcode'];
var rotationAmount = 0;
var outline = false;
var strokeAmount = 1;
var strokeAmountMin = 1;
var strokeAmountMax = 100;
var strokeAmountStep = 1;
var dynamicStroke = false;
var dynamicStrokeAmount = 100;
var oblique = 0;
var obliqueMin = -85
var obliqueMax = 85;
var obliqueStep = 5;
var dynamicOblique = false;
var dynamicObliqueAmount = 10;
var dynamicObliqueAmountMin = 0;
var dynamicObliqueAmountMax = 85;
var dynamicObliqueAmountStep = 5;


function preload(){
  roboto = loadFont('assets/RobotoMono-Bold.ttf');
  bebas = loadFont('assets/BebasNeue-Regular.ttf');
  cinzel = loadFont('assets/CinzelDecorative-Regular.ttf');
  josefin = loadFont('assets/JosefinSans-ExtraLightItalic.ttf');
  barcode = loadFont('assets/LibreBarcodeEAN13Text-Regular.ttf');
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  gui = createGui();
  sliderRange(0,1000,10);
  gui.addGlobals('defineColor','canvasColor', 'defineSize','waveAmount','waveType','write','fontSelect','rotationAmount','outline','strokeAmount','dynamicStroke','dynamicStrokeAmount','oblique','dynamicOblique','dynamicObliqueAmount');
  frameRate(60);


  
  //noLoop();


  
}

function draw() {
  background(canvasColor);
  fill(defineColor);
  textAlign(CENTER);

  push();
  textSize(10);
  noStroke();
  text('Press ENTER to save your sketch',windowWidth/2,windowHeight - 50);
  pop();

  textSize(defineSize);





  switch(waveType){

    case 'static':
      translate(windowWidth/2,windowHeight/2);
      break;

    case 'wave1':
      translate(windowWidth/2 + sin(radians(frameCount))*waveAmount,windowHeight/2);
		    break;

        case 'wave2':
          translate(windowWidth/2 + cos(radians(frameCount))*waveAmount,windowHeight/2);
          break;

          case 'wave3':
           translate(windowWidth/2 + tan(radians(frameCount))*waveAmount,windowHeight/2);
          break;
  }

  



   var fontStyle = [roboto, bebas, cinzel, josefin, barcode];
  //let randomStyle = random(fontStyle);
  var index;

  switch(fontSelect){

    case 'roboto':
      index = 0;
      break;

      case 'bebas':
        index = 1;
        break;

        case 'cinzel':
          index = 2;
          break;

          case 'josefin':
            index = 3;
            break;

            case 'barcode':
              index = 4;
              break;


  }
  

  rotate(radians(frameCount*rotationAmount));
  
  if (outline == false){

  fill(defineColor);
 
  } else {

  noFill();
  
  }



  stroke(defineColor);
  strokeWeight(strokeAmount);

  shearX(radians(oblique));

  if (dynamicStroke == true){

    strokeAmount = (sin(radians(frameCount)) * dynamicStrokeAmount);
    
  }

  if (dynamicOblique == true){

    oblique = (sin(radians(frameCount)) * dynamicObliqueAmount);
    
  }

  textFont(fontStyle[index]);
  text(write,0,0);


}

function keyPressed(){

  if (keyCode === ENTER) {
    save('sketch.png');
  }
}




