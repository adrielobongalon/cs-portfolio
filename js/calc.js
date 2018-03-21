/*
       document : calc.js, for cs-portfolio
     created on : tuesday, jaunary 5, 2016, 13:50 PM
         author : adrielo (audrey) bongalon
    description : calculator javascript file, for 10th grade computer science expeditions course


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


var button = document.getElementById("submitButton");                           // goes into the html (with a pre-written function) and looks for the
var input1 = document.getElementById("input1");                                 //     element with the given id
var input2 = document.getElementById("input2");
var answer;
var display = document.getElementById("calcdisplay");
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);                                       // looks for the button to be clicked, then runs the function doMath

function doMath() {
    var firstInput = parseFloat(input1.value);                                  // gets the value from the first box and sets it as a variable
    var secondInput = parseFloat(input2.value);                                 // ditto the second value
    if (dropdown.value == "+") {                                                // if + is selected in the dropdown, then it adds values
        answer = (firstInput * 100000000 + secondInput * 100000000) / 100000000;/* sets the result as the variable "answer", uses a sligthly complex */
    }                                                                           /*      algebraic function to accomodate decimals                    */
    else if (dropdown.value == "-") {                                           // ditto for -
        answer = (firstInput * 100000000 - secondInput * 100000000) / 100000000;
    }
    else if (dropdown.value == "x") {                                           // ditto for x
        answer = firstInput * secondInput;
    }
    else if (dropdown.value == "/") {                                           // ditto for /
        answer = firstInput / secondInput;
    }
    else if (dropdown.value == "^") {                                           // ditto for ^
        answer = Math.pow(firstInput, secondInput); // Math.pow does exponents
    }
    else if (dropdown.value == "r") {                                           // ditto for r (roots)
        answer = Math.pow(firstInput, 1 / secondInput);                         /* since nth roots can be done as fractional exponents, make the denominator the second
                                                                                   input for nth root with Math.pow */
    }
    else if (dropdown.value == "%") { // ditto % (modulus)
        answer = firstInput % secondInput;
    }
    display.innerHTML = answer;                                                 // displays the variable "answer"
}