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

var shipxSpeed = 5;                                                             // set the ship x-speed
var shipySpeed = 4;                                                             // set the ship y-speed
var bulletSpeed = 6;                                                            // set speed of bullets
var shipImage = document.getElementById("spaceship");                           // gives the ship the image to reference so it knows how to look
var redBulletImage = document.getElementById("red-bullet");                     // gives the green bullets the image to reference

var bullets = [];                                                               // bullet array

var ship = {                                                                    // creates the ship as an object
    height: 35,                                                                 // set ship size
    width: 30,
    xPos: (spacegamecanvas.width / 2) - 15,                                     // starting x-pos in the middle ("-15" because half the imgage width)
    yPos: spacegamecanvas.height - 80,                                          // starting y-pos is a bit higher than the bottom of the screen
    goUp: false,                                                                // defaults so that the ship isn't moving or shooting
    goDown: false,
    goLeft: false,
    goRight: false,
    firing: false,
    canShoot: true,                                                             // able to shoot by default
    move: function() {
        if (this.goUp && this.yPos > spacegamecanvas.height / 2) {              // secondary condition to go up is that it's in the bottom half,
            this.yPos -= shipySpeed;                                            // moves the ship in the negative y-direction (up)
        }
        if (this.goDown && this.yPos < spacegamecanvas.height - 40) {
            this.yPos += shipySpeed;                                            // moves the ship in the positive y-direction (down)
        }
        if (this.goLeft && this.xPos > 5) {
            this.xPos -= shipxSpeed;                                            // moves the ship in the negative x-direction (left)
        }
        if (this.goRight && this.xPos < spacegamecanvas.width - 35) {
            this.xPos += shipxSpeed;                                            // moves the ship in the positive y-direction (right)
        }
    },
    shoot: function() {
        if (this.canShoot && this.firing) {
            bullets.push(new Bullet(ship.xPos + ship.width / 2 - 1, ship.yPos - 19, 25, 2)); //pushes bullet to arrayy at ship's location
            this.canShoot = false;                                              // fire rate cap, temporarily deactivates ability to shoot...
            window.setTimeout(function() {
                ship.canShoot = true;                                           // ...then reactivates ability 
            }, 250);                                                            // caps at one shot every 250 milliseconds
        }
    },
    draw: function() {                                                          // fuction to draw the ship
        ctx.drawImage(shipImage, this.xPos, this.yPos, this.width, this.height);
    }
};

function Bullet(xPos, yPos, height, width) {                                    // the object constructor for each bullet
    this.xPos = xPos;                                                           // defaults the values for each bullet
    this.yPos = yPos;
    this.height = height;
    this.width = width;
    this.draw = function() {
        ctx.drawImage(redBulletImage, this.xPos, this.yPos, 2, 25);             // draws the bullet at the approprate location
    };
    this.move = function() {
        this.yPos -= bulletSpeed;                                               // moves the bullets up the screen by the bulletSpeed amount
        if (this.yPos < -25) {                                                  // 25 = bullet height
            return false;                                                       // "return false" will be used to detect if bullet is off screen
        }
        return true;                                                            // function only returns false if it satisfies "if conditions". for
    };                                                                          //     everything else, it has to know that it should return true
}

document.addEventListener("keydown", function(evt) {
   if (evt.keyCode === 38) {                                                    // key codes correspond to arrow keys
       ship.goUp = true;
   }
   if (evt.keyCode === 40) {
       ship.goDown = true;
   }
   if (evt.keyCode === 37) {
       ship.goLeft = true;
   }
   if (evt.keyCode === 39) {
       ship.goRight = true;
   }
   if (evt.keyCode === 32) {
        ship.firing = true;
   }
});

document.addEventListener("keyup", function(evt) {                              // ship doesn't move when arrow keys are not pressed
   if (evt.keyCode === 38) {
       ship.goUp = false;
   }
   if (evt.keyCode === 40) {
       ship.goDown = false;
   }
   if (evt.keyCode === 37) {
       ship.goLeft = false;
   }
   if (evt.keyCode === 39) {
       ship.goRight = false;
   }
   if (evt.keyCode === 32) {
      ship.firing = false;
   }
});

