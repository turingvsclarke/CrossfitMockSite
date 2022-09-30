/**********************************
 FILE NAME: loopingArrays.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 30 September 2020
 PURPOSE: Code that prompts the user for a character, checks the input, then converts from char->ASCII->binary->array->true/false output
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){
	var inputLength = 0;
	while(inputLength!==1){
		var charInput = prompt("Please enter a single character");
		inputLength=charInput.length;
	}

	/******
	Purpose: Take a character and return an integer representing an ascii value, thus converting radices
        Parameters: single character/letter
        Return: integer representing an ascii value
        *******/
        function parseAscii(chrCharacter)
        {
                intAscii = chrCharacter.charCodeAt(0);
                return intAscii;
        }

        /*******
         Purpose:This function uses parseInt, which parses a string and returns, in this case, a binary string. We ensure this is at least 8 bits to make the output more exciting
         Parameters:single integer representation of an ascii value
         Return: binary, base 2 representation of the number passed to this function
         *******/
        function parseBin(intAscii){
                strBin = parseInt(intAscii, 10).toString(2);
                if(strBin.length<8){

                        var intPlaceHolders = 8-strBin.length;
                        for(var i=0;i<intPlaceHolders;i++){
                                strBin = "0"+strBin;
                }
		
        }
		return strBin;
	}
	var asciiInput=parseAscii(charInput);
	var binaryInput = parseBin(asciiInput);
	var binaryArray = binaryInput.split("");
	var elOutput=document.getElementById("booleanOutput");

	for(i=0;i<binaryArray.length;i++){	
		if(parseInt(binaryArray[i]))
			elOutput.textContent+="true";
		else
			elOutput.textContent+="false";
	}

});  // end ready function
