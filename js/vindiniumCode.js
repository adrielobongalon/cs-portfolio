
//                          dP                                           dP                         dP
//                          88                                           88                         Y"
//  ,d8888b. dP    dP ,d888b88 88d888b. ,d8888b. dP    dP       ,d8888b. 88d888b. ,d8888b. 88d888b.    ,d8888b.
//  88'  `88 88    88 88'  `88 88'  `88 88ooood8 88    88 88888 88'  `"" 88'  `88 88'  `88 88'  `88    88(,,,,
//  88.  ,88 88.  ,88 88.  ,88 88       88.  ,.. 88.  ,88       88.  ,.. 88    88 88.  ,88 88    88     """")88
//  `88888P8 `88888P' `88888P8 dP       `88888P' `8888P88       `88888P' dP    dP `88888P8 dP    dP    "88888P'
//                                                   ,88
//                                               d8888P
//  dP                  dP       .8888b                              aa                dP aa          aa
//  88                  88       88                                                    88
//  88d888b. ,d8888b. d8888P    a8888P ,d8888b. 88d888b.    dP   ,dP dP 88d888b. ,d888b88 dP 88d888b. dP dP    dP 88d8b.d8b.
//  88'  `88 88'  `88   88       88    88'  `88 88'  `88    88   d8' 88 88'  `88 88'  `88 88 88'  `88 88 88    88 88'`88'`88
//  88.  ,88 88.  ,88   88       88    88.  ,88 88          88 ,88'  88 88    88 88.  ,88 88 88    88 88 88.  ,88 88  88  88
//  88Y8888' `88888P'   dP       dP    `88888P' dP          8888P'   dP dP    dP `88888P8 dP dP    dP dP `88888P' dP  dP  dP




//             ad88888ba  88                                                                 88                                     8888888888                  ,ad888ba,  
//            d8"     "8b 88                                                                 88          88                         88          88             d8"     "Y8  
//            Y8a     a8P 88                                                                 88                                     88                         88           
//  ,adPPYba,  "Y8aaa8P"  88  ,adPPYba, 8b,dPPYba,  ,adPPYba,  ,adPPYb,d8 8b,     ,d8        88,dPPYba,  88 8b       d8 8b       d8 88a8PPPP8b, 88 8b       d8 88,dd888bb,  
//  I8(    ""  ,d8"""8b,  88 a8P,,,,,88 88P'    "8a I8(    "" a8"    `Y88  `Y8, ,8P'         88P'    "8a 88 `8b     d8' `8b     d8' PP"     `8b 88 `8b     d8' 88P'   `Y8b  
//   `"Y8ba,  d8"     "8b 88 8PP""""""" 88       d8  `"Y8ba,  8b      :88    :888:           88       88 88  `8b   d8'   `8b   d8'           d8 88  `8b   d8'  88      :88  
//  aa    )8I Y8.     ,8P 88 "8b,   ,aa 88b.   ,a8" aa    )8I "8a    ,d88  ,d8" "8b,         88       88 88   `8b,d8'     `8b,d8'   Y8a     a8P 88   `8b.d8'   88a     a8P  
//  `"YbbdP"'  "Y88888P"  88  `"Ybbd8"' 88`"Y88P"'  `"YbbdP"'  `"YbbdP'88 8P'     `Y8        88       88 88     Y88'        Y88'     "Y88888P"  88     Y8Y      "Y88888P"   
//                                      88                             88                                       d8'         d8'                ,88                          
//                                      88                             88                                      d8'         d8'               888P"


var Bot = require('bot');
var PF = require('pathfinding');
var bot = new Bot('s8lepsqx', 'training', 'http://vindinium.org'); //Put your bot's code here and change training to arena when you want to fight others.
// var bot = new Bot('hiyy5jv6', 'arena', 'http://52.53.211.7:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
//      **Write your bot below Here**
//      **Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom**








//      -----------------------------------------
//      |       This Code is global data!       |
//      -----------------------------------------

// Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
var myDir;
var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];

var enemyBots = [];
if (bot.yourBot.id != 1) {
    enemyBots.push(bot.bot1);
}
if (bot.yourBot.id != 2) {
    enemyBots.push(bot.bot2);
}
if (bot.yourBot.id != 3) {
    enemyBots.push(bot.bot3);
}
if (bot.yourBot.id != 4) {
    enemyBots.push(bot.bot4);
}

var i = 0;

console.log("my data:");
console.log(bot.yourBot);
console.log("");                                                                // this line is not an error. it's meant to put a line break in the console log
console.log("enemy data:");
console.log(enemyBots);
console.log("");                                                                // same here
if (bot.freeMines.length >= 1) {
    console.log("free mines:");
    console.log(bot.freeMines);
}
if (bot.yourBot.life <= 10) {
    console.log("IM BLEEDING OUT");
    console.log("remaining hp: " + bot.yourBot.life);
}

