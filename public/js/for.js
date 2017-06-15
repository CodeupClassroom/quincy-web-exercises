"use strict";

var userInput;

do {    
    userInput = prompt("Please input a number between 1 and 10.");
} while(isNaN(userInput) || (userInput < 1 || userInput > 10));

for(var i = 1; i <= 10; i++) {
    console.log(userInput + "x" + i + "=" + (i * userInput))
}

// generate 10 random numbers between 20 and 200 
// output to the console whether each number is odd or even.
var max = 200;
var min = 20;
var randomNumber;

for(var i = 1; i <= 10; i++) {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber % 2 == 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd... very odd.");
    }
}

// output should match this pattern
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 0000000000
var stringNumber;

for(var i = 1; i <= 10; i++) {
    stringNumber = i.toString();

    stringNumber = stringNumber.substr(stringNumber.length -1);
    
    console.log(stringNumber.repeat(i));
}


for(var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}