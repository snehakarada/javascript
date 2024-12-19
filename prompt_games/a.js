function getBox(number) {
  return '|  ' + number;
}

function isEnd(number) {
  if (number % 3 === 0) {
    return '  |\n' + repeat('-', 20);
  }

  return '';
}

function getBoard() {
  let board = '';

  for (let number = 1; number <= 6; number++) {
    board += getBox(number) + isEnd(number);
  }

  return board;
}

function repeat(char) {
  let repeatedChar = '|';
  for (let iterate = 0; iterate <= 13; iterate++) {
    repeatedChar += char;
  }
  return repeatedChar + '|\n';
}

function wholeBoard() {
  return repeat('-') + getBoard();
}

function answers(userAnswer) {
  switch (+userAnswer) {
    case 1: return '😇';
    case 2: return '😇';
    case 3: return '😎';
    case 4: return '🥸';
    case 5: return '😎';
    case 6: return '🥸';
  }
}

function readBoard(board, index, updatedBoard, userAnswer) {
  if (index >= board.length) {
    return updatedBoard;
  }

  if (board[index] === userAnswer) {
    const a = answers(userAnswer);
    updatedBoard += answers(userAnswer);
    index++;
  }
  updatedBoard += board[index];
  return readBoard(board, index + 1, updatedBoard, userAnswer);
}

function gameStart(board) {
  const userAnswer = prompt('enter the position');
  const string = readBoard(board, 0, '', userAnswer);
  console.log(string);
  return gameStart(string);
}
const board = wholeBoard();
console.log(board);
console.log(gameStart(board));