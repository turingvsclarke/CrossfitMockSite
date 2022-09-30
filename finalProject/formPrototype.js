/**********************************
 FILE NAME: formPrototype.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 18 March 2021
 PURPOSE: Make the form output HelloWorld to the output area upon submission and not reload
 MODIFICATION HISTORY:
 Original Build
***********************************/
$(document).ready(function(){
    
    $("#userData").submit(function(e){
        // prevent the form submission from reloading the page
        e.preventDefault();

        // add 'HelloWorld' to the output area
        $("#outputArea").html('<p>Hello World</p>');

    }); // end submit



}); // end document.ready