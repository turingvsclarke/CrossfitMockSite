/**********************************
 TITLE multiWrites.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 6 August 2020
 PURPOSE: Code that outputs text in all three js ways
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){

var strMessage = "Me and me crew been in Pure Mathematics since before ye could even think to grow a beard";
var elOutput = document.getElementById("textContent");
elOutput.textContent = strMessage;

var strMessage1 = "I love me a good dip in the briny sea. One o' <u><strong>the</strong></u> best swimmers in these waters!";
var elOutput1 = document.getElementById("innerHTML");
elOutput1.innerHTML = strMessage1;


}); // end .ready function
