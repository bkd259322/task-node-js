const input = require('readline-sync');

// Get grid size from user
const responce = parseInt(input.question("How many lines (0-9): "));
const row = responce;
const col = responce;

// Initialize matrices
const emptyMatrix = Array(row).fill().map(() => Array(col).fill(0));
const matrix = Array(row).fill().map(() => Array(col).fill(0));


const validateMove = (x, y) => {
    // Row check
    if (matrix[x].includes(1)) return false;

    // Column check
    if (matrix.some(row => row[y] === 1)) return false;

    // Check emptyMatrix
    if (emptyMatrix[x][y] === 1) return false;

    return true;
}

function empty(row, col) {
    // Row Column Block
    for (let i = 0; i < responce; i++) {
        emptyMatrix[row][i] = 1;  
        emptyMatrix[i][col] = 1;  
    }

    displayEmptyMatrix();
}


// Display column index
const display = () => {
    let header = "    ";
    for (let i = 0; i < col; i++) {
        header += i + " ";
    }
    console.log(header);

    // Display row index
    matrix.forEach((line, index) => {
        console.log(index + " | " + line.join(" "));
    });
}

//  Empty Matrix 
const displayEmptyMatrix = () => {
    // Display column indices
    let header = "   ";
    for (let i = 0; i < col; i++) {
        header += i + " ";
    }
    console.log(header);

    // Display empty matrix with row indices
    emptyMatrix.forEach((line, index) => {
        console.log(index + " | " + line.join(" "));
    });
}

// Start Game
display();
let moves = 0;

while (moves < 5) {
    const x = parseInt(input.question("Enter row Number: "));
    const y = parseInt(input.question("Enter column Number: "));

    // Validate Input Range
    if (x < 0 || x >= responce || y < 0 || y >= responce) {
        console.log("Invalid Position");
        continue;
    }

    // Validate Move
    if (validateMove(x, y)) {
        matrix[x][y] = 1;
        moves++;
        display();
        empty(x, y);
    } else {
        console.log("Not Allowed!");
    }
}
