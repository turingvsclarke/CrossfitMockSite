/**********************************
 TITLE iffy.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 21 September 2020
 PURPOSE: Code that outputs different messages given a user's response.
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
<<<<<<< HEAD
$(document).ready(function(){  
=======
$(document).ready(function(){
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51

var input = prompt("Did you arrive to port on time?(Yes/No)");
input = input.toUpperCase();
var output;
switch (input) {

	case 'YES':
		output = "Ye be on time! Urrgh.... I guess ye earned the dubloons. Here's extra!";
		break;

	case 'NO':
		output = "Argh! Walk the plank straight to Davy Jones locker!!";
		break;

	default:
		output = "Aarr..? Yer makin' me scratch my head. That isn't a valid reply!";
		break;


} // end switch

var el= document.getElementById("message");
el.textContent = output;

<<<<<<< HEAD
}); // end .ready function
=======
}); // end .ready function
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
