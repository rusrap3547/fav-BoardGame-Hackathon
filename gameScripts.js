// Function to generate random enemy positions in the top 3 rows
function generateEnemyPositions() {
  const enemyPositions = [];
  for (let i = 0; i < 30; i++) {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 10);
    const position = { row, col };
    if (!enemyPositions.some((p) => p.row === row && p.col === col)) {
      enemyPositions.push(position);
    } else {
      i--; // go back if position is filled
    }
  }
  return enemyPositions;
}

// Place enemies on the board
function placeEnemies() {
  const enemyPositions = generateEnemyPositions();
  enemyPositions.forEach((pos, index) => {
    const square = document.querySelector(
      `#board div:nth-child(${pos.row * 10 + pos.col + 1})`
    );
    if (square) {
      square.textContent = "E"; // Mark enemy with a red 'E'
      square.style.color = "red";
      square.style.fontWeight = "bold";
    }
  });
}

const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", (generateEnemyPositions, placeEnemies) => {
  generateEnemyPositions();
  placeEnemies();
console.log("Game has started");
}
);


// Initialize board setup
window.onload = () => {
  generateEnemyPositions();
  placeEnemies();
  console.log("Window loaded");
};

// Function to check if a position is occupied
function isPositionOccupied(row, col) {
  const square = document.querySelector(
    `#board div:nth-child(${row * 10 + col + 1})`
  );
  return square && square.textContent !== "";
}

//#################################################################################################################

// Function to add player pieces
function setPlayerFlag () {
  const playerFlag = game
}