//      ----------------------------

var nearestMine = bot.freeMines[0];
for (i = 0; i < bot.freeMines.length; i++) {
    if (bot.findDistance(myPos, nearestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
        nearestMine = bot.freeMines[i];
    }
}

var nearestPub = bot.taverns[0];
for (i = 0; i < bot.taverns.length; i++) {
    if (bot.findDistance(myPos, nearestPub) > bot.findDistance(myPos, bot.taverns[i])) {
        nearestPub = bot.taverns[i];
    }
}
console.log(nearestPub);

var nearestFoolishMortal = enemyBots[0];
for (i = 0; i < enemyBots.length; i++) {
    if (bot.findDistance(myPos, [nearestFoolishMortal.pos.x, nearestFoolishMortal.pos.y]) > bot.findDistance(myPos, [enemyBots[i].pos.x, enemyBots[i].pos.y])) {
        nearestFoolishMortal = enemyBots[i];
    }
}
console.log("nearest enemy: " + nearestFoolishMortal.id);
console.log("");                                                                // line break for console log

var weaklings = [];
for (i = 0; i < enemyBots.length; i++) {
    if (enemyBots[i].life < bot.yourBot.life) {
        weaklings.push(enemyBots[i]);
    }
}
console.log("weaklings: ");
if (weaklings.length > 0) {
    for (i = 0; i < weaklings.length; i++) {
        console.log("potential weak target identified: " + weaklings[i].id);
    }
}
else {
    console.log("no weaklings detected");
}
console.log("");                                                                // line break for console log

//  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function richTest1() {                                                          // tests to see if there is a richest player
    for (i = 0; i < enemyBots.length; i++) {
        if (enemyBots[i].mineCount != enemyBots[0].mineCount) {
            return true;
        }
        return false;
    }
}
richTest1();                                                                    // calls the richTest1 function (applies to all opponents)

var richestEnemy = enemyBots[0];                                                // initialises richestEnemy (not necessaryly actual richest opponent)
var richestEnemies = [];                                                        // just in case the top few, but not all enemies, are equally rich
if (richTest1) {
    for (i = 0; i < enemyBots.length; i++) {
        if (richestEnemy.mineCount < enemyBots[i].mineCount) {
            richestEnemy = enemyBots[i];
        }
    }
    richestEnemies.push(richestEnemy);                                          // the richest enemy of all obviously consists of the richest enemy
    for (i = 0; i < enemyBots.length; i++) {
        if (enemyBots[i].mineCount === richestEnemies[0] && enemyBots[i].id != richestEnemies[0].id) {
            richestEnemies.push(enemyBots[i]);                                  // if there's anyone just as rich as the richest, then they're also one of the richest
        }
    }
}
else {
    richestEnemy = nearestFoolishMortal;                                        // if they're all equally rich, you might as just go for whoever's closest
}
console.log("richest enemy: " + richestEnemy.id + ", " + (richestEnemies.length - 1) + " enemies are equally rich");
        
// function richTest2() {
//     if (weakOuranKids.length > 1) {
//         for (i = 0; i < weakOuranKids.length; i++) {
//             if (weakOuranKids[i].mineCount != weaklings[0].mineCount) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     else {
//         return false;
//     }
// }

var richestWeakling;                                                            // self-explanatory
var weakOuranKids = [];                                                         // just in case the top few weaklings, but not all weaklings, are equally rich
if (weaklings.length > 0) {
    richestWeakling = weaklings[0];                                             // finds the amount of mines the richest player(s) has/have
    for (i = 0; i < weaklings.length; i++) {
        if (richestWeakling.mineCount < weaklings[i].mineCount) {
            richestWeakling = weaklings[i];
        }
    }
    weakOuranKids.push(richestWeakling);                                        // one of the richest weaklings is obviously the most rich one
    for (i = 0; i < weaklings.length; i++) {
        if (weaklings[i].mineCount === weakOuranKids[0] && weaklings[i].id != weakOuranKids[0].id) {
            weakOuranKids.push(weaklings[i]);                                   // if there's anyone just as rich as the richest, then they're also one of the richest
        }
    }
}
else {
    richestWeakling = "none";
}
if (weakOuranKids.length === 0) {
    richestWeakling = "none";
}
else if (weakOuranKids.length === 1) {
    if (weakOuranKids[0].mineCount > 0) {
        richestWeakling = weakOuranKids[0];
    }
    else {
        richestWeakling = "none";
    }
}
else if (weakOuranKids.length > 1) {
    richestWeakling = weakOuranKids[0];
    for (i = 0; i < weakOuranKids.length; i++) {
        if (bot.findDistance(myPos, [weakOuranKids[i].pos.x, weakOuranKids[i].pos.y]) < bot.findDistance(myPos, [richestWeakling.pos.x, richestWeakling.pos.y])) {
            richestWeakling = weakOuranKids[i];
        }
    }
    if (richestWeakling.minecount > 1) {
        richestWeakling = "none";
    }
}
if (richestWeakling === "none") {
    console.log("richest weakling: none");
}
else {
    console.log("richest weakling: " + richestWeakling.id);
}
console.log("");                                                                // line break for console log

