/*
       document : magic8ball.js, for cs-portfolio
     created on : friday, december 16 2016, 11:22 AM
         author : adrielo (audrey) bongalon
    description : js program for a lightweight cookie clicker game


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

if you're here, you're probably trying to see if there's an easter egg.
well there is. see if you can find it.

*/

var cookie = document.getElementById("cookie");
var cookieDisplay = document.getElementById("cookie-count");
var cursorButton = document.getElementById("cookiecursor");
var grandmaButton = document.getElementById("cookiegrandma");

cookie.addEventListener("mousedown", cookieClicked, true);
cookie.addEventListener("mouseup", cookieUnclicked, true);
cursorButton.addEventListener("mousedown", updateCursor, true);
grandmaButton.addEventListener("mousedown", updateGrandma, true);




var cookieCount = 0;
var hasCursor = false;
var hasGrandma = false;
var cursorMultiplier = 0;
var grandmaMultiplier = 0;
var cursorCost = 50;
var grandmaCost = 100;
var a = false;
var b = a;
var c = b;




function cookieClicked() {
    document.getElementById("cookie").src = "images/cookieDark.png";
    if (cursorMultiplier > 0) {
        cookieCount += cursorMultiplier;
    }
    else {
        cookieCount++;
    }
    cookieDisplay.innerHTML = cookieCount;
}

function cookieUnclicked() {
    document.getElementById("cookie").src = "images/cookie.png";
}




window.setInterval(function() {
    if (hasCursor) {
        cookieCount += cursorMultiplier;
        cookieDisplay.innerHTML = cookieCount;
    }
}, 10000);

window.setInterval(function() {
    if (hasGrandma) {
        cookieCount += grandmaMultiplier;
        cookieDisplay.innerHTML = cookieCount;
    }
}, 2000);

// sometimes the cookie glitches to the dark side
window.setInterval(function() {
    cookieUnclicked();
}, 500);




document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 72) {
        a = true;
    }
    if (evt.keyCode === 65) {
        b = true;
    }
    if (evt.keyCode === 88) {
        c = true;
    }
    if (a && b && c) {
        cookieCount *= 100;
        cookieDisplay.innerHTML = cookieCount;
    }
});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 72) {
        a = false;
    }
    if (evt.keyCode === 65) {
        b = false;
    }
    if (evt.keyCode === 88) {
        c = false;
    }
});




function updateCursor() {
    if (cookieCount >= cursorCost) {
        hasCursor = true;
        cursorMultiplier++;
        cookieCount -= cursorCost;
        cookieDisplay.innerHTML = cookieCount;
        cursorCost *= 2;
        document.getElementById("cookiecursor").value = "upgrade cursor (x" + cursorMultiplier + ") → (x" + (cursorMultiplier + 1) + ")        cost: "+ cursorCost;
    }
}




function updateGrandma() {
    if (cookieCount >= grandmaCost) {
        hasGrandma = true;
        grandmaMultiplier++;
        cookieCount -= grandmaCost;
        cookieDisplay.innerHTML = cookieCount;
        grandmaCost *= 2;
        document.getElementById("cookiegrandma").value = "upgrade grandma (x" + grandmaMultiplier + ") → (x" + (grandmaMultiplier + 1) + ")        cost: " + grandmaCost;
    }
}