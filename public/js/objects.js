(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    // var person = {};

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

     // person.firstName = "Justin";
     // person.lastName = "Reich";
    


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    // person.sayHello = function () {

    //     return "Hello from " + person.firstName + " " + person.lastName;

    // };


    // console.log(person.sayHello());































    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper, index){
        var finalTotal = 0;
        var discountedAmount = 0;

        if (shopper.amount > 200) {
            discountedAmount = shopper.amount * .1;
            finalTotal = shopper.amount - discountedAmount;
            console.log(shopper.name + " got a discount on " + shopper.amount + " of " + discountedAmount);
        } else {
            console.log(shopper.name + " paid " + shopper.amount + " and did not have a discount");
            finalTotal = shopper.amount;
        }

        console.log(shopper.name + " had a final total of " + finalTotal);

        console.log("========================================");
    });




})();