let players = ['X', 'O'];
let gameBoard = new Array(9).fill("*");
let currentPlayerSymbol = players[0];
let turn = document.querySelector('.turn');

let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');
let buttons = [button1,button2,button3,button4,button5,button6,button7,button8,button9];
let resetButton = document.getElementById('reset');

button1.addEventListener('click', click1);
button2.addEventListener('click', click2);
button3.addEventListener('click', click3);
button4.addEventListener('click', click4);
button5.addEventListener('click', click5);
button6.addEventListener('click', click6);
button7.addEventListener('click', click7);
button8.addEventListener('click', click8);
button9.addEventListener('click', click9);
resetButton.addEventListener('click', resetBoard);

function click1() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[0] === "*") {
    button1.innerHTML = currentPlayerSymbol;
    gameBoard[0] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click2() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[1] === "*") {
    button2.innerHTML = currentPlayerSymbol;
    gameBoard[1] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click3() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[2] === "*") {
    button3.innerHTML = currentPlayerSymbol;
    gameBoard[2] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click4() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[3] === "*") {
    button4.innerHTML = currentPlayerSymbol;
    gameBoard[3] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click5() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[4] === "*") {
    button5.innerHTML = currentPlayerSymbol;
    gameBoard[4] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click6() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[5] === "*") {
    button6.innerHTML = currentPlayerSymbol;
    gameBoard[5] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click7() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[6] === "*") {
    button7.innerHTML = currentPlayerSymbol;
    gameBoard[6] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}
function click8() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[7] === "*") {
    button8.innerHTML = currentPlayerSymbol;
    gameBoard[7] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }  
}
function click9() {
  lastPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  if (!hasLastMoveWon(lastPlayerSymbol) && gameBoard[8] === "*") {
    button9.innerHTML = currentPlayerSymbol;
    gameBoard[8] = currentPlayerSymbol;
    changeTurn(currentPlayerSymbol, players);
    hasLastMoveWon(currentPlayerSymbol);
    isBoardFull(gameBoard);
    currentPlayerSymbol = changeSymbol(currentPlayerSymbol, players);
  }
}

function resetBoard() {
  for (button of buttons) {
    button.innerHTML = "";
    gameBoard = new Array(9).fill("*");
    currentPlayerSymbol = players[0];
    turn.innerHTML = "Player 'X' turn";
  }
}

function hasLastMoveWon(currentPlayerSymbol) {
    let winnerCombos = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8],
      [0, 4, 8], 
      [2, 4, 6]
    ];

    for (let combo of winnerCombos) {
        if (gameBoard[combo[0]] === currentPlayerSymbol &&
            gameBoard[combo[1]] === currentPlayerSymbol && 
            gameBoard[combo[2]] === currentPlayerSymbol
           ) {
            
            turn.innerHTML = "Player '"+currentPlayerSymbol+"' WINNER";
             
            return true
           }
            
    }
  }

function changeSymbol(currentPlayerSymbol, players) {
  if (currentPlayerSymbol === players[0]) {
    currentPlayerSymbol = players[1];
  }
  else {
    currentPlayerSymbol = players[0];
  }
  return currentPlayerSymbol;
}

function getLastSymbol(currentPlayerSymbol, players) {
  if (currentPlayerSymbol === players[0]) {
    let lastPlayerSymbol = players[1];
  }
  else {
    let lastPlayerSymbol = players[0];
  }
  return lastPlayerSymbol;
}


function changeTurn(currentPlayerSymbol, players) {
  if (currentPlayerSymbol === players[0]) {
    turn.innerHTML = "Player 'O' turn";
  }
  else {
    turn.innerHTML = "Player 'X' turn";
  }
}

function isBoardFull(gameBoard) {
  isFull = true;
  for (let i of gameBoard) {
    if (i === "*") {
      isFull = false
    }
  }
  if (isFull === true) {
    turn.innerHTML = "It's a TIE!"
  }
}


  

  










