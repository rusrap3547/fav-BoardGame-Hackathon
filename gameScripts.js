// Initialize board setup and start game
window.onload = () => {
  const startGameButton = document.getElementById("startGameButton");
  console.log("Starting game...");
  startGameButton.addEventListener("click", () => {
    resetBoard();
    generateEnemyPositions();
    placeEnemies();
    placePlayerPieces();
    console.log("Game has started");
  });

  console.log("Window loaded");
};

// window.onload = () => {
//   const restartButton = document.getElementById("restartButton");
//   restartButton.addEventListener("click", () => {
//     resetBoard();
//     generateEnemyPositions();
//     placeEnemies();
//     placePlayerPieces();
//     console.log("Game has restarted");
//   });
// }

// Function to generate random enemy positions in the top 3 rows
function generateEnemyPositions() {
  const enemyPositions = [];
  while (enemyPositions.length < 30) {
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 10);
    if (!enemyPositions.some((p) => p.row === row && p.col === col)) {
      enemyPositions.push({ row, col });
    }
  }
  return enemyPositions;
}
// Place enemies on the board
function placeEnemies() {
  const enemyPositions = generateEnemyPositions();
  enemyPositions.forEach((pos) => {
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
generateEnemyPositions();
placeEnemies();

// Function to check if a position is occupied
function isPositionOccupied(row, col) {
  const square = document.querySelector(
    `#board div:nth-child(${row * 10 + col + 1})`
  );
  return square && square.textContent !== "";
}
function placePlayerPieces() {
  const availableSpaces = [];
  for (let row = 7; row <= 9; row++) {
    for (let col = 0; col < 10; col++) {
      if (!isPositionOccupied(row, col)) {
        availableSpaces.push({ row, col });
      }
    }
  }
  pieces.forEach(piece => {
    let quantity = piece.quantity;
    for (let i = 0; i < quantity; i++) {
      if (availableSpaces.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSpaces.length);
        const { row, col } = availableSpaces.splice(randomIndex, 1)[0];
        const square = document.querySelector(`#board div:nth-child(${row * 10 + col + 1})`);
          square.innerHTML = `<img src="${piece.playerImage}" alt="${piece.name}">`;
        }
      }
    });
  console.log("Player pieces placed");
  function isPositionOccupied(row, col) {
    const square = document.querySelector(`#board div:nth-child(${row * 10 + col + 1})`);
    return square && square.innerHTML !== "";
  }
}
placePlayerPieces();

let selectedPiece = null;

function makePiecesMovable() {
  const squares = document.querySelectorAll("#board div");
  squares.forEach((square)=> {
    square.addEventListener("click", ()=> {
      if (selectedPiece) {
        if (square.innerHTML === "") {
          square.appendChild(selectedPiece);
          selectedPiece = null;
          console.log("Piece moved"); } 
          else { 
            console.log("Destination square is occupied:");
          }
        }
          else if (square.innerHTML !== "") {
            const piece = square.querySelector("img");
            if (piece) {
              selectedPiece = piece;
              console.log('Selected piece:', selectedPiece)
            }
          }
        });
    });
  }
makePiecesMovable();

function resetBoard() {
  const squares = document.querySelectorAll("#board div");
  squares.forEach((square) => {
    square.innerHTML = "";
  });
  console.log("Board reset");
}