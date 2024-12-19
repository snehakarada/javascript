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

function endSlice(string, substring, startIndex) {
  let subIndex = 0;

  for (let index = startIndex; index < string.length; index++) {
    if (string[index] !== substring[subIndex]) {
      return false;
    }
    subIndex++;
  }

  return true;
}

function endsWith(string, substring) {
  const startIndex = string.length - substring.length;

  return endSlice(string, substring, startIndex);
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getStringAndSubString(string, subString) {
  const border = '   |';

  return border + string + border + subString + border;
}

function getMessage(string, subString, actualResult, expectedResult) {
  const mark = getMark(actualResult, expectedResult);
  const stringAndSubString = getStringAndSubString(string, subString);
  const border = '   |';

  return mark + stringAndSubString + actualResult + border + expectedResult;
}

function testEndsWith(string, substring, expectedResult) {
  const actualResult = endsWith(string, substring);

  console.log(getMessage(string, substring, actualResult, expectedResult));
}

function heading() {
  console.log('✅/❌|', 'str|', 'substr|', 'actualResult|', 'exceptedResult|');
}

function testAll() {
  heading();
  testEndsWith('a', 'a', true);
  testEndsWith('', '', true);
  testEndsWith('hello', '', true);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('hello', 'llo', true);
}

testAll();