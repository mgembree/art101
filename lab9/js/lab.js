// index.js - Lab 7: Functions
// Author: Matthew Embree
// Date: 10/28/2024

    //add the button to challenge
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $(document).ready(function() {
        // Attach the click event listener to the button
        $("#button-challenge").click(function() {
          // Check if the element has the "challenge" ID
          if ($("#challenge").length) {
            // If it has the ID "challenge", remove it and add the "special" class
            $("#challenge").removeAttr("id").addClass("special");
          } else {
            // If it doesn’t have the ID "challenge", add it back and remove the "special" class
            $(".special").attr("id", "challenge").removeClass("special");
          }
        });
      });
      