// index.js - Lab 7: Functions
// Author: Matthew Embree
// Date: 10/28/2024

//This program takes an array and returns the square root
//of the elements in the array.

//It also returns whether or not they are even numbers.
numArray = [16,81,144,64,36];
function squareRoot (arr){
return result = Math.sqrt(arr);}
//Console output demonstration
console.log("The square root of 25 is: "+ (function(){return result = Math.sqrt(25);}));
console.log("The square root of 49 is: ")
sqrtResult = squareRoot(49);
console.log(sqrtResult);
console.log("Example Array: " + numArray);
console.log("Square Root Results: " + numArray.map(function(arr){return result = Math.sqrt(arr);}));      //Math.sqrt() returns the square root of a given number
console.log("isEven Results: " + numArray.map(function(arr){return arr % 2 == 0;}));      //Remainder operator will either result in 0 or 1. 0=even 1=odd.

//Output same as the console, however in webpage view.
document.querySelector('.output').innerHTML =
    `The square root of 25 is: ${squareRoot(25)}<br>The square root of 49 is: ${squareRoot(49)}<br>Array to be square rooted: ${numArray}<br>Square Root Results: ${numArray.map(squareRoot)}<br>isEven Results: ${numArray.map(function (arr) { return arr % 2 == 0; })}`;