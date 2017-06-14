"use strict";

var today = "Friday";

console.log("The value of the today variable is " + today);

// single equals aint for comparing values.

if(today = "Monday") {
    console.log("Monday is blue");
} 

if(today = "Tuesday") {
    console.log("Tuesday is gray");
}

if(today = "Wednesday") {
    console.log("And Wednesday is too");
}
    
console.log("The value of the today variable after accidentally using single = instead of == or === is " + today);