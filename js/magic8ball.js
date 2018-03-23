/*
       document : magic8ball.js, for cs-portfolio
     created on : friday, december 16 2016, 9:48 AM
         author : adrielo (audrey) bongalon
    description : js program for a magic 8-ball simulator


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

var eightBall = document.getElementById("eight-ball");
var display = document.getElementById("answer");

eightBall.addEventListener("mousedown", giveAnswer, true);

var responses = ["Yes", "No", "Maybe", "Sure, but just never feed applejacks to a goldfish.", "Maybe you should reconsider your life choices.", "idk. ask me later"];
var randomNumber = 0;

function giveAnswer() {
    randomNumber = Math.floor(Math.random() * responses.length);
    if (randomNumber == 3 || randomNumber == 4) {
        document.getElementById("answer").style.fontSize = "13px";
    }
    else if (randomNumber == 5) {
        document.getElementById("answer").style.fontSize = "30px";
    }
    else {
        document.getElementById("answer").style.fontSize = "50px";
    }
    display.innerHTML = responses[randomNumber];
}