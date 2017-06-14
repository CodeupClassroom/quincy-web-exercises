"use strict";
var today == prompt("What day is it today?");
var response = confirm("Are ya'll cool with ifs and ready to move forward?");

if(response && today == "Wednesday") {
  alert("yay! we get to introduce else");
} else {
  console.log("We'll stay on ifs and only ifs");
}

console.log("Thank you for using conditional.js the newest JS library!");

"use strict";

var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    result = "What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    result = "Just plain cheese? Okay...");
} else if(pizzaPreference == "olive") {
    result = "Olive pizza is rad");
} else {
    result = pizzaPreference + " isn't my favorite, but let's order some!");
}

console.log(result);

// // unary operators
// !, ++, --,

// // binary operators
// ==, ===

// ternary operator
// (condition) ? then : else
var favoriteNumber = 23;

console.log(favoriteNumber == 42 ? "42 is a great favorite number" : "anything else other than 42";)






var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    case "olive":
        alert("Just plain olive? Okay...");
        break;
    case "onion":
        alert("Just plain onion? Okay...");
        break;
    case "tomato":
        alert("Just plain tomato? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}
