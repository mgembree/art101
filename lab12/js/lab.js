// index.js - Lab 11: Javascript Events and Forms
// Author: Matthew Embree
// Date: 11/13/2024


//Function to choose the user's house based on the length of the text entered.
function sortingHat(str){
  let length = str.length;
  let mod = length % 4;   //mod saves the remainder of the expression to then evaluate and choose the house.
  if(mod == 0){
    return "Gryffindor";
  }
  else if(mod==1){
    return "Ravenclaw";
  }
  else if(mod==2){
    return "Slytherin";
  }
  else if(mod==3){
    return "Hufflepuff";
  }
}

//Event listener
$("#button").click(function(){    
  textInput = $("#input").val();
  house = sortingHat(textInput);
  if(house == "Gryffindor"){
  $("#output").append('<p3>'+ 'Your house is ' + house +'</p3><br>');}
  else if(house == "Ravenclaw"){
    $("#output").append('<p4>'+ 'Your house is ' + house +'</p4><br>');}
  else if(house == "Slytherin"){
    $("#output").append('<p6>'+ 'Your house is ' + house +'</p6><br>');}
  else if(house == "Hufflepuff"){
      $("#output").append('<p7>'+ 'Your house is ' + house +'</p7><br>');}
})