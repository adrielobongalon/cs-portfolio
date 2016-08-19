/*
       document : collatzConjecture.js, for cs-portfolio
     created on : tuesday, august 9, 2016, 10:19 AM
         author : adrielo (audrey) bongalon
    description : does the collatz conjecture thing, just for the hell of it


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

var num = 75128138247;  // this is the starting number. change at will
var count = 0;

console.log(count + "  -  " + num);

function math(input) {
  if (input % 2 === 0) {
    return (input / 2);
  }
  else {
    return ((input * 3) + 1);
  }
}

function cycle() {
  num = math(num);
  count++;
  console.log(count + "  -  " + num);

  if (num != 1) {
    cycle();
  }
}

cycle();




/*
    the collatz conjecture:
    -----------------------
    take a number "n"
    if n is even, divide by 2
    if n is odd, multiply by 3, then add 1
    you should always end up with 1

    see http://xkcd.com/710/




  according to wikipedia,
  the longest progression for any initial starting number
    less than 10          is 9                which has 19 steps
    less than 100         is 97               which has 118 steps
    less than 1,000       is 871              which has 178 steps
    less than 10,000      is 6,171            which has 261 steps
    less than 100,000     is 77,031           which has 350 steps
    less than 1 million   is 837,799          which has 524 steps
    less than 10 million  is 8,400,511        which has 685 steps
    less than 100 million is 63,728,127       which has 949 steps
    less than 1 billion   is 670,617,279      which has 986 steps
    less than 10 billion  is 9,780,657,631    which has 1,132 steps
    less than 100 billion is 75,128,138,247   which has 1,228 steps
*/