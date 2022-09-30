/**********************************
 FILE NAME: customValidation.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 18 March 2021
 PURPOSE: Add complexity to the validator, creating custom rules and errors for each field. The big thing we want is to ensure
 you login as a memberXORathlete
 MODIFICATION HISTORY:
 Copied simpleValidation.js
 Added all the fields in the required section and corresponding messages in the 
***********************************/
$(document).ready(function(){
 
$.validator.setDefaults({
  
    // We use jquery selection to output form info to a designated area, provided the rules we've set for each input value are followed
    submitHandler: function() {

	/////////// FORM SCRAPING //////////////////////

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

      ///////////// ERROR PLACEMENT //////////////////////////////
 
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
    
	//////////////// VALIDATION //////////////////////////////////////////
	/***
	Function Name: Validate
	Purpose: Make sure that we get all the information we need from the user and let them know what information to give
	If they've entered a member email, all they have to enter is class information and a password
	If they've entered a first name, they don't have to enter any member information, but should have to enter contact info+experience
	Execution: Store variables outside the function whose values indicate whether or not a memberEmail or guest name have been entered
	Use those to control everything's requirements.
	Add miscellaneous details to phone, emails, etc. to ensure the data that IS entered is actually VALID data for that field
	***/
	// Determine whether or not the user is an email or a guest depending on the userEmail, fname text fields
	var guest = () => $("#userEmail").val().length<1;
	var member = () => $("#fname").val().length<1;

	$("#userData").validate({
    	rules: {
		// Require them to either login as a member or as guest
        	memberEmail: {
            		required: member
            	}, // end memberLogin

		// Require a password if they're logging in as a member
		memberPassword: {
			required : member
		}, // end memberPassword

		// See memberLogin comments
            	firstName: {
            		required: guest
            	}, // end firstName

		lastName: {
			// require last name if they're logging in as guest
			required: guest
		}, // end lastName

		phone: {
          		required: guest,
          		phoneUS: true
        	},
        
        	email: {
			required: guest,
          		email: true
        		},
            
      		// have them check at least one way they heard of the box
        	referralMethod: {
           		required: guest
        		},
 
      		// if they checked 'Other', the other field is required
        	otherReason: {
          		required: "#checkbox-4:checked"
        		},
 
        	crossfitExperience: {
          		required: guest,
          		max: 20
        		},

        	datePicker: {
         		required: true
        		},
 
        }, // end rules
        messages: {
        	memberEmail: {
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
          		min: $.validator.format("Please honestly tell us how long you've been doing Crossfit(it's only been around 20 years)")
        	}
        
        } // end messages
    }); // end validate 
}); // end document.ready