var enemyImage = document.getElementById("enemy");
var enemy = {                                                                   // creates enemy as an object
    height: 19,                                                                 // defaults the size of enemy
    width: 25,
    xPos: (spacegamecanvas.width / 2) - (this.width / 2),                       // defaults the position of the enemy in the centre
    yPos: 20,
    draw: function() {                                                          // draws the enemy at the approprate location
        ctx.drawImage(enemyImage, this.xPos - this.width / 2, this.yPos, this.width, this.height);
    }
};

var enemyHP = {
    health: 100,                                                                // enemy starts out with 100HP
    draw: function() {
        ctx.beginPath();
        ctx.rect(15, 10, (this.health * 0.01) * (spacegamecanvas.width - 30), 3);// draws the HP bar at the appropriate width
        ctx.fillStyle = "rgba(50, 255, 50, 0.75)";                              // colours the HP bar green
        ctx.fill();
    }
};

function detectWin() {                                                          // function detects if the enemy is dead (HP = 0)
    if (enemyHP.health <= 0) {
        ctx.beginPath();
        ctx.rect(0, 0, spacegamecanvas.width, spacegamecanvas.height);          // if enemy is dead, screen slightly fades to white, displays
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";                            //     "you win" message
        ctx.fill();
        ctx.font = "25px 'Press Start 2P'";
        ctx.fillStyle = "#44ff44";
        ctx.stokeStyle = "#111111";
        ctx.textAlign = "center";
        ctx.fillText("yay! you win!", spacegamecanvas.width/2, spacegamecanvas.height/2);
        ctx.strokeText("yay! you win!", spacegamecanvas.width/2, spacegamecanvas.height/2); 
    }
}

var enemymove = 0;                                                              // creates the enemy movement; starts at zero, increases by gameLoop

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, spacegamecanvas.width, spacegamecanvas.height);         // clears the canvas
    ship.move();                                                                // moves the spaceship
    ship.draw();                                                                // draws the spaceship
    ship.shoot();                                                               // detects if ship is shooting, fires bullet if needed
    for (var i = 0; i < bullets.length; i++) {                                  // "++" is the "increment operator". it adds 1; var "i" for "index"
        bullets[i].draw();                                                      // puts the bullets on the screen
        if (!bullets[i].move() && bullets.length > 0) {                         // only run if there are bullets in the array; otherwise game crashes
            bullets.splice(i, 1);                                               // takes bullets out of the array if off screen
        }
        if (bullets.length > 0) {                                               // only run if there are bullets in the array; otherwise game crashes
            if (!(bullets[i].yPos + bullets[i].height < enemy.yPos ||           // up
            bullets[i].yPos > enemy.yPos + enemy.height ||                      // down                 if bullet is not above, below, left of, or
            bullets[i].xPos + bullets[i].width < enemy.xPos ||                  // left                 right of enemy, then they are colliding
            bullets[i].xPos > enemy.xPos + enemy.width)) {                      // right
                bullets.splice(i, 1);                                           // bullet despawns if it hits the enemy
                if (enemyHP.health > 0) {                                       // "if HP > 0"prevents HP bar from drawing in the negative direction
                    enemyHP.health -= 2;                                        // enemy loses HP when hit
                }
            }
        }
    }
    enemymove++;                                                                // increases the variable mentioned right before the gameLoop

    enemy.xPos = (-(((spacegamecanvas.width - 50) - 50) / 2) * (Math.sin((6.28318530718 / 400) * enemymove))) + (spacegamecanvas.width / 2);
    enemy.yPos = (-((20 - (spacegamecanvas.height / 3)) / 2) * (Math.sin((6.28318530718 / 200) * enemymove))) + 100;
    // these equations are basic sin equatons (precal classes are finally paying off lol). they're in the y=A(B(x-C))+D form. both the x and y
    // direction fluctuate back and forth, creating the figure-8 movement. i made sure the enemy and spaceship x-speeds were different. that way,
    // it's harder to shoot the enemy ship

    enemy.draw();                                                               // draws the enemy
    enemyHP.draw();                                                             // draws the enemy HP bar

    detectWin();                                                                // calls the fuction that detects if the enemy is dead
    window.requestAnimationFrame(gameLoop);                                     // loops the gameLoop
}

gameLoop();                                                                     // runs the gameLoop




/*
notes on collision detection

!isColliding
Up      2.yPos + 2.height < 1.yPos
Down    2.yPos            > 1.yPos + 1.height
Left    2.xPos + 2.width  < 1.xPos
Right   2.xPos            > 1.xPos + 1.width

*/