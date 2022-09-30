/**********************************
 FILE NAME: pullingThrough.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 18 March 2021
 PURPOSE: Take values from all the fields in the form and add them to the content of the output area
 MODIFICATION HISTORY:
 Original Build
***********************************/
$(document).ready(function(){
    outputArea=document.getElementById("outputArea");

    // when the form is submitted, we prevent it from refreshing
    // scrape the data using jquery selection and add it to the output area
    $('#userData').submit(function(e){
        outputArea.innerHTML="";
        e.preventDefault();

        // For any text fields we just output the id and the value of the field
        $(this).find(":text,input[type=tel],input[type=password],input[type=email],#autocomplete").each(function(){
          outputArea.innerHTML+=this.id + ": " + $(this).val()+"<br>";
        });

        // We collect all checked boxes by label and list the ways they heard of the gym
        outputArea.innerHTML+="How they heard of us: <ul>";
        $(this).find("input:checked[type=checkbox]").each(function(){
          outputArea.innerHTML+="<li>"+$("label[for='"+$(this).attr("id")+"']").text()+"</li>";
        });
        outputArea.innerHTML+="</ul>";

        // We output the class date and the level of athlete they are by once again grabbing the label off of radio buttons
        outputArea.innerHTML+= "Class date: " + $("#datepicker").datepicker('getDate')+"<br>";
	outputArea.innerHTML+= "Class: " + $("#selectmenu").val() + "<br>";
        $(this).find("input:checked[type=radio]").each(function(){
          outputArea.innerHTML+="Athlete level: " + $("label[for='"+$(this).attr("id")+"']").text()+"<br>";
        });


      }); // end submit function

}); // end document.ready function
