/*
       document : synth.js, for cs-portfolio
     created on : monday, march 28, 2016, 13:23 PM
         author : adrielo (audrey) bongalon
    description : synthesiser simulator javascript file, for 10th grade computer science expeditions course


                                      88
                                      88
                                      88
    ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
    ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
    ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
    88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
    `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
                                                                     d8'
                                                                    d8'
*/

var synthcanvas = document.getElementById("synthcanvas");
var ctx = synthcanvas.getContext("2d");

// var testImage = document.getElementById("pianoKeyboard");
// function drawpiano() {
//     ctx.drawImage(testImage, 0, 0, synthcanvas.width, synthcanvas.width * (188 / 429));
// }

var keys = [];
var i = 0;

synthcanvas.addEventListener("mousedown", findMousePos, true);

var mousex;
var mousey;
var clickedKey;
function findMousePos(event) {
    if (event.x != undefined && event.y != undefined) {
        mousex = event.x;                                                       // defines position within window
        mousey = event.y;
    }
    else {                                                                      // Firefox method to get the position
        mousex = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mousey = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    mousex -= synthcanvas.offsetLeft;                                           // resets position within canvas
    mousey -= synthcanvas.offsetTop;

    // alert("x: " + mousex + "\n" + "y: " + mousey);
}
function detectClickedKey(event) {
    for (i = 0; i < keys.length; i++) {
        if(keys[i].isClicked()){
            clickedKey = keys[i];
        } 
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------

var keyslider = document.getElementById("keyspanSlider");
var whiteKeysDisplay = document.getElementById("whitekeysdisplay");
var blackKeysDisplay = document.getElementById("blackkeysdisplay");
var totalKeysDisplay = document.getElementById("totalkeysdisplay");
// keyslider.addEventListener("change", redrawKeys);

var keyspan = parseInt(keyslider.value, 10);                                    // number of white keys
var keyheight = synthcanvas.height * (19 / 20);
var keywidth = synthcanvas.width / keyspan;

function LeftKey(x, y, note) {
    this.x = x;
    this.y = y;
    this.note = note;
    this.colour = "#ffffff";
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
        ctx.strokeStyle = "#252525";
        ctx.stroke();
        if (this.pressed === false) {
            ctx.fillStyle = this.colour;
            ctx.fill();
        }
        else {
            ctx.fillStyle = "#a1a1a1";
            ctx.fill();
        }
    };
    this.isClicked = function(mousex, mousey) {
        if ((mousex > this.x && mousex < this.x + (keywidth * (3 / 4)) && mousey > 0 && mousey < keyheight * (4 / 7)) ||
        (mousex > this.x && mousex < this.x + keywidth && mousey > keyheight * (4 / 7) && mousey < synthcanvas.height)) {
            alert("hi")
            this.colour = "#00ff00";
            return this.note;
        }
        else {
            return false;
        }
    };
}

function MiddleKey(x, y, note) {
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
        ctx.strokeStyle = "#252525";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
    this.isClicked = function(mousex, mousey) {
        if ((mousex >= this.x + (keywidth / 4) && mousex <= this.x + (keywidth * (3 / 4)) && mousey >= 0 && mousey <= keyheight * (4 / 7)) ||
        (mousex >= this.x && mousex <= this.x + keywidth && mousey >= keyheight * (4 / 7) && mousey <= synthcanvas.height)) {
            return this.note;
        }
        else {
            return false;
        }
    };
}

function RightKey(x, y, note) {
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
        ctx.strokeStyle = "#252525";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
    this.isClicked = function(mousex, mousey) {
        if ((mousex >= this.x + (keywidth / 4) && mousex <= this.x + keywidth && mousey >= 0 && mousey <= keyheight * (4 / 7)) ||
        (mousex >= this.x && mousex <= this.x + keywidth && mousey >= keyheight * (4 / 7) && mousey <= synthcanvas.height)) {
            return this.note;
        }
        else {
            return false;
        }
    };
}

function EndKey(x, y, note) {
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
        ctx.strokeStyle = "#252525";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
    this.isClicked = function(mousex, mousey) {
        if (mousex >= this.x && mousex <= this.x + keywidth && mousey >= 0 && mousey <= synthcanvas.height) {
            return this.note;
        }
        else {
            return false;
        }
    };
}

function BlackKey(x, y, note) {
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
        ctx.fillStyle = "#252525";
        ctx.fill();
    };
    this.isClicked = function(mousex, mousey) {
        if (mousex >= this.x - (keywidth / 4) && mousex <= this.x + (keywidth / 4) && mousey >= 0 && mousey <= keyheight * (4 / 7)) {
            return this.note;
        }
        else {
            return false;
        }
    };
}

function pushKeys() {
    for (i = 0; i < keyspan; i++) {
        if ((i % 7 === 0 || i % 7 === 3) && i != keyspan - 1) {
            keys.push(new LeftKey((synthcanvas.width / keyspan) * i, 0, "c or f"));
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
}
pushKeys();

function findBlackKeysDisplay() {
    if (keyspan % 7 === 0 || keyspan % 7 === 1) {
        return Math.floor((keyspan / 7) * 5);
    }
    else if (keyspan % 7 === 2) {
        return Math.floor(((keyspan - 2) / 7) * 5) + 1;
    }
    else if (keyspan % 7 === 3 || keyspan % 7 === 4) {
        return Math.floor(((keyspan - 3) / 7) * 5) + 2;
    }
    else if (keyspan % 7 === 5) {
        return Math.floor(((keyspan - 5) / 7) * 5) + 3;
    }
    else if (keyspan % 7 === 6) {
        return Math.floor(((keyspan - 6) / 7) * 5) + 4;
    }
}

function findTotalKeysDisplay() {
    return keyspan + findBlackKeysDisplay();
}

function redrawKeys() {
    keywidth = synthcanvas.width / keyspan;
    keys = [];
    pushKeys();
}

function drawLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, synthcanvas.width, synthcanvas.height);

    // drawpiano();

    keyspan = parseInt(keyslider.value, 10);
    whiteKeysDisplay.innerHTML = keyspan;
    findBlackKeysDisplay();
    blackKeysDisplay.innerHTML = findBlackKeysDisplay();
    findTotalKeysDisplay();
    totalKeysDisplay.innerHTML = findTotalKeysDisplay();
    
    redrawKeys();

    for (i = 0; i < keys.length; i++) {
        keys[i].draw();
    }
    window.requestAnimationFrame(drawLoop);
}

drawLoop();