// index.js - purpose and description here
// Author: Matthew Embree
// Date: 10/24/2024

var myMainRide = {
  make: "Mercedez-Benz",
  model: "300-SD",
  year: 1980,
  age: 2024 - 1980, // Fixed age calculation
  color: "grey",
};

// Constants
const myTransport = ["Bus", "Walking", "Skateboard"];

function main() {
  // Output to .output div instead of document.writeln()
  document.querySelector('.output').innerHTML = 
    "My modes of transport: " + myTransport.join(", ") + "<br>" + 
    "My Main Ride: <pre>" + JSON.stringify(myMainRide, null, 2) + "</pre>";
}

main();