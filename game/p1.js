
const readline = require('readline-sync');

let row = 5;
let col = 5;
let star = 5;

const reigon = [
  ["red", "red", "red", "green", "green"],
  ["yellow", "yellow", "yellow", "green", "green"],
  ["yellow", "yellow", "yellow", "pink", "pink"],
  ["yellow", "yellow", "yellow", "pink", "pink"],
  ["blue", "blue", "blue", "pink", "pink"],
];

const empty = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

function printLine() {
  console.log("-------------------------------------------");
}

function printBoard() {
  let board = " ";
  let idx = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board += "" + idx;
      board += reigon[i][j];
      board += " | ";
      idx++;
    }
    board += "\n------------------------------------------\n";
  }
  console.log(board);
}
function options() {
  console.log("1.add Star");
  console.log("2. Remov Star");
  console.log("3. Exit");
}

function TakeInput() {
  let choice = readline.question("enter your value : ");
  switch (choice) {
    case 1:
      addStar();
      break;
    case 2:
      removeStar();
      break;
    case 3:
      exit();
      break;

    default:
      console.log("invalid Choice");
      break;
  }
}

function addStar() {
  let position = readline.question("enter a value in position");
  placeMove(position);
}
function placeMove() {
  let idx = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (idx == position) {
        console.log(" ");
      } else if (empty[i][j] == 0) {
        star++;
        updateAll(i, j);
      } else {
        console.log("\t\t##Star cannot be placed at this position##");
      }
    }
    idx++;
  }
}

function updateAll(p, q) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == p && j == q) {
        empty[i][j] = 1;
        if (i - 1 >= 0 && j - 1 >= 0) {
            empty[i-1][j-1]=1
        }
        if((i-1)>=0 && (j+1)<col){
            empty[i-1][j+1]=1
        }
        if((i+1)>row && (j-1)>=0){
            empty[i+1][j-1]=1
        }
        if((i+1)>row && (j+1)<col){
            empty[i+1][j+1]=1
        }
      }
      if(i == p || j == q){
        empty[i][j]=1
      }
      if(reigon[i][j] = reigon[p][q]){
        empty[i][j]=1
      }
    }
  }
}

function removeStar(){
    console.log("\t\t##Not Yet...##")
}
let win = false;
while(!win){
    printBoard();

    options();
    TakeInput();

    win = (star == 5)
}
if(win){
    printLine();
    console.log("\t\t###Congratulations! You have won the game##");
    printLine();
}