/**********************************
 FILE NAME: FinalRelease.js
 AUTHOR: Ryan Eades (RE)
 CREATE DATE: 30 April 2021
 PURPOSE: Redo form scraping using js variables. Make all fields required.
 MODIFICATION HISTORY:
 Copied customValidation.js 
 Rewrote form scraping using variables
 Rewrote form output using jQuery .append() rather than javaScript
 Fixed output of checkboxes to show autocomplete field
 Made all fields simply required
***********************************/
$(document).ready(function(){
 
$.validator.setDefaults({
  
    // We use jquery selection to output form info to a designated area, provided the rules we've set for each input value are followed
    submitHandler: function() {

	/////////// FORM SCRAPING //////////////////////
	
	$("#outputArea").text("");	

        // Get the users username
        var memberLogin = $("#userEmail").val();
        // Get the users password
        var memberPassword = $("#memberPassword").val();
        // Get the guest's first name
        var guestFirstName = $("#fname").val();
        // Get the guest's last name
        var guestLastName = $("#lname").val();
        // Get the guest's phone number
        var guestPhone = $("#phone").val();
        // Get the guest's email
        var guestEmail = $("#email").val();
        // Initialize a string for getting the guests reason for visiting
        var reasonForVisit = "";
        // Get the user's reason for visiting
        var moreReason = $("#autocomplete").val();
        // Get the user's experience level
        var guestExperience = $("#spinner").val();
        // Get the selected class date
        var classDate = $("#datepicker").datepicker('getDate');
        // Get the selected class type
        var classType = $("#selectmenu").val();
        // Get the athlete's level
        var athleteLevel = $('input[name="athleteLevel"]:checked').val();
        
        // Find all the different ways they may have contacted us, excluding any "Other Reason"
        $("#userData").find('input[name="referralMethod"][id!="checkbox-4"]:checked').each(function(){
          reasonForVisit+="<li>" + $("label[for='"+$(this).attr("id")+"']").text() + "</li>";
        }); // end each
	
        // Add on the other reason for visiting if it exists
        $("#userData").find('#checkbox-4:checked').each(function(){
             reasonForVisit+="<li>" + $("label[for='"+$(this).attr("id")+"']").text() + " " + moreReason + "</li>";
        }); // end each

        // Add all the data to the outputArea
        $("#outputArea").append("Member username: " + memberLogin)
            .append("<br> Member password: " + memberPassword)
            .append("<br> Guest's first name: " + guestFirstName)
            .append("<br> Guest's last name: " + guestLastName)
            .append("<br> Guest's phone number: " + guestPhone)
            .append("<br> Guest's email: " + guestEmail)
            .append("<br> How guest heard of the gym: <br>")
            .append("<ul>")
            .append(reasonForVisit)
            .append("</ul")
            .append("<br> Years they've done Crossfit: " + guestExperience)
            .append("<br> Date of their class: " + classDate)
            .append("<br> Class they'll be attending: " + classType)
            .append("<br> Level of athlete: " + athleteLevel);
      }, // end submitHandler

      ///////////// ERROR PLACEMENT //////////////////////////////
 
      errorPlacement: function(error, element){
  	// Put the referral method message after the question, not after each individual option
        if (element.attr("name")=="referralMethod"){
          error.insertAfter($("#referralQuery"));
        }
	// Put issues with member registration at the end of that portion of the form
	else if (element.attr("name")=="memberLogin" || element.attr("name")=="memberPassword"){
	  error.insertAfter($("#memberInfo"));
	}
	// Put issues with guest registration at the end of that portion of the form
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
            		required: true
            	}, // end memberLogin

		// Require a password if they're logging in as a member
		memberPassword: {
			required : true
		}, // end memberPassword

		// See memberLogin comments
            	firstName: {
            		required: true
            	}, // end firstName

		lastName: {
			// require last name if they're logging in as guest
			required: true
		}, // end lastName

		phone: {
          		required: true,
          		phoneUS: true
        	},
        
        	email: {
			required: true,
          		email: true
        		},
            
      		// have them check at least one way they heard of the box
        	referralMethod: {
           		required: true
        		},
 
      		// if they checked 'Other', the other field is required
        	otherReason: {
          		required: "#checkbox-4:checked"
        		},
 
        	crossfitExperience: {
          		required: true,
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