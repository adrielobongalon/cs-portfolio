/*
       document : piApproximator.js, for cs-portfolio
     created on : monday, july 4, 2016, 20:23 PM        (happy independence day)
         author : adrielo (audrey) bongalon
    description : approximates the value of pi using an infinite series, just for the hell of it


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




// use the terminal and enter "node piApproximator.js" to test

var i = 0;
var pi = 4;

console.log("0 - 4");

for (i = 1; i <= 500000; i++) {         // change the max value for moar accuracy
    if (i % 2 == 1) {
        pi -= (4 / ((i * 2) + 1));
    }
    else {
        pi += (4 / ((i * 2) + 1));
    }

    console.log(i + " - " + pi);
}


console.log("complete");

/*  
                    4       4       4       4       4
        pi = 4  -  ---  +  ---  -  ---  +  ---  -  ----  +  ...
                    3       5       7       9       11
*/