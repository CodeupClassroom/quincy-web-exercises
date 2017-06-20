"use strict";

    // todo:
    // Create an array of objects that represent books.
    // Each book should have a title and an author property.
    // The author property should be an object with a firstName and lastName.
    // Be creative and add at least 5 books to the array

    var books = [
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }   
        }, 
        {
            title: "One Fish, Two Fish, Red Fish, Blue Fish",
            author: {
                firstName: "Dr. Theophrastus",
                lastName: "Seuss"
            }
        }, 
        {
            title: "Oh, The Places you go!",
            author: {
                firstName: "Dr. Theophrastus",
                lastName: "Seuss"
            }
        }
    ];

console.log("Orsinger's Postulate of Approaching Loops");
console.log("Start by ignoring the loop completely.");
console.log("If you have an array of things named with a plural variable name,");
console.log("Then, make a singular version of that variable name and assign the first element of that array.");
console.log("Console.log that first element of the array.");

// var index = 0;
// var book = books[index];

books.forEach(function(book, index, array) {

    console.log("Book #" + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
});

console.log("after console.logging a working solution for the first element of the array");
console.log("Reassign your singular variable to hold the next element of that array");

console.log("=======");

console.log("One you have your solution without the loop, write your forEach with the singular variable name as the parameter");
console.log("Then move your code into the forEach function's body");