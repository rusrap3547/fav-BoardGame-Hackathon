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

// Initialize board setup
window.onload = () => {
  placePieces();
  placeEnemies();
};

// Function to check if a position is occupied
function isPositionOccupied(row, col) {
  const square = document.querySelector(
    `#board div:nth-child(${row * 10 + col + 1})`
  );
  return square && square.textContent !== "";
}

//#################################################################################################################

// Function to move a piece if the target position is not occupied
function movePiece(currentRow, currentCol, targetRow, targetCol) {
  if (isPositionOccupied(targetRow, targetCol)) {
    console.log("Target position is occupied. Move not allowed.");
    return false;
  }

  const currentSquare = document.querySelector(
    `#board div:nth-child(${currentRow * 10 + currentCol + 1})`
  );
  const targetSquare = document.querySelector(
    `#board div:nth-child(${targetRow * 10 + targetCol + 1})`
  );

  if (currentSquare && targetSquare) {
    targetSquare.textContent = currentSquare.textContent;
    targetSquare.style.color = currentSquare.style.color;
    targetSquare.style.fontWeight = currentSquare.style.fontWeight;

    currentSquare.textContent = "";
    currentSquare.style.color = "";
    currentSquare.style.fontWeight = "";
    return true;
  }

  console.log("Invalid move. Check the board coordinates.");
  return false;
}
