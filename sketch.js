var value = 0 ;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;

function preload() {
    
    myImage1 =  loadImage('./assets/citta1.png');
    myImage2 =  loadImage('./assets/citta2.png');
    myImage3 =  loadImage('./assets/citta3.png');
    myImage4 =  loadImage('./assets/citta4.png');
    myImage5 =  loadImage('./assets/citta5.png');
    myImage6 =  loadImage('./assets/citta6.png');
}



function setup() {
  createCanvas (windowWidth,windowHeight);
 
}

function draw() {


    if (value <= 10) { 
    background (212,69,62);
    image(myImage1,0,0,325,325);
    }
    
    if (value >= 10) { 
    background (212,69,62);
    image(myImage2,0,0,325,325);
    }
    
    if (value >= 50) { 
    background (181,60,53);
    image(myImage3,0,0,325,325);
    }
    
    if (value >= 90) { 
    background (135,45,40);
    image(myImage4,0,0,325,325);
    }
    
    if (value >= 130) { 
    background (92,31,27);
    image(myImage5,0,0,325,325);
    }
    
    if (value >= 160) { 
    background (46,15,14);
    image(myImage6,0,0,325,325);
    }
}


//device mod
function deviceShaken() {
    value++;
}






//<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">