/*
       document : twilio_thing.js, for cs-portfolio
     created on : friday, jaunary 8, 2016, 13:12 PM
         author : adrielo (audrey) bongalon
    description : javascript file for the twilio thingy, for 10th grade computer science expeditions course


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

/* global Twilio */




var phoneNumber = document.getElementById("phoneNumberInput");                  // sets variables for the text-input boxes
var messageInput = document.getElementById("messageInput");

var twilioButton = document.getElementById("twiliobutton");                     // sets variables for the buttons
var audreyButton = document.getElementById("twiliobutton-text-audrey");
var jellyButton = document.getElementById("twiliobutton-text-jelly");

var twilioCallButton = document.getElementById("twiliobutton-call");
var callAudreyButton = document.getElementById("twiliobutton-call-audrey");
var callJellyButton = document.getElementById("twiliobutton-call-jelly");




//  -----------------------------------------------------------------------
//  |   notice: since the key has expired, i've gotten rid of the phone   |
//  |   numbers to reduce the risk of unwanted calls and texts            |
//  -----------------------------------------------------------------------

twilioButton.addEventListener("click", function(){                              // looks for someone to click "text number"
    var callNumber = phoneNumber.value;                                         // takes phone number
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage(callNumber, sendMessage);                                // texts message to number
});

audreyButton.addEventListener("click", function(){                              // looks for someone to click "text audrey"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage("123-456-7890", sendMessage);                            // texts message to my number
});

jellyButton.addEventListener("click", function(){                               // looks for someone to click "text jelly"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage("123-456-7890", sendMessage);                            // texts message to jelly's number
});

twilioCallButton.addEventListener("click", function(){                          // looks for someone to click "call number"
    var callNumber = phoneNumber.value;                                         // takes phone number
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay(callNumber, sendMessage);                                 // calls number and says message
});

callAudreyButton.addEventListener("click", function(){                          // looks for someone to click "call audrey"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay("123-456-7890", sendMessage);                             // calls me and says message
});

callJellyButton.addEventListener("click", function(){                           // looks for someone to click "call jelly"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay("123-456-7890", sendMessage);                             // calls jelly and says message
});