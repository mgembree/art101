// index.js - Lab 11: Javascript Events and Forms
// Author: Matthew Embree
// Date: 11/11/2024


//This function/program produces an output for each index of a for loop, either printing fizz, buzz,boom or combinations of those words depending on it's divisibility.
function fizzbuzzboom(){
  //fizz =%3
  //buzz =%5
  //boom =%7
  let str = '';
  for(let i=1;i<=200;i++){
  if(i%105 == 0){str+="<p10>FizzBuzzBoom</p10><br>";}  //Combinations of conditions have first priority
  else if(i%21==0){str+="<p6>FizzBoom</p6><br>";}
  else if(i%15==0){str+="<p4>FizzBuzz</p4><br>";}
  else if(i%35==0){str+="<p3>BuzzBoom</p3><br>";}
  else if(i%7==0){str+="<p7>Boom</p7><br>";}
  else if(i%3==0){str+="<p8>Fizz</p8><br>";}  
  else if(i%5==0){str+="<p9>Buzz</p9><br>";}
  }
  $("#output").append("<p>"+str + "</p>");
}

fizzbuzzboom();