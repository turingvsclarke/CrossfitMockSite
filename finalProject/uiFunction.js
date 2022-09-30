/***
 Filename: uiFunction.js
 Written by: Ryan Eades (RE)
 Purpose: Store all of the jquery ui code in its own separate js file
 Date: 19 March 2021
 Modificaton History:
<<<<<<< HEAD
 Changed default autocomplete tags (04/16) 
 Made the spinner have a minimal value of 0
***/
 
$(document).ready(function(){
 
  $( "#accordion" ).accordion({header:"h3"});
 
=======
 Changed default autocomplete tags (04/16)
 Made the spinner have a minimal value of 0
***/

$(document).ready(function(){

  $( "#accordion" ).accordion({header:"h3"});

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  var availableTags = [
    "Member Joe",
    "Newsletter",
    "Coworker",
    "Crossfit competition"
	];
  $( "#autocomplete" ).autocomplete({
    source: availableTags
  });
<<<<<<< HEAD
 
=======

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  $( "#button" ).button();
  $( "#button-icon" ).button({
    icon: "ui-icon-gear",
    showLabel: false
  });
<<<<<<< HEAD
 
  $( "#radioset" ).buttonset();
 
  $( "#controlgroup" ).controlgroup();
 
  $( "#tabs" ).tabs();
 
=======

  $( "#radioset" ).buttonset();

  $( "#controlgroup" ).controlgroup();

  $( "#tabs" ).tabs();

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  $( "#dialog" ).dialog({
    autoOpen: false,
    width: 400,
    buttons: [
        {
            text: "Ok",
            click: function() {
                $( this ).dialog( "close" );
            }
        },
        {
            text: "Cancel",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    ]
  });
<<<<<<< HEAD
 
=======

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  // Link to open the dialog
  $( "#dialog-link" ).click(function( event ) {
    $( "#dialog" ).dialog( "open" );
    event.preventDefault();
  });
<<<<<<< HEAD
 
  $( "#datepicker" ).datepicker({
    inline: true
  });
 
=======

  $( "#datepicker" ).datepicker({
    inline: true
  });

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  $( "#slider" ).slider({
    range: true,
    values: [ 17, 67 ]
  });
<<<<<<< HEAD
 
=======

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  $( "#progressbar" ).progressbar({
    value: 20
  });
  // Make the spinner only positive values
  $( "#spinner" ).spinner({
	min: 0
  });

  $("[id^=checkbox]").checkboxradio();
<<<<<<< HEAD
 
  $( "#menu" ).menu();
 
  $( "#tooltip" ).tooltip();
 
  $( "#selectmenu" ).selectmenu();
 
=======

  $( "#menu" ).menu();

  $( "#tooltip" ).tooltip();

  $( "#selectmenu" ).selectmenu();

>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
        $( this ).addClass( "ui-state-hover" );
    },
    function() {
        $( this ).removeClass( "ui-state-hover" );
    }
  );
<<<<<<< HEAD
}); // end document.ready function
=======
}); // end document.ready function
>>>>>>> 95be142b0fa639347854aef90afa9602b8313d51
