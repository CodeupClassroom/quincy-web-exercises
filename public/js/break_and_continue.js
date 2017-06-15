"use strict";

var userInput;

do {
    userInput = prompt("Please input an odd number between 1 and 50");
} while(isNaN(userInput) || userInput > 50 || userInput < 1 || userInput % 2 == 0);


for(var i=1; i <= 50; i+=2) {
    if(i == userInput) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}

