/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  let replacedString = '';

  for (let index = 0; index < text.length; index++) {
    const isMatching = text[index] === match;
    replacedString += isMatching ? replacement : text[index];
  }

  return replacedString;
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getMessage(text, actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult) + border;

  return mark + text + border + actualResult + border + expectedResult;
}

function testReplaceFunction(text, match, replacement, expectedResult) {
  const actualResult = replace(text, match, replacement);

  console.log(getMessage(text, actualResult, expectedResult));
}

function heading() {
  console.log("right/wrong |", "text|", "actualResult |", "expectedResult |");
}

function testAll() {
  heading();
  testReplaceFunction("h", 'h', 'k', 'k');
  testReplaceFunction("", 'l', 'n', "");
  testReplaceFunction("hello", 'z', 'q', 'hello');
  testReplaceFunction("no spaces in here", ' ', '_', 'no_spaces_in_here');
}

testAll();
