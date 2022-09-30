/**********************************
 FILE NAME: moversShakers.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 03 November 2020
<<<<<<< HEAD
 PURPOSE: jQuery code to fire effects when buttons are pressed 
=======
 PURPOSE: jQuery code to fire effects when buttons are pressed
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){

	// all button click events are linked to functions here
	$('#hide').click(hideShip);
<<<<<<< HEAD
	$('#show').click(showShip);	
=======
	$('#show').click(showShip);
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	$('#toggle').click(toggleShip);
	$('#slideUp').click(slideUpShip);
	$('#slideDown').click(slideDownShip);
	$('#fadeOut').click(fadeOutShip);
	$('#fadeIn').click(fadeInShip);

	/********Chain of effects*******/
	// this function hides the target, then fades it back in after 7 sec
	function hideShip(){
		$("#target").hide().delay(7000).fadeIn(500);
	} // end hideShip

	// this function shows the target
	function showShip(){
		$("#target").show();
	} // end showShip

	// this function toggles between showing and hiding the target, depending on it's state when fired
	function toggleShip(){
		$("#target").toggle();
	} // end toggleShip

	// this function takes 3 seconds to slide the target up into view
	function slideUpShip(){
		$("#target").slideUp(3000);
	} // end slideUpShip

	// this function takes 3 seconds to slide the target down into view
	function slideDownShip(){
		$("#target").slideDown(3000);
	} // end slideDownShip


	/********Multiple parameters************/
<<<<<<< HEAD
	// this function takes 3 seconds to fade the target out of view 
=======
	// this function takes 3 seconds to fade the target out of view
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	function fadeOutShip(){
		$("#target").fadeOut(3000,"linear",function(){$('#target').fadeIn()});
	} // end fadeOut

	// this function takes 3 seconds to fade the target into view
	function fadeInShip(){
		$("#target").fadeIn(3000,"linear");
	} // end fadeInShip

});  // end ready function
