// const colorBox = document.getElementById("colorBox");
// const colorOptions = document.querySelectorAll(".colorOption");
// const gameStatus = document.querySelector("[data-testid='gameStatus']");
// const scoreDisplay = document.getElementById("score");
// const newGameButton = document.getElementById("newGameButton");

// let score = 0;
// let targetColor = "";

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function startGame() {
//   targetColor = getRandomColor();
//   colorBox.style.backgroundColor = targetColor;

//   // Generate six colors and set them as button backgrounds
//   let correctIndex = Math.floor(Math.random() * 6);
//   colorOptions.forEach((button, index) => {
//     let color = index == correctIndex ? targetColor : getRandomColor();
//     button.style.backgroundColor = color;

//     button.onclick = () => {
//      if (color === targetColor) {
//     gameStatus.textContent = "Correct!";
//     gameStatus.style.color = "green";
//     score+=1;
//     scoreDisplay.textContent = score;
// } else {
//     gameStatus.textContent = "Wrong! Try again.";
//     gameStatus.style.color = "red";
//     };
// }
//   }
// );
// }


// // Reset game
// newGameButton.onclick = () => {
//   gameStatus.textContent = "";
//   startGame();
// };

// // Start the game on load
// startGame();

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;
let gameActive = true;

document.addEventListener("DOMContentLoaded", () => {
  startNewGame();
  document
    .getElementById("newGameButton")
    .addEventListener("click", startNewGame);
});

function startNewGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBox").style.backgroundColor = targetColor;
  document.getElementById("gameStatus").textContent = "";
  gameActive = true;
  updateOptions();
}

function updateOptions() {
  const optionsContainer = document.getElementById("colorOptions");
  optionsContainer.innerHTML = "";

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.dataset.testid = "colorOption";
    button.addEventListener("click", () => checkGuess(color));
    optionsContainer.appendChild(button);
  });
}

function checkGuess(selectedColor) {
  if (!gameActive) return; // Prevent multiple counts

  if (selectedColor === targetColor) {
    document.getElementById("gameStatus").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    gameActive = false;
    setTimeout(startNewGame, 2000); // Automatically start a new game after 2 second
  } else {
    document.getElementById("gameStatus").textContent = "Wrong, try again!";
  }
}
