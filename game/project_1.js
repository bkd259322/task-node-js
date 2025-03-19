const readlineSync = require("readline-sync");

const gridSize = 5;
const grid = Array(gridSize).fill().map(() => Array(gridSize).fill("[ ]"));
const regions = [
  [1, 1, 2, 2, 2],
  [1, 1, 2, 2, 2],
  [4, 4, 2, 2, 2],
  [4, 4, 5, 5, 5],
  [3, 3, 3, 5, 5],
];

// Display grid with regions and stars
const displayGrid = () => {
  console.clear();
  console.log("   0  1  2  3  4");
  grid.forEach((row, i) => {
    console.log(`${i} ${row.map((cell, j) => cell === "[*]" ? "[*]" : `[${regions[i][j]}]`).join("")}`);
  });
};

// Check if the position is valid
const isValid = (row, col) => {
  if (grid[row].includes("[*]")) return false;
  if (grid.some(r => r[col] === "[*]")) return false;
  let region = regions[row][col];
  return !grid.some((r, i) => r.some((c, j) => c === "[*]" && regions[i][j] === region));
};

// Game logic
let starsPlaced = 0;
console.log("Place 5 stars on a 5x5 grid. Only one per row, column, and region!");

while (starsPlaced < 5) {
  displayGrid();
  let row = readlineSync.questionInt("Enter row (0-4): ");
  let col = readlineSync.questionInt("Enter column (0-4): ");

  if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
    if (isValid(row, col)) {
      grid[row][col] = "[*]";
      starsPlaced++;
    } else {
      console.log("Invalid! Row, column, or region already has a star.");
    }
  } else {
    console.log("Invalid input! Use numbers 0-4.");
  }
}

displayGrid();
console.log("All 5 stars placed successfully!");
