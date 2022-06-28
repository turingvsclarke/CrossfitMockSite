/**********************************
 FILE NAME: buttons.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 04 October 2020
 PURPOSE: Code with functions to be triggered with our five buttons
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	var shipList=[];

	var btn1=document.getElementById("b1");
	var btn2=document.getElementById("b2");
	var btn3=document.getElementById("b3");
	var btn4=document.getElementById("b4");
	var btn5=document.getElementById("b5");
	// get input from the user. Trim the whitespace of the result

	function battle(id,str1,number,str2){
		elOutput=document.getElementById(id);
		elOutput.textContent=str1 + " " + number + " " + str2;
	}

	btn1.onclick=function(){
		battle("call1","The enemy be only",5,"leagues away");
	}

	btn2.onclick=function(){
		battle("call2","Raise the mainsail",6,"feet");
	}

	btn3.addEventListener("click",function(){
		battle("call3","Haul in the haulyards and fix those",9,"ropes to the mizzen mast");
	},false);

	btn4.addEventListener("click",function(){
		battle("call4","Launch",3,"cannonballs portside");
	},false);

	btn5.addEventListener("click",function(){
		battle("call5","Move that cannon to",67,"degrees up from north");
		battle("call6","Drink up",99,"tankards of ale, for victory be ours");
	},false);


});  // end ready function
