var canvas = new fabric.Canvas('myCanvas');
var image = ["Coding 1.png","Coding 2.png","Coding 3.png","Coding 7.png","Coding 8.jpg","Coding 9.jpg","Coding 10.png","Coding 11.png","Coding 12.png"];
var imgNumber;

var planetObject = "";
var planetX;
var planetY;

function planet_update() {
    fabric.Image.fromURL(image[imgNumber], function (Img) {
        planetObject = Img;
        planetObject.scaleToWidth(50);
        planetObject.scaleToHeight(50);
        planetObject.set({
            top: planetY,
            left: planetX
        });
        canvas.add(planetObject);
    });
}

window.addEventListener("keydown", keydown);

function keydown(e) {
    pressed = e.keyCode

    if(pressed == 49){
        imgNumber = 0;
        planetX = 337;
        planetY = 441;
        planet_update();
    }
    if(pressed == 50){
        imgNumber = 1;
        planetX = 451;
        planetY = 228;
        planet_update();
    }
    if(pressed == 51){
        imgNumber = 2;
        planetX = 585;
        planetY = 319;
        planet_update();
    }
    if(pressed == 52){
        imgNumber = 3;
        planetX = 616;
        planetY = 427;
        planet_update();
    }
    if(pressed == 53){
        imgNumber = 4;
        planetX = 670;
        planetY = 240;
        planet_update();
    }
    if(pressed == 54){
        imgNumber = 5;
        planetX = 750;
        planetY = 301;
        planet_update();
    }
    if(pressed == 55){
        imgNumber = 6;
        planetX = 732;
        planetY = 129;
        planet_update();
    }
    if(pressed == 56){
        imgNumber = 7;
        planetX = 823;
        planetY = 474;
        planet_update();
    }
}