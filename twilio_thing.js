//  Document   : twilio_thing.js, for cs-portfolio
//  Created on : Friday, Jaunary 8, 2016, 13:12 PM
//  Author     : Adrielo (Audrey) Bongalon
//  Description: javascript file for the Twilio thingy, for 10th grade computer science expeditions course


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


var phoneNumber = document.getElementById("phoneNumberInput");                  // sets variables for the text-input boxes
var messageInput = document.getElementById("messageInput");

var twilioButton = document.getElementById("twiliobutton");                     // sets variables for the buttons
var audreyButton = document.getElementById("twiliobutton-text-audrey");
var jellyButton = document.getElementById("twiliobutton-text-jelly");

var twilioCallButton = document.getElementById("twiliobutton-call");
var callAudreyButton = document.getElementById("twiliobutton-call-audrey");
var callJellyButton = document.getElementById("twiliobutton-call-jelly");


twilioButton.addEventListener("click", function(){                              // looks for someone to click "text number"
    var callNumber = phoneNumber.value;                                         // takes phone number
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage(callNumber, sendMessage);                                // texts message to number
});

audreyButton.addEventListener("click", function(){                              // looks for someone to click "text audrey"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage("650-720-6166", sendMessage);                            // texts message to my number
});

jellyButton.addEventListener("click", function(){                               // looks for someone to click "text jelly"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.sendMessage("650-278-3676", sendMessage);                            // texts message to jelly's number
});

twilioCallButton.addEventListener("click", function(){                          // looks for someone to click "call number"
    var callNumber = phoneNumber.value;                                         // takes phone number
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay(callNumber, sendMessage);                                 // calls number and says message
});

callAudreyButton.addEventListener("click", function(){                          // looks for someone to click "call audrey"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay("650-720-6166", sendMessage);                             // calls me and says message
});

callJellyButton.addEventListener("click", function(){                           // looks for someone to click "call jelly"
    var sendMessage = messageInput.value;                                       // takes message
    Twilio.callAndSay("650-278-3676", sendMessage);                             // calls jelly and says message
});