// This file will take data from all forms and output it to the output AREA

$(document).ready(function(){
    outputArea=document.getElementById("outputArea");
    $('#userData').submit(function(e){
        outputArea.innerHTML="";
        e.preventDefault();
        // For any text fields we just output the id and the value of the field
        $(this).find(":text,input[type=tel],input[type=email],#autocomplete").each(function(){
          outputArea.innerHTML+=this.id + ": " + $(this).val()+"<br>";
        });
        outputArea.innerHTML+="How they heard of us: <ul>";
        $(this).find("input:checked[type=checkbox]").each(function(){
          outputArea.innerHTML+="<li>"+$("label[for='"+$(this).attr("id")+"']").text()+"</li>";
        });
        outputArea.innerHTML+="</ul>";

        outputArea.innerHTML+= "Class date: " + $("#datepicker").datepicker('getDate')+"<br>";
        $(this).find("input:checked[type=radio]").each(function(){
          outputArea.innerHTML+="Athlete level: " + $("label[for='"+$(this).attr("id")+"']").text()+"<br>";
        });
        // For checked boxes we output the name of each value that was checked.

      });

});


// For each child element output the name of the element and its value
