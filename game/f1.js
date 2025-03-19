const input = require('readline-sync');

const responce = parseInt(input.question("How many lines (0-9): "));
const row = responce;
const col = responce;

const emptyMatrix = Array(row).fill().map(() => Array(col).fill(0));

const matrix = Array(row).fill().map(() => Array(col).fill(0));
console.log(matrix);

const validateMove = (x, y) => {
    // Row check
    if (matrix[x].includes(1))
     return false;
     
    // Column check
    if (matrix[x].includes(1))
     return false;

     return true;
}

    function empty(row,col){
        for(let i=0; i<responce; i++){
            for(let j=0; j<responce; j++){
                if(i==row || j==col){
                    emptyMatrix[i][j] = 1;
                }
                if(i-1>=0 && j-1>=0){
                    emptyMatrix[i-1][j-1] = 1
                }
                if(i+1<=row && j-1>=0){
                    emptyMatrix[i+1][j-1] = 1
                }
                if(i-1>=0 && j+1<=col){
                    emptyMatrix[i-1][j+1] = 1
                }
                if(i+1<=row && j+1<=col){
                    emptyMatrix[i+1][j+1] = 1
                }
    
            }
        }
        console.log(emptyMatrix)
    }
    
const display = () => {
    // Display column index
    let header = "   ";
    for (let i = 0; i < col; i++) {
        header += i + " ";
    }
    console.log(header);
    
    // Display matrix with row index
    matrix.forEach((line, index) => {
        console.log(index + " | " + line.join(" "));
    });
}   
    
console.log("Game Board:");
display();
    
let moves = 0;
while (moves < 5) {                                                                 
    const x = parseInt(input.question("Enter row Number: "));
    const y = parseInt(input.question("Enter column Number: "));

    if (x < 0 || x >= responce || y < 0 || y >= responce) {
        console.log("Invalid Position");
        continue;
    }

    if (validateMove(x, y)) {
        matrix[x][y] = 1;
        moves++;
        display();
        empty(x,y)
    } else {
        console.log("Not Allowed!");
    }
}

