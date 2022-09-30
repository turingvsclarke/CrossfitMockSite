/***
 Filename: uiFunction.js
 Written by: Ryan Eades (RE)
 Purpose: Store all of the jquery ui code in its own separate js file
 Date: 19 March 2021
 Modificaton History:
 Changed default autocomplete tags (04/16) 
 Made the spinner have a minimal value of 0
***/
 
$(document).ready(function(){
 
  $( "#accordion" ).accordion({header:"h3"});
 
  var availableTags = [
    "Member Joe",
    "Newsletter",
    "Coworker",
    "Crossfit competition"
	];
  $( "#autocomplete" ).autocomplete({
    source: availableTags
  });
 
  $( "#button" ).button();
  $( "#button-icon" ).button({
    icon: "ui-icon-gear",
    showLabel: false
  });
 
  $( "#radioset" ).buttonset();
 
  $( "#controlgroup" ).controlgroup();
 
  $( "#tabs" ).tabs();
 
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
 
  // Link to open the dialog
  $( "#dialog-link" ).click(function( event ) {
    $( "#dialog" ).dialog( "open" );
    event.preventDefault();
  });
 
  $( "#datepicker" ).datepicker({
    inline: true
  });
 
  $( "#slider" ).slider({
    range: true,
    values: [ 17, 67 ]
  });
 
  $( "#progressbar" ).progressbar({
    value: 20
  });
  // Make the spinner only positive values
  $( "#spinner" ).spinner({
	min: 0
  });

  $("[id^=checkbox]").checkboxradio();
 
  $( "#menu" ).menu();
 
  $( "#tooltip" ).tooltip();
 
  $( "#selectmenu" ).selectmenu();
 
  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
        $( this ).addClass( "ui-state-hover" );
    },
    function() {
        $( this ).removeClass( "ui-state-hover" );
    }
  );
}); // end document.ready function