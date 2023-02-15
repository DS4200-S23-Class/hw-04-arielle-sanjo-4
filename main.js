// getting the coordinates of a circle when you click on it
const rightColumn = document.querySelector(".right-column");

// Function that handles click event on the points in the left column and the right column
function handlePointClick(event) {
  // Get the point that was clicked
  const point = event.target;

  // toggle selected class for the point that was clicked
  point.classList.toggle("selected");

  // add/remove border class for the point that was clicked
  if (point.classList.contains("selected")) {
    point.classList.add("border");
  } else {
    point.classList.remove("border");
  }

  // remove any previously added coordinates in the right column
  const oldCoordinates = rightColumn.querySelectorAll('.coordinate');
  oldCoordinates.forEach(old => old.remove());

  // get the selected coordinates
  const x = point.getAttribute("cx");
  const y = point.getAttribute("cy");

  // create a new paragraph element with the selected coordinates
  const newCoordinates = document.createElement('p');
  newCoordinates.classList.add('coordinate');
  newCoordinates.innerHTML = `Selected Coordinate: (${x}, ${y})`;

  // add the new paragraph to the beginning of the right column
  rightColumn.insertBefore(newCoordinates, rightColumn.firstChild);
}

// get the points in the left column
const points = document.querySelectorAll(".point");

// adds event listener for clicking each point
points.forEach(point => point.addEventListener("click", handlePointClick));


// add event listener to the form in html code
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default action

  // Get the select element inside the form
  var select = this.querySelectorAll("select");

  // Loop through the select elements and get the selected value
  for (var i = 0; i < select.length; i++) {
    if (select[i].value !== "0") {
      // remove any previously added coordinates in the right column
      const oldCoordinates = rightColumn.querySelectorAll('.coordinate');
      oldCoordinates.forEach(old => old.remove());

      // create a new paragraph element with the selected coordinate
      const newCoordinates = document.createElement('p');
      newCoordinates.classList.add('coordinate');
      newCoordinates.innerHTML = `Selected Coordinate ${i+1}: ${select[i].value}`;

      // add the new paragraph to the beginning of the right column
      rightColumn.insertBefore(newCoordinates, rightColumn.firstChild);
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

  // Add a click event listener to the newly created circle
  circle.addEventListener("click", handlePointClick);
}
