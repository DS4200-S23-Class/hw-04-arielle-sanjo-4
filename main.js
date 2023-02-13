// JS File for homework 4
// Arielle and Sanjo 

// getting the coordinates of a circle when you click on it
const rightColumn = document.querySelector(".right-column");

// Function that handles e click event on the points in the left column
function handlePointClick(event) {
   // Get the point that was clicked
  const point = event.target;

  // toggle selected class for the point that was clicked 
  point.classList.toggle("selected");
  // get the selected coordinates 
  const x = point.getAttribute("cx");
  const y = point.getAttribute("cy");
  // putting the coordinates in the right column.
  rightColumn.innerHTML = `Coordinates: (${x}, ${y})` + rightColumn.innerHTML;
}

// get the points in the left columns
const points = document.querySelectorAll(".point");
// adds event listener for clicking each point
points.forEach(point => point.addEventListener("click", handlePointClick));


// add event listener to the form in html code
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default action
  // Get the select element inside the form
  var select = this.querySelectorAll("select");

 
  for (var i = 0; i < select.length; i++) {
    if (select[i].value !== "0") {
      rightColumn.innerHTML = `<p>Selected Coordinate ${i+1}: ${select[i].value}</p>` + rightColumn.innerHTML;
    }
  }
}); 




function addCircle() {
  // Get the x and y coordinates from the input fields
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  
  // Create the circle element
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("class", "point");

  // multiplied by 50 to scale for the svg
  circle.setAttribute("cx", x * 50);
  circle.setAttribute("cy", 450 - y * 50);
  circle.setAttribute("r", 8);
  
  // Add the circle element to the SVG
  document.getElementById("frame").appendChild(circle);
}