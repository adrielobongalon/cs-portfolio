/*
       document : flirttext.js, for cs-portfolio
     created on : thursday, august 18, 2016, 11:30 AM
         author : adrielo (audrey) bongalon
    description : javascript file for the flirt text thingy-wingy


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

var i = 0;

var button = document.getElementById("translateButton");
var input = document.getElementById("flirtInput");
var translation;
var words;          // array of input, each word is an item in the array
var replacement;    // temporary holder for resulting translation
var display = document.getElementById("flirtDisplay");

button.addEventListener("click", translate);                                    // looks for the button to be clicked, then runs the function doMath




function replaceWords(editThis) {
    words = editThis.split(" ");
    for (i = 0; i < words.length; i++) {
        // word replacements
        if (words[i] === "hey" || words[i] === "hi") {
            words[i] = "heeeeeeey";
        }
        else if (words[i] === "you") {
            words[i] = "yoooouuu";
        }
        else if (words[i] === "me") {
            words[i] = "meeeeeee";
        }
        else if (words[i] === "love") {
            words[i] = "loooovvvee";
        }
        else if (words[i] === "cute") {
            words[i] = "cuuuuuuute";
        }
        else if (words[i] === "hate") {
            words[i] = "haaaaaaate";
        }




        // add each word to the replacement
        replacement += words[i];

        // add space unless on the last word
        if (i != words.length - 1) {
            replacement += " ";
        }
    }

    return replacement;
}

function translate() {
    replacement = ""; // clear out the old temporary replacement
    translation = input.value;
    if (translation != "") {   // if input is not blank
        translation = replaceWords(translation);
        translation += "~";
    }
    display.innerHTML = translation;
}

// todo: add moar replacements, account for capital letters, flirty font