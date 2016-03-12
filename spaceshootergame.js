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

var shipxSpeed = 5;                                                             // sets the ship x-speed
var shipySpeed = 3;                                                             // sets the ship y-speed
var bulletSpeed = 15;                                                           // sets speed of bullets
var enemyBulletSpeed = 4;                                                       // sets speed of enemy bullets

var shipImage = document.getElementById("spaceship");                           // reference images, so they know how to look
var shipDamagedImage = document.getElementById("spaceship-damaged");
var enemyImage = document.getElementById("enemy");
var enemyDamagedImage = document.getElementById("enemy-damaged");
var explosion1 = document.getElementById("explosion1");
var explosion2 = document.getElementById("explosion2");

var redBulletImage = document.getElementById("red-bullet");
var greenBulletImage = document.getElementById("green-bullet");

var player = shipImage;                                                         // ships start out normal (not damaged)
var opponent = enemyImage;

var gameStarted = false;

var bullets = [];                                                               // bullet arrays, start out empty
var enemyBullets = [];

// PLAYER SHIP AND HEALTH
var ship = {                                                                    // creates the ship as an object
    height: 35,                                                                 // set ship size
    width: 30,
    xPos: (spacegamecanvas.width / 2) - 15,                                     // starting x-pos in the middle ("-15" because half the imgage width)
    yPos: spacegamecanvas.height - 80,                                          // starting y-pos is a bit higher than the bottom of the screen

    goUp: false,                                                                // defaults so that the ship isnt moving or shooting
    goDown: false,
    goLeft: false,
    goRight: false,
    firing: false,
    canShoot: true,                                                             // able to shoot by default
    hp: 100,                                                                    // starts out with 100HP

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
        ctx.drawImage(player, this.xPos, this.yPos, this.width, this.height);
    },
    drawHP: function() {
        ctx.beginPath();
        ctx.rect(15, spacegamecanvas.height - 13, (this.hp * 0.01) * (spacegamecanvas.width - 30), 3);// draws the HP bar, "13" = "10 + bar height"
        ctx.fillStyle = "rgba(255, 0, 0, 0.75)";                                // colours the HP bar red
        ctx.fill();
    }
};

// BULLET MOVEMENT
function Bullet(xPos, yPos, height, width) {                                    // the object constructor for each bullet
    this.xPos = xPos;                                                           // defaults the values for each bullet
    this.yPos = yPos;
    this.height = height;
    this.width = width;

    this.move = function() {
        this.yPos -= bulletSpeed;                                               // moves the bullets up the screen by the bulletSpeed amount
        if (this.yPos < -25) {                                                  // 25 = bullet height
            return false;                                                       // "return false" will be used to detect if bullet is off screen
        }
        return true;                                                            // function only returns false if it satisfies "if conditions". for
    };                                                                          //     everything else, it has to know that it should return true
        this.draw = function() {
        ctx.drawImage(redBulletImage, this.xPos, this.yPos, 2, 25);             // draws the bullet at the approprate location
    };
}

function EnemyBullet(xPos, yPos, height, width) {                               // the object constructor for enemy bullets
    this.xPos = xPos;                                                           // defaults the values for each bullet
    this.yPos = yPos;
    this.height = height;
    this.width = width;

    this.draw = function() {
        ctx.drawImage(greenBulletImage, this.xPos, this.yPos, 2, 25);           // draws the bullet at the approprate location
    };
    this.move = function() {
        this.yPos += enemyBulletSpeed;                                          // moves the bullets down the screen by the bulletSpeed amount
        if (this.yPos > spacegamecanvas.height) {                               // if off screen
            return false;                                                       // "return false" will be used to detect if bullet is off screen
        }
        return true;                                                            // function only returns false if it satisfies "if conditions". for
    };                                                                          //     everything else, it has to know that it should return true
}

