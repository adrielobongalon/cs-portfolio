//  Document   : calc.js, for cs-portfolio
//  Created on : Tuesday, Jaunary 5, 2016, 13:50 PM
//  Author     : Adrielo (Audrey) Bongalon
//  Description: calculator javascript page, for 10th grade computer science expeditions course


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



var button = document.getElementById("submitButton");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var answer;
var display = document.getElementById("display");
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    var firstInput = parseInt(input1.value);
    var secondInput = parseInt(input2.value);
    if(dropdown.value == "+"){
        answer = firstInput + secondInput;
    }
    else if(dropdown.value == "-"){
        answer = firstInput - secondInput;
    }
    else if(dropdown.value == "x"){
        answer = firstInput * secondInput;
    }
    else if(dropdown.value == "/"){
        answer = firstInput / secondInput;
    }
    else if(dropdown.value == "^"){
        answer = Math.pow(firstInput, secondInput);
    }
    else if(dropdown.value == "r"){
        answer = Math.pow(firstInput, 1 / secondInput);
    }
    else if(dropdown.value == "%"){
        answer = firstInput % secondInput;
    }
    display.innerHTML = answer;
}