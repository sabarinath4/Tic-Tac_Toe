const board = document.getElementById("board");
const status = document.getElementById("status");
let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];

function drawBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.textContent = cell;
    cellDiv.addEventListener("click", () => makeMove(index));
    board.appendChild(cellDiv);
  });
}

function makeMove(index) {
  if (cells[index] !== "" || checkWinner()) return;
  cells[index] = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  drawBoard();
  const winner = checkWinner();
  if (winner) {
    status.textContent = `${winner} wins!`;
  } else if (!cells.includes("")) {
    status.textContent = "It's a draw!";
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

function resetGame() {
  cells = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  status.textContent = "";
  drawBoard();
}

drawBoard();
