function getBox(number) {
  if (number < 10) {
    return '|  0' + number;
  }

  return  '|  ' + number;
}

function isEnd(number) {
  if (number % 10 === 0) {
    return '  | ' + '\n' + '|' + repeat('-', 50) + '\n';
  }

  return '';
}

function getBoard() {
  let board = '';
  
  for (let number = 1; number <= 100; number++) {
    board +=  getBox(number) + isEnd(number);
  }

  return board;
}

function repeat(char, length) {
  let repeatedChar = '';
  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }
  return repeatedChar + '|';
}

function wholeBoard() {
  return '|' + repeat('-', 50) + '\n' + getBoard();
}

console.log(wholeBoard());