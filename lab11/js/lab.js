// index.js - Lab 11: Javascript Events and Forms
// Author: Matthew Embree
// Date: 11/11/2024


//This function returns a string after being split, sorted, and joined back together as a string
function sortString(inputString) {
  return inputString.split('').sort().join(''); }
//Event listener for clicking button ID: submit
$("#submit").click(function(){
  const userName = $("#user-name").val();   //ID: user-name from html form
  userNameSorted = sortString(userName);    //sorts user-name from html form.
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');     //replaces the output with the user name after sorting
});


