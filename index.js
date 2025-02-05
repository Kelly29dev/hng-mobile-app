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
