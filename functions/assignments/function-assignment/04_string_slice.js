/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function maximum(start) {
  return start < 0 ? 0 : start;
}

function minimum(text, end) {
  return end >= text.length ? text.length - 1 : end;
}

function slice(text, start, end) {
  const endIndex = minimum(text, end);

  let startIndex = maximum(start);
  let sliceOfString = '';
  for (startIndex; startIndex <= endIndex; startIndex++) {
    sliceOfString = sliceOfString + text[startIndex];
  }

  return sliceOfString;
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

function testSliceFunction(text, start, end, expectedResult) {
  const actualResult = slice(text, start, end);

  console.log(getMessage(text, actualResult, expectedResult));
}

function heading() {
  console.log("right/wrong|", "text|", "actualResult|", "expectedResult|");
}

function testAll() {
  heading();
  testSliceFunction('te', 0, 2, 'te');
  testSliceFunction('hello', -1, 20, 'hello');
  testSliceFunction('', 0, 0, '');
  testSliceFunction('hello', 0, 0, 'h');
  testSliceFunction('hello world', 0, 4, 'hello');
  testSliceFunction('negative start', -1, 8, 'negative ');
}

testAll();