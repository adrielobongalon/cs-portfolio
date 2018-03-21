/*
       document : calc.js, for cs-portfolio
     created on : wednesday, march 21, 2018, 10:34 am
         author : audrey bongalon
    description : a calculator vulnerable to the eval() exploit. cloned from calc.js


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


var button = document.getElementById("submitButton");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var firstInput, secondInput, operator, answer;
var display = document.getElementById("calcdisplay");
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    firstInput = input1.value;
    secondInput = input2.value;
    operator = dropdown.value;
    
    answer = firstInput + operator + secondInput;
    
    display.innerHTML = eval(answer);
}

/* because of the eval() function, you can basically inject anything you want.
   in the first box, put any number. in the second, put any number, followed by
   a semicolon and then your script
  
   i recommend haxDrive.js
*/