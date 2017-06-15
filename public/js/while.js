"use strict";

var i = 1;

var endPoint = 65536;

while(i < endPoint) {
    // reassign i to hold the result of (i * 2)
    // new value of i gets the (old value of i * 2)
    i = i * 2;
    console.log(i);
}

 //  __  ___  ____     ___  ____  ____   __   _  _ 
 // (  )/ __)(  __)   / __)(  _ \(  __) / _\ ( \/ )
 //  )(( (__  ) _)   ( (__  )   / ) _) /    \/ \/ \
 // (__)\___)(____)   \___)(__\_)(____)\_/\_/\_)(_/

var min = 50;
var max = 100;
var allCones = Math.floor(Math.random() * (max - min)) + min;
var conesOrdered;

console.log("It's a great day to sell ice-cream. I have to sell all " + allCones + " of my cones!");

do {
    // get a random number of cones ordered between 1 and 5.
    conesOrdered = Math.floor(Math.random() * 5) + 1;

    if(conesOrdered > allCones) {
        console.log("Cannot sell you " + conesOrdered + " cones. I only have " + allCones + ".");
        continue;
    }

    // calculate the result of allCones minus conesOrdered
    // store that result to the variable allCones to reflect your new inventory.
    allCones = allCones - conesOrdered;
    console.log("Thank you for purchasing " + conesOrdered + " number of cones.");
    console.log("I have " + allCones + " remaining....");   

} while (allCones > 0);

console.log("Yay! I sold all my cones. Now I get to go home!");
