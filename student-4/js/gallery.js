// functionaloity to chnage backgroundColor
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function getRandomColor() {
  const colors = ["grey", "brown", "yellow", "navy", "goldenrod"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeRandomColor() {
  const randomColor = getRandomColor();
  changeColor(randomColor);
}

// Show/hide dropdown content
const dropdownBtn = document.querySelector(".bg-change");
const dropdownContent = document.querySelector(".dropdown-content");
dropdownBtn.addEventListener("click", function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".bg-change")) {
    dropdownContent.style.display = "none";
  }
});

// Text size adjustment functions
function increaseTextSize() {
  let currentSize = parseInt(
    window.getComputedStyle(document.querySelector(".gallery-content")).fontSize
  );
  currentSize = Math.min(currentSize + 1, 45);
  document.querySelector(".gallery-content").style.fontSize =
    currentSize + "px";
}

function decreaseTextSize() {
  let currentSize = parseInt(
    window.getComputedStyle(document.querySelector(".gallery-content")).fontSize
  );
  currentSize = Math.max(currentSize - 1, 10);
  document.querySelector(".gallery-content").style.fontSize =
    currentSize + "px";
}

function resetTextSize() {
  document.querySelector(".gallery-content").style.fontSize = "16px";
}

// Button event listeners
document
  .querySelector(".text-size-up")
  .addEventListener("click", increaseTextSize);
document
  .querySelector(".text-size-down")
  .addEventListener("click", decreaseTextSize);
document
  .querySelector(".reset-text-size")
  .addEventListener("click", resetTextSize);
