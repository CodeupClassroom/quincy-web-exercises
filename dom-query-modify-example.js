
var passwordInput = document.getElementById("password")
    // returns a single HTML element in the form of a JS object
    passwordInput.value 


document.getElementsByClassName("col-md-6");
document.getElementsByTagName("h2");

function convertNodeListToArray(list) {
    var array = [];
    
    for(var i = 0; i < list.length; i++) {
        array[i].push(list[i]);
    } 

    return array;
}
var nodeList = document.getElementsByTagName("p");
var paragraphs = convertNodeListToArray(nodeList);
paragraphs.forEach(function(paragraph) {
    ...
}); 

var listOfStuff = [1, 2, 3, 4, 5, 6];
var i = 0;
delay = 1000;
var intervalId = setInterval(function() {
    if(i > listOfStuff.lenght) {
        clearInterval(intervalId);
    }
    console.log(listOfStuff[i]);
    i++;
}, delay);