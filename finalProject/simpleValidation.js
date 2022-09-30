/**********************************
 FILE NAME: simpleValidation.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 18 March 2021
 PURPOSE: Wrap form scraping into a validator submitHandler function, tell it what to do with errors, and validate the form
 MODIFICATION HISTORY:
 Original Build
***********************************/
$(document).ready(function(){


  outputArea=document.getElementById("outputArea");

  // submitHandler works just like formscrape.js, using jquery selection to output form info to a designated area, errors are set to show after the element
    $.validator.setDefaults({
   
    submitHandler: function() {
        outputArea.innerHTML="";
      
        // For any text fields we just output the id and the value of the field
        $("#userData").find(":text,input[type=tel],input[type=password],input[type=email],#autocomplete").each(function(){
          outputArea.innerHTML+=this.id + ": " + $(this).val()+"<br>";
        });

        // We collect all checked boxes by label and list the ways they heard of the gym
        outputArea.innerHTML+="How they heard of us: <ul>";
        $("#userData").find("input:checked[type=checkbox]").each(function(){
          outputArea.innerHTML+="<li>"+$("label[for='"+$(this).attr("id")+"']").text()+"</li>";
        });
        outputArea.innerHTML+="</ul>";

        // We output the class date and the level of athlete they are by once again grabbing the label off of radio buttons
        outputArea.innerHTML+= "Class date: " + $("#datepicker").datepicker('getDate')+"<br>";
	    outputArea.innerHTML+= "Class: " + $("#selectmenu").val() + "<br>";
        $("#userData").find("input:checked[type=radio]").each(function(){
          outputArea.innerHTML+="Athlete level: " + $("label[for='"+$(this).attr("id")+"']").text()+"<br>";
        });	

      }, // end submitHandler

      errorPlacement: function(error, element){
        error.insertAfter(element);
      } // end errorPlacement

    }); // end setDefaults

    // now that we've told the validator how to do its thing, we use it to validate the form
    $("#userData").validate();

}); // end document.ready