// BUTTON INPUT
document.addEventListener("keydown", function(evt) {
    if (ship.hp > 0) {                                                          // cannot move if dead
       if (evt.keyCode === 38) {                                                // key codes correspond to arrow keys
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
            if (gameStarted) {
                ship.firing = true;                                             // if the game started, then spacebar makes the ship shoot
            }
            else {
                if (evt.keyCode === 32) {
                    gameStarted = true;                                         // if the game hasnt, then the spacebar starts the game
                    enemy.canShoot = true;
                }
            }
       }
   }
});

document.addEventListener("keyup", function(evt) {                              // ship doesnt move when arrow keys are not pressed
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

// ENEMY SHIP AND HEALTH
var enemy = {                                                                   // creates enemy as an object
    height: 19,                                                                 // defaults the size of enemy
    width: 25,
    xPos: (spacegamecanvas.width / 2) - (this.width / 2),                       // defaults the position of the enemy in the centre
    yPos: 20,
    canShoot: false,
    exploding: false,
    hp: 100,                                                                    // enemy starts out with 100HP

    draw: function() {                                                          // draws the enemy at the approprate location
        ctx.drawImage(opponent, this.xPos - this.width / 2, this.yPos, this.width, this.height);
    },
    drawHP: function() {
        ctx.beginPath();
        ctx.rect(15, 10, (this.hp * 0.01) * (spacegamecanvas.width - 30), 3);   // draws the HP bar at the appropriate width
        ctx.fillStyle = "rgba(50, 255, 50, 0.75)";                              // colours the HP bar green
        ctx.fill();
    }
};

// GAME STATE DETECTION
function detectStart() {
    if (!gameStarted) {
        ctx.beginPath();
        ctx.font = "33px 'Press Start 2P'";                                     // ...and displays the "you win" message
        ctx.fillStyle = "#44ff44";
        ctx.stokeStyle = "#111111";
        ctx.textAlign = "center";
        ctx.fillText("press space", spacegamecanvas.width / 2, (spacegamecanvas.height / 3) * 2 - 30);
        ctx.strokeText("press space", spacegamecanvas.width / 2, (spacegamecanvas.height / 3) * 2 - 30);

        ctx.font = "33px 'Press Start 2P'";
        ctx.textAlign = "center";
        ctx.fillText("to start", spacegamecanvas.width / 2, (spacegamecanvas.height / 3) * 2 + 10);
        ctx.strokeText("to start", spacegamecanvas.width / 2, (spacegamecanvas.height / 3) * 2 + 10);
    }
}
function detectWin() {                                                          // function detects if the enemy is dead (HP <= 0)
    if (enemy.hp <= 0) {
        enemy.canShoot = false;                                                 // enemy cannot shoot if dead
        opponent = explosion1;
        enemy.exploding = true;
    }
}
function detectLose() {                                                         // function detects if the player is dead (HP <= 0)
    if (ship.hp <= 0) {
        ship.canShoot = false;                                                  // ship cannot shoot if dead

        ctx.beginPath();
        ctx.rect(0, 0, spacegamecanvas.width, spacegamecanvas.height);          // if player is dead, screen slightly fades to white...
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fill();

        ctx.font = "35px 'Press Start 2P'";                                     // ...and displays the "game over" message
        ctx.fillStyle = "#ff4444";
        ctx.stokeStyle = "#111111";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", spacegamecanvas.width / 2, spacegamecanvas.height / 2);
        ctx.strokeText("GAME OVER", spacegamecanvas.width / 2, spacegamecanvas.height / 2);

        ctx.font = "15px 'Press Start 2P'";
        ctx.textAlign = "center";
        ctx.fillText("you is deaded", spacegamecanvas.width / 2, spacegamecanvas.height / 2 + 30);
        ctx.strokeText("you is deaded", spacegamecanvas.width / 2, spacegamecanvas.height / 2 + 30);
    }
}

var enemyMove = 0;                                                              // creates the enemy movement; starts at zero, increases by gameLoop
var enemyShoot = 0;
var enemyExplodeCount = 0;




//   _______  _______  __   __  _______      ___      _______  _______  _______ 
//  |       ||       ||  |_|  ||       |    |   |    |       ||       ||       |
//  |    ___||   _   ||       ||    ___|    |   |    |   _   ||   _   ||    _  |
//  |   | __ |  |_|  ||       ||   |___     |   |    |  | |  ||  | |  ||   |_| |
//  |   ||  ||       ||       ||    ___|    |   |    |  |_|  ||  |_|  ||    ___|
//  |   |_| ||   _   || ||_|| ||   |___     |   |___ |       ||       ||   |    
//  |_______||__| |__||_|   |_||_______|    |_______||_______||_______||___|  

function gameLoop() {
// SCREEN CLEAR AND RESET
    ctx.beginPath();
    ctx.clearRect(0, 0, spacegamecanvas.width, spacegamecanvas.height);         // clears the canvas

// PLAYER MOVEMENT AND HEALTH
    ship.move();                                                                // moves the spaceship

    ship.draw();                                                                // draws the spaceship
    ship.drawHP();

// PLAYER SHOOTING
    ship.shoot();                                                               // detects if ship is shooting, fires bullet if needed
    for (var i = 0; i < bullets.length; i++) {                                  // "++" is the "increment operator". it adds 1; var "i" for "index"
        bullets[i].draw();                                                      // draws the bullets on the screen
        if (!bullets[i].move() && bullets.length > 0) {                         // only run if there are bullets in the array; otherwise game crashes
            bullets.splice(i, 1);                                               // takes bullets out of the array if off screen
        }
        if (bullets.length > 0) {                                               // only run if there are bullets in the array; otherwise game crashes
            if (!(bullets[i].yPos + bullets[i].height < enemy.yPos ||           // up                   ---------------------------------------------
            bullets[i].yPos > enemy.yPos + enemy.height ||                      // down                 |if bullet is not above, below, left of, or |
            bullets[i].xPos + bullets[i].width < enemy.xPos ||                  // left                 |right of enemy, then they are colliding    |
            bullets[i].xPos > enemy.xPos + enemy.width)) {                      // right                ---------------------------------------------
                bullets.splice(i, 1);                                           // bullet despawns if it hits the enemy
                if (enemy.hp > 0) {                                             // "if HP > 0"prevents HP bar from drawing in the negative direction
                    enemy.hp -= 60;                                              // enemy loses HP when hit
                    opponent = enemyDamagedImage;                               // makes the enemy "blink" (look damaged) for a second...
                    window.setTimeout(function() {
                        opponent = enemyImage;                                  // ...then resets the image back to normal
                    }, 90);
                }
            }
        }
    }

// ENEMY MOVEMENT AND HEALTH
    if (enemy.hp > 0 || !gameStarted) {                                         // if enemy is alive, also able to move before game start
        enemyMove++;                                                            // increases the variable mentioned before the gameLoop
    }
    enemy.xPos = (-((spacegamecanvas.width - (2 * 17)) / 2) * (Math.sin((6.28318530718 / 400) * enemyMove))) + (spacegamecanvas.width / 2);
    // "2 * 17" because subtracting 17 pix from both sides
    enemy.yPos = (-((20 - (spacegamecanvas.height / 3)) / 2) * (Math.sin((6.28318530718 / 200) * enemyMove))) + 100;
    // these equations are basic sin equatons (precal classes are finally paying off lol). they're in the y=A(B(x-C))+D form. both the x and y
    // direction fluctuate back and forth, creating the figure-8 movement. i made sure the enemy and spaceship x-speeds were different. that way,
    // it's harder to shoot the enemy ship

    enemy.draw();                                                               // draws the enemy
    enemy.drawHP();                                                             // draws the enemy HP bar

// ENEMY SHOOTING
    if (enemyShoot < 30) {
        enemyShoot++;    
    } else {
        if (enemy.canShoot) {
            enemyBullets.push(new EnemyBullet(enemy.xPos - 1, enemy.yPos + enemy.height, 25, 2));
            enemyShoot = 0;
            enemy.canShoot = false;
            window.setTimeout(function() {
                enemy.canShoot = true;
            }, 100);
        }
    }

    var enemyRandShoot = Math.random();
    if (enemyRandShoot < 1 / 120) {
        if (enemy.canShoot) {
            enemyBullets.push(new EnemyBullet(enemy.xPos - 1, enemy.yPos + enemy.height, 25, 2));
            enemy.canShoot = false;
            window.setTimeout(function(){
                enemy.canShoot = true;
            }, 100);
        }
    }

    if ((enemy.xPos >= ship.xPos) && ((enemy.xPos + enemy.width) <= (ship.yPos + ship.width))) {
        if (enemy.canShoot) {
            console.log("in between");
            enemyBullets.push(new EnemyBullet(enemy.xPos - 1, enemy.yPos + enemy.height, 25, 2));
            enemy.canShoot = false;
            window.setTimeout(function(){
                enemy.canShoot = true;
            }, 300);                                                            // raised the fire ratge cap because it started machine-gunning
        }
    }

    for (var i = 0; i < enemyBullets.length; i++) {
        enemyBullets[i].move();
        enemyBullets[i].draw();

        if (!enemyBullets[i].move()) {                                          // dont need to detect if bullets in array; shooting is not irregular
            enemyBullets.splice(i, 1);                                          // takes bullets out of the array if off screen
        }
        if (enemyBullets.length > 0) {                                          // only run if there are bullets in the array; otherwise game crashes
            if (!(enemyBullets[i].yPos + enemyBullets[i].height < ship.yPos ||  // up                   ---------------------------------------------
            enemyBullets[i].yPos > ship.yPos + ship.height ||                   // down                 |if bullet is not above, below, left of, or |
            enemyBullets[i].xPos + enemyBullets[i].width < ship.xPos ||         // left                 |right of ship, then they are colliding     |
            enemyBullets[i].xPos > ship.xPos + ship.width)) {                   // right                ---------------------------------------------
                enemyBullets.splice(i, 1);                                      // bullet despawns if it hits the enemy
                if (ship.hp > 0) {                                              // "if HP > 0"prevents HP bar from drawing in the negative direction
                    ship.hp -= 10;                                              // enemy loses HP when hit
                    player = shipDamagedImage;                                  // ship looks damaged for a bit...
                    window.setTimeout(function() {
                        player = shipImage;                                     // ...then image resets back to normal
                    }, 125);
                }
            }
        }
    }

// GAME STATUS
    detectStart();
    detectWin();                                                                // calls the fuction that detects if the enemy is dead
    detectLose();
    if (enemy.exploding) {
        enemyExplodeCount += 1;
    }
    if (enemyExplodeCount > 0 && enemyExplodeCount < 30) {
        opponent = explosion1;
    }
    else if (enemyExplodeCount >= 30 && enemyExplodeCount < 90){
        opponent = explosion2;
    }
    else if (enemyExplodeCount >= 90) {
        opponent = explosion2;
        
        ctx.beginPath();
        ctx.rect(0, 0, spacegamecanvas.width, spacegamecanvas.height);          // if enemy is dead, screen slightly fades to white...
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fill();

        ctx.font = "25px 'Press Start 2P'";                                     // ...and displays the "you win" message
        ctx.fillStyle = "#44ff44";
        ctx.stokeStyle = "#111111";
        ctx.textAlign = "center";
        ctx.fillText("yay! you win!", spacegamecanvas.width / 2, spacegamecanvas.height / 2);
        ctx.strokeText("yay! you win!", spacegamecanvas.width / 2, spacegamecanvas.height / 2);
    }
    
    window.requestAnimationFrame(gameLoop);                                     // loops the gameLoop
}

gameLoop();


/*
notes on collision detection

!isColliding
Up      2.yPos + 2.height < 1.yPos
Down    2.yPos            > 1.yPos + 1.height
Left    2.xPos + 2.width  < 1.xPos
Right   2.xPos            > 1.xPos + 1.width




notes on "equals"
  = means you're setting something to a value
 == means you're comparing two things that aren't necessarily the same type (like string vs int)
=== means you're comparing two things that are the same time
*/