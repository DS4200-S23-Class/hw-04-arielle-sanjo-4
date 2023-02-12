// JS File for homework 4
// Arielle and Sanjo 

const rightColumn = document.querySelector(".right-column");

function handlePointClick(event) {
  const point = event.target;
  point.classList.toggle("selected");
  const x = point.getAttribute("cx");
  const y = point.getAttribute("cy");
  rightColumn.innerHTML = `Coordinates: (${x}, ${y})`;
}

const points = document.querySelectorAll(".point");
points.forEach(point => point.addEventListener("click", handlePointClick));