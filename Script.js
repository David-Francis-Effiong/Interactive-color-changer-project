// Wait for DOM content to be loaded

document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements (now guaranteed to exist)
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Array of predefined colors
  const colors = ["#ff6b6b", "#ff8a392b", "#4fafba", "#ff0ff0", "#9ff44a"];

  // Function to generate random hex color
  function getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  }

  // Alternative: Use predefined colors array
  function getRandomColorFromArray() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Main color change function
  function changeColor() {
    const randomColor = getRandomColor(); // Completely random or I can use
    // const randomColor = getRandomColorFromArray(); // From your array

    // Apply the color to the box
    colorBox.style.backgroundColor = randomColor;

    // Log the color for debugging
    console.log("New color:", randomColor);
  }

  // Event listener for the button (OUTSIDE the changeColor function)
  changeColorBtn.addEventListener("click", changeColor);

  // Optional: Set initial color
  changeColor();
});

// Alternative shorter syntax using arrow function:
/*
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
    
    const colors = ["#ff6b6b", "#ff8a392b", "#4fafba", "#ff0ff0", "#9ff44a"];
    
    const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    
    const changeColor = () => {
        colorBox.style.backgroundColor = getRandomColor();
    };
    
    changeColorBtn.addEventListener("click", changeColor);
});
*/
