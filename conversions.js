/**********************************
 TITLE conversions.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 7 September 2020
 PURPOSE: Code that prompts the user for input, makes a numeric conversion, then outputs the result.
 MODIFICATION HISTORY:
 Original Build
***********************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){

var strName = "";
var strQuestion = "What be y'ere name, eh?";
var strDefault = "The fearsomest Cap'n Teddy Bear";
var strName = prompt(strQuestion, strDefault);

var strDubloons = "";
var strAmountRequest = "How many o' those cursed dubloons ye be haulin' through?";
var strDefault = "0";
var strDubloons = prompt(strAmountRequest, strDefault);

var intDubloons = parseInt(strDubloons);

var intProfit = intDubloons*287;

var elOutput = document.getElementById("confessions");
elOutput.textContent = "These be the confessions of " + strName;

var elOutput2 = document.getElementById("textContent");
elOutput2.textContent = "I, " + strName + ", have plundered " + intDubloons + " gold dubloons for a total profit of " + intProfit + ". Arggghh!!";

});  // end ready function
