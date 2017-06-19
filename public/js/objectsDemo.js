"use strict";

// Arrays are lists of values

// Objects are containers for state and behavior
// Objects bundle together facts about our state and make behavior available to us

// We store objects to a variable
// Properties on objects are variables on objects

// Object literal syntax (newer)
var car = {};

car.make = "VW";
car.model = "Bug";
car.miles = 350000;

console.log("My car is a " + car.make + " " + car.model + ". And it has " + car.miles + " miles.");









// function makeCar(make, model, miles) {
//     var car = {}; 
//     car.make = make;
//     car.model = model;
//     car.miles = miles;
//     return car;
// }

// function makeCar(make, model, miles) {
//     var car = {
//         "make": make,
//         "model": model,
//         "miles": miles
//     }
//     return car;
// }

// var make = prompt("Enter the make of your vehicle");
// var model = prompt("Enter the model of that vehicle");
// var miles = prompt("how many miles?");

// var myCar = makeCar(make, model, miles);
// console.log(myCar);





// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];

// JSON == javascript object notation

// cars.forEach(function(car) {
//     console.log("We have a " + car.make + " " + car.model + " for sale by " + car.owner.name);
//     console.log("Features: " + car.features.join(", "));
// });


var car = {
    "make": "Tesla",
    "model": "Model S",
    "miles": 0,
    "speed": 0,
    "accelerate": function() {
        this.speed++;
    },
    "brake": function() {
        this.speed--;
    },
    "fullStop": function() {
        this.speed = 0;
    }
}