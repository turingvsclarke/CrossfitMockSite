/**********************************
 FILE NAME: customValidation.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 18 March 2021
 PURPOSE: Add complexity to the validator, creating custom rules and errors for each field. The big thing we want is to ensure
 you login as a memberXORathlete
 MODIFICATION HISTORY:
 Original Build
***********************************/
$(document).ready(function(){
 
  outputArea=document.getElementById("outputArea");

  
    $.validator.setDefaults({
  
    // We use jquery selection to output form info to a designated area, provided the rules we've set for each input value are followed
    submitHandler: function() {
        outputArea.innerHTML="";

        // For any text fields we just output the id and the value of the field
        $("#userData").find(":text,input[type=tel],input[type=password],input[type=email],#autocomplete").each(function(){
          outputArea.innerHTML+=this.id + ": " + $(this).val()+"<br>";
        }); // end each
	
	// Collect all checked boxes by label and list the ways they heard of the gym
        outputArea.innerHTML+="How they heard of us: <ul>";
        $("#userData").find("input:checked[type=checkbox]").each(function(){
          outputArea.innerHTML+="<li>"+$("label[for='"+$(this).attr("id")+"']").text()+"</li>";
        }); // end each

        outputArea.innerHTML+="</ul>";

	// Output class date selected and level of athlete they are by grabbing labels off the radio buttons/datepicker/class selector
        outputArea.innerHTML+= "Class date: " + $("#datepicker").datepicker('getDate')+"<br>";
        $("#userData").find("input:checked[type=radio]").each(function(){
          outputArea.innerHTML+="Athlete level: " + $("label[for='"+$(this).attr("id")+"']").text()+"<br>";
        }); // end each
 
      }, // end submitHandler
 
      errorPlacement: function(error, element){
  	// Put the referral method message after the question, not after each individual option
        if (element.attr("name")=="referralMethod"){
          error.insertAfter($("#referralQuery"));
        }
	// Make sure the spinner error message isn't placed within the spinner
        else if (element.attr("name")=="crossfitExperience"){
          error.insertAfter($("#spinnerContainer"));
        }
	// everything else will just be placed after the element
	else{
	  error.insertAfter(element);
	}
      } // end errorPlacement
 
    }); // end setDefaults
   
    // now that we've told the validator how to do its thing, we use it
    $("#userData").validate({
      ignore: [],
 
      // validation rules
      rules: {
        
        memberLogin: {
          // require memberLogin if first name isn't given
	  required: function(){
		// Find out if the fname field was entered
	  	return $("#fname").val().length<1;
	  } // end function
        },
 
        memberPassword: {
	  // require a password if 
	  required : function(){
		// Find out if the memberLogin was entered
		return $("#userEmail").val().length>1;
	   } // end function 
        },
        
        firstName: {
	  // require firstName if no email login was provided
          required: function(){
		return $("#userLogin").val().length<1;
	  } // end function
        },
        
        lastName: {
	  // require if they entered a first name
          required: function(){
		return $("#fname").val().length>1;
	  } // end function 
        },
        
        phone: {
          required: true,
          phoneUS: true
        },
        
        email: {
          email: true
        },
      
        datePicker: {
          required: true
        },
      
      // have them check at least one way they heard of the box
        referralMethod: {
           required: true
        },
 
      // if they checked 'Other', the other field is required
        otherReason: {
          required: "#info4:checked"
        },
 
        crossfitExperience: {
          required: true,
          min: 0
        }
 
 
      }, // end rules
      messages: {
	
        memberLogin: {
          required: "Please login. Guest/new athlete? Use the form below.. and welcome :)" 
        },
 
        memberPassword: {
          required: "Please enter your password"
        },
        
        firstName: {
          required: "Please let us know what to call you. Returning member? Sign in above"
        },
 	
        lastName: {
          required: "Please enter your last name"
        },
     
        phone: {
          required: "Please enter your phone number in case of class cancellation/closure",
          phoneUS: "Please follow the format for a valid US phone number"
        },
 
        email: {
          email: "Please follow the placeholder for valid email format"
        },
     
        datePicker: {
          required: "Please select a date for your class"
        },
 
        referralMethod: {
          required: "Please tell us how we reached you"
        },
 
        otherReason: {
          required: "Let us know how you found us!",
        },
 
        crossfitExperience: {
          required: "Please help us cater your experience to your skill level",
          min: $.validator.format("Please enter a valid number of years you've been doing Crossfit")
        }
 
      } // end messages
    }); // end validate
 
}); // end document.ready