/**********************************
 FILE NAME: strings.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 02 October 2020
 PURPOSE: Code that prompts the user for a name and generates 12 ship names based on that input
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	var shipList=[];

	// get input from the user. Trim the whitespace of the result
	var sweetName=prompt("What be the name of 'er Majesty's sweetie?").trim();

	// convert the input to camel case, demonstrating charAt, toUpperCase, toLowerCase methods
	sweetName=sweetName.charAt(0).toUpperCase()+sweetName.substring(1).toLowerCase();
	shipList[0]= "The "+sweetName;

	// Demonstrations of the substring method
	shipList[1]="The Revenge of " + shipList[0].substring(4);
	shipList[2]=sweetName + "'s "  + shipList[1].substring(4,11);

	// Demonstration of the replace method
	shipList[3]=shipList[1].replace("Revenge","Wrath");	

	shipList[4]="The CSS "+sweetName;
	shipList[5]="The Royal "+sweetName;
	shipList[6]="The Delight of " + sweetName;
	shipList[7]="Fortune of "+sweetName;

	// demonstration of indexOf method
	shipList[8]="The Flying " + shipList[0].substring(shipList[0].indexOf(" ")).trim();
	shipList[9]="The Murderous "+sweetName;
	shipList[10]="The Wicked "+sweetName;
	shipList[11]=sweetName + "'s Treachery";

	var elOutput=document.getElementById("shipList");
	elOutput.innerHTML="<ul>";
	for(i=0;i<shipList.length;i++){	
		elOutput.innerHTML+="<li>"+shipList[i]+"</li>";
	}

	elOutput.innerHTML+="</ul>";

});  // end ready function
