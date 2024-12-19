/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringMatch(index, endIndex, string, substring) {
  let stringToCheck = '';

  for (let stringIndex = index; stringIndex < endIndex; stringIndex++) {
    stringToCheck = stringToCheck + string[stringIndex];
  }

  return stringToCheck === substring;
}

function occurrences(string, substring) {
  if (substring === '') {
    return 0;
  }
  let noOfSubstrings = 0;

  for (let index = 0; index < string.length; index++) {
    const endIndex = index + substring.length;

    if (isSubStringMatch(index, endIndex, string, substring)) {
      noOfSubstrings = noOfSubstrings + 1;
    }
  }

  return noOfSubstrings;
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

function testOccurrences(string, substring, expectedResult) {
  const actualResult = occurrences(string, substring);

  console.log(getMessage(string, substring, actualResult, expectedResult));
}

function heading() {
  console.log('✅/❌|', 'str|', 'substr|', 'actualResult|', 'expectedResult|');
}

function testAll() {
  heading();
  testOccurrences('haha', 'h', 2);
  testOccurrences('haha', 'ha', 2);
  testOccurrences('hahello', 'hi', 0);
  testOccurrences('hello', 'hellob', 0);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hi', '', 0);
}

testAll();