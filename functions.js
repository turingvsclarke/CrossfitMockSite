/**********************************
 FILE NAME: functions.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 22 January 2021
 PURPOSE: Function that will output some orders form the Captain to the html page 
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	
	/***function purpose: output a string concatenated with two numbers to a passed div id
 		parameters:div id, number, string 1, string 2
		no return values. outputs to page within function 
	***/	
	function order(id,number,str1,str2){
		elOutput=document.getElementById(id);
		elOutput.textContent+=str1 + " " + number + " " + str2;		
	}

	order("call1",Math.floor(Math.random()*100),"We need ","barrels of rum, stat!");
	order("call2",Math.floor(Math.random()*100),"Turn the ship","degrees West");
	order("call3",Math.floor(Math.random()*100),"Make","men walk the plank");
	order("call4",Math.floor(Math.random()*100),"Give each men","percent rations for such bad behavior");
	order("call5",Math.floor(Math.random()*100),"Lower the sails by","inches to go faster");
	order("call6",Math.floor(Math.random()*100),"Get the boat up to","knots by whatever means necessary");

});  // end ready function
