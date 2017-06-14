"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

// TODO: create a case statement that will handle every color except indigo and violet
// TODO: when a color is encountered log a message that tells the color, and an object of that color
// TODO: create a default case that will catch indigo and violet
// TODO: for the default case, log: I do not know anything by that color.

switch (color) {
    case 'red':
        console.log("Roses are red, yo!");
        break;
    case 'orange':
        console.log("Orange you glad I didn't say banana.");
        break;
    case 'yellow':
        console.log("Watch out where the huskies go and don't you eat that yellow snow!!!");
        break;
    case 'green':
        console.log("Kale is green. Yay, kale!");
        break;
    case 'blue':
        console.log("Blue roses are blue.");
        break;
    default:
        console.log("I don't know anything about that color.");
        break;
}

var cameron = 180;
var ryan = 250;
var george = 320;
var discountedAmount;
var finalTotal;

if(cameron > 200) {
    discountedAmount = cameron * .1;
    finalTotal = cameron - discountedAmount;
    console.log("Cameron got a discount on " + cameron + " of " + discountedAmount);
    console.log("Cameron's final payment is " + finalTotal);
} else {
    console.log("Cameron paid " + cameron + " and did not get a discount.");
}   

if(ryan > 200) {
    discountedAmount = ryan * .1;
    finalTotal = ryan - discountedAmount;
    console.log("Ryan got a discount on " + ryan + " of " + discountedAmount);
    console.log("Ryan's final payment is " + finalTotal);
} else {
    console.log("Cameron paid " + cameron + " and did not get a discount.");
}   

if(george > 200) {
    discountedAmount = george * .1;
    finalTotal = george - discountedAmount;
    console.log("George got a discount on " + george + " of " + discountedAmount);
    console.log("George's final payment is " + finalTotal);
} else {
    console.log("George paid " + george + " and did not get a discount.");
}   

// flip a coin
var flipACoin = Math.floor(Math.random()* 2)

if(flipACoin == 0) {
console.log("BUY THE CAR!");
} else {
console.log("Buy a house!");
}

//Each customer is given a randomly generated "lucky number" between 0 and 6. 
// If your lucky number is 0 you have no discount, 
// if your lucky number is 1 you'll get a 10% discount, 
// if it's 2, discount is 25%, 
// if it's 4, 50%,
// if it's 5 you'll get all for free!. 
// Log how much you will have to pay if your receipt is for $60. Every time you reload your page you should see a different result. Use a switch statement for this exercise.

console.log("=====")
console.log("Lucky number time!");

var luckyNumber = Math.floor(Math.random()* 6)
var subtotal = 60;
var discount = 0;
var newTotal;

console.log("Your lucky number is " + luckyNumber);

switch(luckyNumber) {
    case 0: 
        console.log("You get no discount.");
        discount = 0;
        break;
    case 1:
        console.log("You get a 10 percent discount.");
        discount = 0.1;
        break;
    case 2:
        console.log("You get a 25 percent discount.");
        discount = 0.25;
        break;
    case 4:
        console.log("You get a fifty percent discount!");
        discount = 0.5;
        break;
    case 5:
        console.log("You get 100% discount!");
        discount = 1.0;
        break;
    default:
        console.log("This lucky number has no discount");
        discount = 0;
        break;
}

newTotal = subtotal - (subtotal * discount);
console.log("Your final total after discount is " + newTotal);

// using confirm 
console.log("=============");
var number = prompt("Please enter a number");
if(isNaN(parseFloat(number))) {
    console.log(number + " aint a number.");
} else {
    if(number % 2 == 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd")
    }

    console.log(number + " plus 100 is " + (number + 100));

    if(number < 0) {
        console.log(number + " is negative");
    } else {
        console.log(number + " is positive");
    }
}