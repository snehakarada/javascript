/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getMessage(text, target, actualResult, expectedResult) {
  const mark = getMark(actualResult, expectedResult);
  const textAndTarget = getTextAndTarget(text, target);
  const border = '   |';

  return mark + textAndTarget + actualResult + border + expectedResult;
}

function getTextAndTarget(text, target) {
  const border = '   |';

  return border + text + border + target + border;
}

function testFindIndex(text, target, expectedResult) {
  const actualResult = findIndex(text, target);

  console.log(getMessage(text, target, actualResult, expectedResult));
}

function heading() {
  console.log("✅/❌|", "text|", "target|", "actualResult |",
    "expectedResult |");
}

function testAll() {
  heading();
  testFindIndex("h", 'h', 0);
  testFindIndex("hello", '0', -1);
  testFindIndex("hello", 'o', 4);
  testFindIndex(" ", 'i', -1);
}

testAll();