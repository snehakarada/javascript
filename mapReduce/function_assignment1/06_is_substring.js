/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringMatch(string, index, endIndex, subString) {
  let stringToCheck = '';

  for (let stringIndex = index; stringIndex < endIndex; stringIndex++) {
    stringToCheck = stringToCheck + string[stringIndex];
  }

  return stringToCheck === subString;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    const endIndex = index + subString.length;
    const isItMatching = isSubStringMatch(string, index, endIndex, subString);

    if (isItMatching) {
      return isItMatching;
    }
  }

  return false;
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

function testIsSubString(string, subString, expectedResult) {
  const actualResult = isSubstring(string, subString);

  console.log(getMessage(string, subString, actualResult, expectedResult));
}

function heading() {
  console.log('✅/❌|', 'str|', 'substr|', 'actualResult|', 'expectedResult|');
}

function testAll() {
  heading();
  testIsSubString('h', 'h', true);
  testIsSubString('he', 'hey', false);
  testIsSubString('h', '', false);
  testIsSubString('', 'hlo', false);
  testIsSubString('hello world', 'worl', true);
  testIsSubString('hi ', 'i ', true);
}

testAll();