function rwNotCamping() {                                                       // "rw" stands for "richest weakling"
    if (richestWeakling === "none") {
        return false;
    }
    else {
        var nearestRWpub = bot.taverns[0];
        for (i = 0; i < bot.taverns.length; i++) {
            if (bot.findDistance([richestWeakling.pos.x, richestWeakling.pos.y], nearestRWpub) > bot.findDistance([richestWeakling.pos.x, richestWeakling.pos.y], bot.taverns[i])) {
                nearestPub = bot.taverns[i];
            }
        }
        if (bot.findDistance([richestWeakling.pos.x, richestWeakling.pos.y], nearestRWpub) <= 4) {
            return false;                                                       // prevents me from attacking what i call "pub campers"
        }
        else if (bot.findDistance([richestWeakling.pos.x, richestWeakling.pos.y], nearestRWpub) <= bot.findDistance(myPos, nearestRWpub)) {
            if (bot.findDistance([richestWeakling.pos.x, richestWeakling.pos.y], nearestRWpub) < 9) {
                return false;                                                   // it's not really useful to try to attack them if they're too far away (and will likely get to a
            }
            else {
                return true;
            }
        }                                                                       // pub before i can reach them)
        else {
            return true;
        }
    }
}
rwNotCamping();

//  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








//      ----------------------------------------
//      |     This Code Decides WHAT to do     |
//      ----------------------------------------

var task;
if (bot.yourBot.life >= 35 && nearestFoolishMortal.life <= bot.yourBot.life + 10 &&
bot.findDistance(myPos, [nearestFoolishMortal.pos.x, nearestFoolishMortal.pos.y]) <= 11 &&      // dont bother if they're too far away (moar than 10 spaces)
nearestFoolishMortal.mineCount > 0) {                                                           // why bother attacking if you wont get anything out of it?
    task = "attack";
    console.log("has only " + nearestFoolishMortal.life + " hp left");
}
else if (bot.yourBot.life <= 15) {
    task = "tavern";
}
else if (bot.freeMines.length > 0) {
    task = "freemine";
}
else if (bot.yourBot.life >= 35 && richestWeakling != "none" && rwNotCamping) {
    task = "murder";
}
else {
    task = "none";
}
console.log("my task: " + task);






//      ----------------------------------------
//      |  This Code Determines HOW to do it   |
//      ----------------------------------------

// This Code find the nearest freemine and sets myDir toward that direction //
if (task === "freemine") {
    console.log("mining for free cash money at [" + nearestMine + "]");
    myDir = bot.findPath(myPos, nearestMine);
}
else if (task === "tavern") {
    console.log("charlie mops");
    myDir = bot.findPath(myPos, nearestPub);
}
else if (task === "attack") {
    console.log("LEAVE AUDREY ALONE!");
    myDir = bot.findPath(myPos, [nearestFoolishMortal.pos.x, nearestFoolishMortal.pos.y]);
}
else if (task === "murder") {
    myDir = bot.findPath(myPos, [richestWeakling.pos.x, richestWeakling.pos.y]);
}

// if enemy with moar health nearby, run away or get health (if distance from enemy to pub is shorter than distance from me to pub, then enemy is in the way)






//      --------------------------------------------------------------------------------------------------------------------------------
//      | This Code Sets your direction based on myDir.  If you are trying to go to a place that you can't reach, you move randomly.   |
//      | Otherwise you move in the direction set by your code.  Feel free to change this code if you want.                            |
//      --------------------------------------------------------------------------------------------------------------------------------

if (myDir === "none" || myDir === undefined) {
    if (myDir === undefined) {
        if (task === "none") {
            console.log("no task. random direction");
        }
        else {
            console.log("direction is undefined. check code for errors");
        }
    }
    if (task !== "none") {
        console.log("random direction");
    }
    var rand = Math.floor(Math.random() * 4);
    var dirs = ["north", "south", "east", "west"];
    bot.goDir = dirs[rand];
}
else {
    bot.goDir = myDir;
}

        //////////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
};
bot.runGame();