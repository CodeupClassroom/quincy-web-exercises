"use strict";

var favoriteColor = prompt("What's your favorite color?");
console.log("The color you input is " + favoriteColor);

var answer = confirm("do you want to tell us your favorite number?");

if(true) {
  console.log("True is true");
} else {
  console.log("true aint true")
}

if(answer) {
  // single = is assignment operator
  var myFavoriteNumber = prompt("What is your favorite number?");

  console.log("Your answer was " + myFavoriteNumber);

  console.log("My favorite number is " + myFavoriteNumber);

  // == compares values but not data type
  if(myFavoriteNumber == "23") {
    console.log("Your favorite number is correct. It's 23");
  } 

  // === compares values and data types
  if(myFavoriteNumber === "23") {
    console.log("Really? Your favorite number is a string? Wow!");
  }

}


var result = 2 + 2;
console.log("Result of 2 + 2 is " + result);

result = "2" + 2;
console.log("Result of '2' + 2 is " + result);


