//  Document   : spaceshootergame.js, for cs-portfolio
//  Created on : Tuesday, Jaunary 12, 2016, 09:44 AM
//  Author     : Adrielo (Audrey) Bongalon
//  Description: space shooter game javascript file, for 10th grade computer science expeditions course


//                                      88
//                                      88
//                                      88
//    ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
//    ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
//    ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
//    88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
//    `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
//                                                                      d8'
//                                                                     d8'


var spacegamecanvas = document.getElementById("spacegamecanvas");               // gets the canvas from the html and gives it a variable name
var ctx = spacegamecanvas.getContext("2d");                                     // tells the canvas that we're dealing with stuff in only two
                                                                                // dimensions

var shipxSpeed = 6;                                                             // set the ship x-speed
var shipySpeed = 4;                                                             // set the ship y-speed

var shipimage = document.getElementById("spaceship");
var ship = {                                                                    // creates the ship as an object
    xPos: (spacegamecanvas.width / 2) - 15,                                                                   // sets the starting x-position
    yPos: spacegamecanvas.height - 80,                                                                   // ditto y-pos
    goUp: false,                                                                // defaults so that the ship isn't moving
    goDown: false,
    goLeft: false,
    goRight: false,
    move: function(){
        if(ship.goUp && ship.yPos > 5){                                         // secondary condition to move up is that it is not 5px from the edge
            ship.yPos -= shipySpeed;                                            // "-=" means "equals itself minus", moves the ship in the negative
        }                                                                       //     y-direction (up)
        if(ship.goDown && ship.yPos < spacegamecanvas.height - 40){
            ship.yPos += shipySpeed;                                            // moves the ship in the positive y-direction (down)
        }
        if(ship.goLeft && ship.xPos > 5){
            ship.xPos -= shipxSpeed;                                            // moves the ship in the negative x-direction (left)
        }
        if(ship.goRight && ship.yPos < spacegamecanvas.height - 35){
            ship.xPos += shipxSpeed;                                            // moves the ship in the positive y-direction (right)
        }
        console.log(ship.xPos);                                                 // logs the ship coordinates
        console.log(ship.yPos);
    },
    draw: function(){
        ctx.drawImage(shipimage, ship.xPos, ship.yPos, 30, 35);
    }
}

document.addEventListener("keydown", function(evt){
   if(evt.keyCode === 38){                                                      // key codes correspond to arrow keys
       ship.goUp = true;
   }
   if(evt.keyCode === 40){
       ship.goDown = true;
   }
   if(evt.keyCode === 37){
       ship.goLeft = true;
   }
   if(evt.keyCode === 39){
       ship.goRight = true;
   }
});

document.addEventListener("keyup", function(evt){
   if(evt.keyCode === 38){
       ship.goUp = false;
   }
   if(evt.keyCode === 40){
       ship.goDown = false;
   }
   if(evt.keyCode === 37){
       ship.goLeft = false;
   }
   if(evt.keyCode === 39){
       ship.goRight = false;
   }
});

function gameLoop(){
    ctx.beginPath();
    ctx.clearRect(0, 0, spacegamecanvas.width, spacegamecanvas.height);
    ship.move();
    ship.draw();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();                                                                     // runs the game loop


/*
notes for object constructors
var bullets = []

function Bullet(xPos, yPos){            captialise function for object creators
    this.xPos = xPos
    this.yPos = yPos
    this.draw = function(){
        aoeu
    }
}
bullets.push(new Bullet(40, 25)
*/