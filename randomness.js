/**********************************
 TITLE randomness.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 7 September 2020
 PURPOSE: Illustrating math and objects.
 MODIFICATION HISTORY:
 Original Build
***********************************/
$(document).ready(function(){

/******** Pirate object
parameters: rank, html tag id
methods: speak, getNumber
*********/
function Pirate(rank, name, id){
	this.name = name;
	this.rank = rank;
	this.id = id;
	this.element = document.getElementById(id);


/***********
Name: speak
Purpose: posts the pirate's message to its div element
no return values.
Parameters: the pirate's phrase
*****/
	this.speak = function(phrase){

		this.element.innerHTML +="<br>"+phrase;
	}; // end speak


/**************
NAME: number
   Purpose: Sets the pirate's number to be a random number
   No parameters. Returns the pirate's number.
**************/
	this.number = function(){

		return Math.floor(Math.random()*10)+1;

	}; // end number
} // end Pirate
var cpnSparrow = new Pirate("Captain","Jack Sparrow","cpnSprw");
var gbs = new Pirate("Skipper","Gibbs","Gibbs");
var jack = new Pirate("Sailor","Jack Turner","JackTurner");
var pintel = new Pirate("Skipper","Pintel","Pintel");
var gbsNumber = gbs.number();
var jackNumber = jack.number();
var pintelNumber = pintel.number();
var cpnNumber = cpnSparrow.number();


cpnSparrow.speak("I've selected a number. Let the games begin! Arrrrgh!");
gbs.speak("The number is " + gbsNumber + " or I'll be walkin' the plank");
jack.speak("Davy Jones himself assured me the number be " + jackNumber);
pintel.speak("The only thing surer than the scurvy is that " + pintelNumber+ " be the number!");

/******* Name: winTest
	Purpose: check to see if anyone won the game
*****/
function winTest(){
	var win=0;
	if(cpnNumber==gbsNumber){
		gbs.speak("I be a winner!! Arrrgh!");
		win=1;
		} // end if
	if(cpnNumber==jackNumber){
		jack.speak("I be a winner!! Arrrgh!");
		win=1;
		} // end if
	if(cpnNumber==pintelNumber){
		pintel.speak("I be a winner!! Arrrgh!");
		win=1;
		} // end if

	if(win==0){
		cpnSparrow.speak("I be the champion!!")
	}; // end if

}; // end winTest


// delay function according to page 517 of the text
var timeout;
timeout=setTimeout(function(){
	cpnSparrow.speak("The number is " + cpnNumber);
	winTest();
	},3000);




});   // end document.ready
