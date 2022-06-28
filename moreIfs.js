/**************************************
 TITLE: moreIfs.js
 AUTHOR: Ryan Eades (RE)
 PURPOSE: Handle user input and use if/else and switch statements to post a response
 DATE: 23 September 2020
 MODIFICATION HISTORY:
 ORIGINAL BUILD
***************************************/
// This function is a jquery wrapper for javascript
$(document).ready(function(){

var intCurrentLatitude=0;
var intCurrentLongitude=0;
var intDestinationLatitude=0;
var intDestinationLongitude=0;

intCurrentLatitude=prompt("Please enter the integer degrees for your current latitude",5);
intCurrentLongitude=prompt("Please enter the integer degrees for your current longitude",5);
intDestinationLatitude=prompt("Please enter the integer degrees for the latitude of your destination",5);;
intDestinationLongitude=prompt("Please enter the integer degrees for the longitude of your destination",5);


document.getElementById("echo").innerHTML=
	"<div>Current Latitude: "+ intCurrentLatitude + "</div>" +
	"<div>Current Longitude: "+ intCurrentLongitude + "</div>" +
	"<div>Latitude of Destination: " + intDestinationLatitude + "</div>" +
	"<div>Longitude of Destination: " + intDestinationLongitude + "</div>"
	;

intCurrentLatitude=parseInt(intCurrentLatitude);
intCurrentLongitude=parseInt(intCurrentLongitude);
intDestinationLatitude=parseInt(intDestinationLatitude);
intDestinationLongitude=parseInt(intDestinationLongitude);

var output;

if((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude))
	output = "Head North East";
else if((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
	output = "Head North West";
else if((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
	output = "Head South West";
else if((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude))
	output = "Head South East";
else
	output = "Land Ho!";

// end if else block

document.getElementById("ifElse").textContent = output;

switch (true) {

	case ((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude)):
		output = "Head North East";
		break;

	case ((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
:
		output = "Head North West";
		break;

	case ((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
:
		output = "Head South West";
		break;
	case ((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude)):
		output = "Head South East";
		break;
	default:
		output = "Land Ho!";
		break;

} // end switch

document.getElementById("caseSwitch");

}); // end .ready function
