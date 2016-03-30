//  Document   : synth.js, for cs-portfolio
//  Created on : Monday, March 28, 2016, 13:23 PM
//  Author     : Adrielo (Audrey) Bongalon
//  Description: synthesiser simulator javascript file, for 10th grade computer science expeditions course


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

var synthcanvas = document.getElementById("synthcanvas");
var ctx = synthcanvas.getContext("2d");

var testImage = document.getElementById("pianoKeyboard");
function drawpiano() {
    ctx.drawImage(testImage, 0, 0, synthcanvas.width, synthcanvas.width * (188 / 429));
}

// --------------------------------------------------------------------------------------------------------------------------------------------------

var keyslider = document.getElementById("keyspanSlider");
var keysdisplay = document.getElementById("pianokeysdisplay");

var keyspan = parseInt(keyslider.value, 10);                                                               // number of white keys
var keyheight = synthcanvas.height * (19 / 20);
var keywidth = synthcanvas.width / keyspan;

var keys = [];

// var c4 = {
//     height: synthcanvas.height * (19 / 20),
//     width: synthcanvas.width / keyspan,
//     pressed: false,
//     draw: function() {
//         if (this.pressed === false) {
//             ctx.beginPath();
//             ctx.lineWidth = 5;
//             ctx.lineJoin = "round";
//             ctx.moveTo(0, 0);
//             ctx.lineTo(0, keyheight);
//             ctx.lineTo(keywidth, keyheight);
//             ctx.lineTo(keywidth, keyheight * (4 / 7));
//             ctx.lineTo(keywidth * (3 / 4), keyheight * (4 / 7));
//             ctx.lineTo(keywidth * (3 / 4), 0);
//             ctx.closePath();
//             ctx.strokeStyle = "#000000";
//             ctx.stroke();
//             ctx.fillStyle = "#ffffff";
//             ctx.fill();
//         }
//     },
//     detectClick: function() {
//         if () {

//         }
//     }
// };


function LeftKey(x, y) {
    this.x = x;
    this.y = y;
    this.pressed = false;
    
    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth * (3 / 4)), keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth * (3 / 4)), this.y);
        ctx.closePath();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
}

function MiddleKey(x, y) {
    this.x = x;
    this.y = y;
    this.pressed = false;
    
    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(this.x + (keywidth / 4), this.y);
        ctx.lineTo(this.x + (keywidth / 4), keyheight * (4 / 7));
        ctx.lineTo(this.x, keyheight * (4 / 7));
        ctx.lineTo(this.x, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth * (3 / 4)), keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth * (3 / 4)), this.y);
        ctx.closePath();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
}

function RightKey(x, y) {
    this.x = x;
    this.y = y;
    this.pressed = false;
    
    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(this.x + (keywidth / 4), this.y);
        ctx.lineTo(this.x + (keywidth / 4), keyheight * (4 / 7));
        ctx.lineTo(this.x, keyheight * (4 / 7));
        ctx.lineTo(this.x, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight);
        ctx.lineTo(this.x + keywidth, this.y);
        ctx.closePath();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
}

function EndKey(x, y) {
    this.x = x;
    this.y = y;
    this.pressed = false;
    
    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, keyheight);
        ctx.lineTo(this.x + keywidth, keyheight);
        ctx.lineTo(this.x + keywidth, this.y);
        ctx.closePath();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
}

function BlackKey(x, y) {
    this.x = x;
    this.y = y;
    this.pressed = false;
    
    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(this.x - (keywidth / 4), this.y);
        ctx.lineTo(this.x - (keywidth / 4), keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth / 4), keyheight * (4 / 7));
        ctx.lineTo(this.x + (keywidth / 4), this.y);
        ctx.closePath();
        // ctx.strokeStyle = "#000000";
        // ctx.stroke();
        ctx.fillStyle = "#111111";
        ctx.fill();
    };
}

for (i = 0; i < keyspan; i++) {
    if ((i % 7 === 0 || i % 7 === 3) && i != keyspan - 1) {
        keys.push(new LeftKey((synthcanvas.width / keyspan) * i, 0));
    }
    else if ((i % 7 === 1 || i % 7 === 4 || i % 7 === 5) && i != keyspan - 1) {
        keys.push(new BlackKey((synthcanvas.width / keyspan) * i, 0));
        keys.push(new MiddleKey((synthcanvas.width / keyspan) * i, 0));
    }
    else if ((i % 7 === 2 || i % 7 === 6) && i != keyspan - 1) {
        keys.push(new BlackKey((synthcanvas.width / keyspan) * i, 0));
        keys.push(new RightKey((synthcanvas.width / keyspan) * i, 0));
    }
    else if (i === keyspan - 1) {
        if (i % 7 === 0 || i % 7 === 3) {
            keys.push(new EndKey((synthcanvas.width / keyspan) * i, 0));
        }
        else {
            keys.push(new BlackKey((synthcanvas.width / keyspan) * i, 0));
            keys.push(new RightKey((synthcanvas.width / keyspan) * i, 0));
        }
    }
    else {
        alert("error. is not left, middle, or right key");
    }
}

// keys.push(new LeftKey(0, 0));
// keys.push(new MiddleKey(synthcanvas.width / keyspan, 0));
// keys.push(new RightKey((synthcanvas.width / keyspan) * 2, 0));
// keys.push(new LeftKey((synthcanvas.width / keyspan) * 3, 0));
// keys.push(new MiddleKey(synthcanvas.width / keyspan * 4, 0));
// keys.push(new MiddleKey(synthcanvas.width / keyspan * 5, 0));
// keys.push(new RightKey((synthcanvas.width / keyspan) * 6, 0));
// keys.push(new LeftKey((synthcanvas.width / keyspan) * 7, 0));
// keys.push(new MiddleKey(synthcanvas.width / keyspan * 8, 0));
// keys.push(new RightKey((synthcanvas.width / keyspan) * 9, 0));

// keys.push(new BlackKey(synthcanvas.width / keyspan, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 2, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 4, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 5, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 6, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 8, 0));
// keys.push(new BlackKey((synthcanvas.width / keyspan) * 9, 0));

// var d4 = {
//     height: synthcanvas.height * (19 / 20),
//     width: synthcanvas.width / keyspan,
//     pressed: false,
//     draw: function() {
//         if (this.pressed === false) {
//             ctx.beginPath();
//             ctx.lineWidth = 5;
//             ctx.lineJoin = "round";
//             ctx.moveTo(0, 0);
//             ctx.lineTo(0, keyheight);
//             ctx.lineTo(keywidth, keyheight);
//             ctx.lineTo(keywidth, keyheight * (4 / 7));
//             ctx.lineTo(keywidth * (3 / 4), keyheight * (4 / 7));
//             ctx.lineTo(keywidth * (3 / 4), 0);
//             ctx.closePath();
//             ctx.strokeStyle = "#000000";
//             ctx.stroke();
//             ctx.fillStyle = "#ffffff";
//             ctx.fill();
//         }
//     }
// };

var i = 0;

function drawLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, synthcanvas.width, synthcanvas.height);
    
    // drawpiano();
    keyspan = parseInt(keyslider.value, 10);
    keysdisplay.innerHTML = keyspan;
    
    for (i = 0; i < keys.length; i++) {
        keys[i].draw();
    }
    window.requestAnimationFrame(drawLoop);
}

drawLoop();