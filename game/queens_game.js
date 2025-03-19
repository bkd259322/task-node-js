const readlineSync = require("readline-sync");

const Size = 5;
let grid = [];

// empty grid
for (let i = 0; i < Size; i++) {
  grid[i] = [];
  for (let j = 0; j < Size; j++) {
    grid[i][j] = "[ ]";
  }
}

// Function to display the grid
function displayGrid() {
  // Display column indices
  let colIndices = "   ";
  for (let i = 0; i<colIndices; i++) {
    colIndices += ` ${i}  `;
  }
  console.log(colIndices);
const readlineSync = require("readline-sync");

const Size = 5;
let grid = [];

// empty grid
for (let i = 0; i < Size; i++) {
  grid[i] = [];
  for (let j = 0; j < Size; j++) {
    grid[i][j] = "[ ]";
  }
}

// Function to display the grid
function displayGrid() {
  // Display column indices
  let colIndices = "   ";
  for (let i = 0; i < Size; i++) {
    colIndices += ` ${i}  `;
  }
  console.log(colIndices);

  // Display each row with its index
  grid.forEach((row, rowIndex) => {
    console.log(`${rowIndex} ` + row.join(" "));
  });
  console.log("\n");
}

// Function to check if column is already occupied
function isColOccupied(col) {
  for (let i = 0; i < Size; i++) {
    if (grid[i][col] === "[*]") {
      return true;
    }
  }
  return false;
}

// Function to check if row is already occupied
function isRowOccupied(row) {
  return grid[row].includes("[*]");
}

// Step 2 & 3: Get User Input and Show Grid
let starsPlaced = 0;
console.log("Place 5 stars on a 5x5 grid!");
console.log("Enter row and column values between 0 and 4.");

// Loop to place 5 stars
while (starsPlaced < 5) {
  // Display the grid after each placement
  displayGrid();

  // Get row and column input from user
  let row, col;
  while (true) {
    row = readlineSync.questionInt(`Enter row for star ${starsPlaced + 1}: `);
    col = readlineSync.questionInt(`Enter column for star ${starsPlaced + 1}: `);

    // Validate input
    if (row >= 0 && row < Size && col >= 0 && col < Size) {
      // Check if the row is already occupied
      if (isRowOccupied(row)) {
        console.log("There is already a star in this row! Choose a different row.");
      }
      // Check if the column is already occupied
      else if (isColOccupied(col)) {
        console.log("There is already a star in this column! Choose a different column.");
      } else {
        break;
      }
    } else {
      console.log("Invalid input! Enter numbers between 0 and 4.");
    }
  }

  // Place the star
  grid[row][col] = "[*]";
  starsPlaced++;
}

// Final grid display after placing all 5 stars
displayGrid();
console.log("All 5 stars have been placed!");
  // Display each row with its index
  grid.forEach((row, rowIndex) => {
    console.log(`${rowIndex} ` + row.join(" "));
  });
  console.log("\n");
}

// Function to check if column is already occupied
function isColOccupied(col) {
  for (let i = 0; i < Size; i++) {
    if (grid[i][col] === "[*]") {
      return true;
    }
  }
  return false;
}

// Step 2 & 3: Get User Input and Show Grid
let starsPlaced = 0;
console.log("Place 5 stars on a 5x5 grid!");
console.log("Enter row and column values between 0 and 4.");

// Loop to place 5 stars
while (starsPlaced < 5) {
  // Display the grid after each placement
  displayGrid();

  // Get row and column input from user
  let row = readlineSync.questionInt(`Enter row for star ${starsPlaced + 1}: `);
  let col = readlineSync.questionInt(`Enter column for star ${starsPlaced + 1}: `);

  // Validate input
  if (row >= 0 && row < Size && col >= 0 && col < Size) {
    // Check if the row is already occupied
    if (grid[row].includes("[*]")) {
      console.log(
        "There is already a star in this row! Choose a different row."
      );
    }
    // Check if the column is already occupied
    else if (isColOccupied(col)) {
      console.log(
        "There is already a star in this column! Choose a different column."
      );
    } else {
      // Place the star
      grid[row][col] = "[*]";
      starsPlaced++;
    }
  } else {
    console.log("Invalid input! Enter numbers between 0 and 4.");
  }
}

// Final grid display after placing all 5 stars
displayGrid();
console.log("All 5 stars have been placed!");
