"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

console.log("The random color chosen is " + color);
if(color === "red") {
    console.log("Roses are red");
} else if (color === "orange") {
    console.log("Orange you glad I didn't say banana.");
} else if(color === "yellow") {
    console.log("Watch out where the Huskies go and don't you eat that yellow snow.");
} else if(color === "green") {
    console.log("Green is the color of kale. Yay. Tasty kale!");
} else if(color === "blue") {
    console.log("Blue roses are blue");
} else {
    console.log("I don't know anything about that color.")
}

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

console.log("The random color generated is " + color);
console.log("My favorite color is " + favorite);

console.log(color == favorite ? "The random color mathces!" : "Random and favorite colors are different.");

