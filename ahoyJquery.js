/**********************************
 FILE NAME: ahoyJquery.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 23 October 2020
 PURPOSE: jQuery code to append to or rewrite a paragraph 
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	$('#append').on('click',function() {
		$("p").append("<br>Ahoy jQuery World!")
	});

	$('#html').on('click',function() {
		$("p").html("<br>Ahoy jQuery World!")
	});	

});  // end ready function
