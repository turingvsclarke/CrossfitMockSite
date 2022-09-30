/**********************************
 FILE NAME: ahoyJquery.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 23 October 2020
<<<<<<< HEAD
 PURPOSE: jQuery code to append to or rewrite a paragraph 
=======
 PURPOSE: jQuery code to append to or rewrite a paragraph
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
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
<<<<<<< HEAD
	});	
=======
	});
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51

});  // end ready function
