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
var bulletSpeed = 6;                                                            // set speed of bullets
var shipImage = document.getElementById("spaceship");                           // gives the ship the image to reference so it knows how to look
var redBulletImage = document.getElementById("red-bullet");                     // gives the green bullets the image to reference

var bullets = [];                                                               // array so object creator makes objects *that can be indexed*

var ship = {                                                                    // creates the ship as an object
    height: 35,
    width: 30,
    xPos: (spacegamecanvas.width / 2) - 15,                                     // starting x-pos in the middle ("-15" because half the imgage width)
    yPos: spacegamecanvas.height - 80,                                          // starting y-pos is a bit higher than the bottom of the screen
    goUp: false,                                                                // defaults so that the ship isn't moving
    goDown: false,
    goLeft: false,
    goRight: false,
    firing: false,
    canShoot: true,
    move: function(){
        if(this.goUp && this.yPos > spacegamecanvas.height / 3){                // secondary condition to go up is that it's in the bottom third
            this.yPos -= shipySpeed;                                            // "-=" means "equals itself minus", moves the ship in the negative
        }                                                                       //     y-direction (up)
        if(this.goDown && this.yPos < spacegamecanvas.height - 40){
            this.yPos += shipySpeed;                                            // moves the ship in the positive y-direction (down)
        }
        if(this.goLeft && this.xPos > 5){
            this.xPos -= shipxSpeed;                                            // moves the ship in the negative x-direction (left)
        }
        if(this.goRight && this.xPos < spacegamecanvas.width - 35){
            this.xPos += shipxSpeed;                                            // moves the ship in the positive y-direction (right)
        }
    },
    shoot: function(){
        if(this.canShoot && this.firing){
            bullets.push(new Bullet(ship.xPos + ship.width / 2 - 1, ship.yPos - 19, 25, 2));
            this.canShoot = false;
            window.setTimeout(makeCanShootTrue, 250);
        }
    },
    draw: function(){
        ctx.drawImage(shipImage, this.xPos, this.yPos, this.width, this.height);
    }
};

function makeCanShootTrue(){
    ship.canShoot = true;
}

function Bullet(xPos, yPos, height, width){                                     // the object constructor for each bullet
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = height;
    this.width = width;
    this.draw = function(){
        // ctx.beginPath();                                                     // remember that to draw a new shape you need to ctx.beginPath();
        // ctx.rect(this.xPos, this.yPos, 10, 10);
        // ctx.stroke()                                                         // must add a stroke and/or fill to see rectangle bullets
        ctx.drawImage(redBulletImage, this.xPos, this.yPos, 2, 25);
    };
    this.isColliding = function(){
        if(this.yPos + this.height < enemy1.yPos || this.yPos > enemy1.yPos + enemy1.height ||
        this.xPos + this.width < enemy1.xPos || this.xPos > enemy1.xPos + enemy1.width){ // up down left right
            return false;
        }
    };
    this.move = function(){
        this.yPos -= bulletSpeed;
        if(this.yPos < -25){                                                    // 25 = bullet height
            return false;
        }
        return true;
    };
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
   if(evt.keyCode === 32){
        ship.firing = true;
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
   if(evt.keyCode === 32){
      ship.firing = false;
   }
});

var enemy1Image = document.getElementById("enemy1");
var enemy1 = {                                                                  // creates enemy type 1 as an object
    xPos: 200,
    yPos: 20,
    height: 19,
    width: 25,
    draw: function(){
        ctx.drawImage(enemy1Image, this.xPos - this.width / 2, this.yPos, this.width, this.height);
    }
};

function gameLoop(){
    ctx.beginPath();
    ctx.clearRect(0, 0, spacegamecanvas.width, spacegamecanvas.height);
    ship.move();
    ship.draw();
    ship.shoot();
    for (var i = 0; i < bullets.length; i++){                                   // "++" is the "increment operator". it adds 1; var "i" for "index"
        bullets[i].draw();
        if(!bullets[i].move()) bullets.splice(i, 1);
    }
    if(!Bullet.isColliding){
        enemy1.draw();
    }
    // else{
    //     ctx.clearRect(0, 0, spacegamecanvas.width, spacegamecanvas.height);
    // }
    window.requestAnimationFrame(gameLoop);
}

gameLoop();                                                                     // runs the game loop




/*
!isColliding
Up      2.yPos + 2.height < 1.yPos
Down    2.yPos > 1.yPos + 1.height
Left    2.xPos + 2.width < 1.xPos
Right   2.xPos > 1.xPos + 1.width

*/