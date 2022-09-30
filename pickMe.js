/**********************************
 FILE NAME: ahoyJquery.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 30 October 2020
<<<<<<< HEAD
 PURPOSE: jQuery code to demonstrate selection and attribute manipulation 
=======
 PURPOSE: jQuery code to demonstrate selection and attribute manipulation
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	// all button click events are linked to functions here
	$('#tagSelect').click(showLinks);
<<<<<<< HEAD
	$('#classSelect1').click(greenMidshipmen);	
=======
	$('#classSelect1').click(greenMidshipmen);
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	$('#classSelect2').click(blueWrdrm);
	$('#idSelect').click(displayCoxswainInfo);
	$('#multiInstruct').click(crazyCapn);
	$('#tagFilter').click(removeHighlight);
	$('#classFilter').click(italicWrdrm);
	$('#idFilter').click(resetCaptain);
<<<<<<< HEAD
	
=======

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	// this function selects by tag, adding a link to all the list item elements
	function showLinks(){
		$("li").append("(<a href='https://en.wikipedia.org/wiki/Seafarer%27s_professions_and_ranks'>More Info</a>)");
	} // end showLinks

	// this function selects by class, highlighting in blue all members of the bluewrdrm class
	function blueWrdrm(){
		$(".wrdRm").css("color","blue").attr("title","highlighted");
	} // end blueWrdrm

	// this function selects by class, highlighting in green all members of the midhsipmen class
	function greenMidshipmen(){
		$(".midshipmen").css("color","green").attr("title","highlighted");
	} // end blueWrdrm

<<<<<<< HEAD
	// this function selects the coxswain by id and adds some text 
=======
	// this function selects the coxswain by id and adds some text
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	function displayCoxswainInfo(){
		$("#coxswain").append(": The steersman of a ship's boat, lifeboat, racing boat, or other boat.");
	} // end displayCoxswainInfo

	// this function has multiple jqueyr instructions in the same line. It makes the catain element have really big and rainbow colored text
	function crazyCapn(){
		$("#captain").attr("title","crazy").append(": Arrrgh, I'm going crazy from the scurvy!").css({
			'background-image':'linear-gradient(violet, indigo, blue, green, yellow, orange, red)',
			'-webkit-background-clip':'text',
			'text-fill-color':'transparent',
			'font-size':'1000%',
			'font-style':'italic'
		});
<<<<<<< HEAD
	} // end crazyCapn 
=======
	} // end crazyCapn
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51

	// this function filters by tag, setting all the 'highlighted' titled list items back to default color values and removing their titles
	function removeHighlight(){
		$("li[title='highlighted']").css("color","black").removeAttr("title");
	} // end removeHighlight

	// this function filteres by class, only taking the even indiced members of the wrdRm class and italicizing them
	function italicWrdrm(){
		$(".wrdRm:nth-child(even)").css("font-style","italic");
	} // end italicMidshipmen
<<<<<<< HEAD
	
=======

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
	// this function selects the element with id of captain only if it has a title of crazy and resets all attributes to default values
	function resetCaptain(){
		$('#captain[title="crazy"]').removeAttr("crazy").css({"background-image":"",
			'background-clip':'border-box',
			'text-fill-color':'black',
			'font-size':'medium',
			'font-style':'normal'
		});
	} // end resetCaptain

});  // end ready function
