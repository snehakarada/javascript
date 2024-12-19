/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function endSubstring(string, substring, startIndex, endIndex) {
  let subIndex = 0;
  for (let index = startIndex; index < endIndex; index++) {
    if (string[index] !== substring[subIndex]) {
      return false;
    }
    subIndex++;
  }
  return true;
}

function endsWith(string, substring) {
  let endIndex = string.length;
  const startIndex = endIndex - substring.length;
  return endSubstring(string, substring, startIndex, endIndex);
}

function getMessage(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function columnBorder() {
  const column = '|';
  // for (let border = 2; border > 0; border--) {
  //   column = column + '|';
  // }
  return column;
}

function check(string, substring, expectedResult) {
  const actualResult = endsWith(string, substring);
  const column = '        |';
  console.log('|', actualResult, column, expectedResult, column, 
    getMessage(actualResult, expectedResult), column);
}

function rowBoarder() {
  let row = '';
  for(let border = 42; border > 0; border--) {
    row = row + '-';
  }
  return row;
}

function heading() {
  console.log(rowBoarder());
  console.log("|actualResult", "|exceptedResult", "|right/wrong|");
}

function testCases() {
  heading();
  check('a', 'a', true);
  check('', '', true);
  check('hello', '', true);
  check('hello world', 'hello', false);
  check('hello', 'llo', true);
  console.log(rowBoarder());
}

testCases();
