/**********************************
 FILE NAME: moversShakers.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 03 November 2020
 PURPOSE: jQuery code to fire effects when buttons are pressed 
 MODIFICATION HISTORY:
 Original Build
 11/08/20 Finished the functions
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){

	// all button click events are linked to functions here
	$(window).resize(resize);
	$('#magicText').keydown(keyDown);	
	$('#danger').mouseover(tempt).mouseout(temptOff);

	// this function shows an alert, shaming the user for resizing the window
	function resize(){
		alert("Hey! Why'd you do that? I was beautiful at that size.");
	} // end resize

	// this function shows an encrypted version of the user's text below their input
	function keyDown(){
		$("#keydownTarget").text($('#magicText').val());
	} // end keydown	// this function gives tempting messages whenever their mouse goes over the button
	function tempt(){		
		var temptations=["Psst. Hey you! Why don't you just press the button?","Surely it can't be that bad. C'mon, just a little click","Do it!\nDo it!\nDo it!","Hey you! Press that button!"];
		var i=Math.floor(Math.random()*temptations.length);
		$("#temptingText").text(temptations[i]);
	} // end tempt

	// Remove the tempting text when the user takes the mouse off the button
	function temptOff(){
		$("#temptingText").text("");
	} // end temptOFf

});  // end ready function
