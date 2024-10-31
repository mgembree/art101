// index.js - Lab 7: Functions
// Author: Matthew Embree
// Date: 10/28/2024

//Function doSomething takes a user input, their name, and sorts the characters
//of the name and rearranges them in a string
function doSomething() {
  let userName = window.prompt("Enter your username: ");     //User input
  return sortedUserName = userName.split('').sort().join();     //1 Split string into array/ 2 sort characters in array / 3 rejoin sorted char-array into string
}
document.querySelector('.output').innerHTML = "Sorted Name: " + doSomething();      //Output the sorted name 