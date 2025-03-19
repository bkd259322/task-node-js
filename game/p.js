
let matrix ;
let emptyMatrix ;

function generateBox() {
  const size =  parseInt(document.getElementById("matrixSize" ).value)

  matrix =  Array( size).fill().map(() => Array(size).fill());

  emptyMatrix =  Array(size).fill().map(() =>  Array(size).fill());

  console.log(matrix)

  const board = document.getElementById("board");

  board.innerHTML = "";

  board.classList.add('grid')

  for (let i=0; i <size; i++){
    const row =document.createElement("div");
    row.classList.add( "row");

    for (let j=0; j<size; j++){
      const cell =  document.createElement("div");
      cell.classList.add("cell")

      cell.setAttribute("row",i)
      cell.setAttribute("col",j)
      row.appendChild (cell);
    }
    board.appendChild(row)
  }
}

document.getElementById("board").addEventListener("click",clickBox);

function clickBox(event){
  const x = parseInt( event.target.getAttribute('row'));
  const y = parseInt( event.target.getAttribute('col'));

  if (event.target.classList.contains('cell') && validateMove(x, y)) {
    event.target.textContent = "⭐";
    matrix[x][y] =1;
    empty(x,y);
  }else{
    console.log("Not Allowed!");
  }
}

const validateMove=(x,y)=>{
  if(matrix[x].includes(1)) return false;
  for(let i=0;i<matrix.length; i++) {
    if (matrix[i][y]===1) return false;
  }
  return true;
};

function empty(row,col){
  for (let i=0;i<matrix.length;i++){
    for (let j=0; j<matrix.length;j++){
      if(i==row || j==col){
        emptyMatrix[i][j]=1;
      }
      if(i-1>=0 && j-1>=0) {
        emptyMatrix[i-1][j-1]=1;
      }
      if(i+1<matrix.length && j-1 >=0 ) {
        emptyMatrix[i+1][j-1]=1;
      }
      if (i-1>=0 && j+1<matrix.length) {
        emptyMatrix[i-1][j+1] =1;
      }
      if (i+1<matrix.length && j+1< matrix.length) {
        emptyMatrix[i+1][j+1]= 1;
      }
    }
  }
  console.log(emptyMatrix);
}

const display =()=>{
  console.log("Game Board:");
  matrix.forEach((line, index) => {
    console.log(index + "|" + line.join(""));
  })
}
