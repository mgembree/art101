// index.js - Lab 10: Javascript for the Web
// Author: Matthew Embree
// Date: 11/4/2024
function generateRandomText(){
const text="I used to think I needed big adventures to feel alive, but lately, it’s the small things that seem magical. Like morning sunlight through my window or the smell of coffee brewing. Little moments we usually rush past. I catch myself noticing them now, like they’re tiny reminders that life doesn’t always have to be huge to be meaningful. It’s easy to feel pressured to make every moment grand, but maybe finding joy in the simple things is the real adventure. There’s beauty in the quiet, in the familiar, in the things we often take for granted. Maybe that’s enough.";
//A minimum of 3 and a maximum of 100 characters are selected
const min = 3;
const max = 100;
//generates a random length minimum of 3
const randLen = Math.floor(Math.random() * (max-min+1)) + min;
//designates a random starting point in the already created text.
const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
//returns a slice 
return text.slice(randStart, randStart + randLen);
}

$("#convo-button").click(function(){
  const newText = generateRandomText();
  $("#output").append('<div class = "text"><p>'+ newText +'</p></div>');
});