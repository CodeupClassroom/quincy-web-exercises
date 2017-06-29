(function() {
    "use strict";
    
    // Create a button that, when clicked, 
    // makes the last li in each ul have a yellow background.
    $('button').click(function() {
        $('ul').each(function(index, element) {
            $(element).children().last().css('background-color', 'yellow');
        });
    });

    // When any h3 is clicked, the lis underneath it should be bolded. 
    // Use font-weight: bold to achieve this.
    $('h3').click(function() {
        $(this).next().children().css('font-weight', 'bold');
    })

    // When any list item is clicked, 
    // first li of the parent ul should have a font color of blue.
    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue');
    });

})();

