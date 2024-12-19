function maximum(start) {
  return start < 0 ? 0 : start;
}

function minimum(text, end) {
  return end >= text.length ? text.length - 1 : end;
}

function sliceReccursion(text, sliceOfString, start, end) {
  if (start === end) {
    return text[end];
  }

  if (start > end) {
    return '';
  }

  return sliceOfString + text[start] + sliceReccursion(text, sliceOfString, start + 1, end);
}
function slice(text, start, end) {
  const endIndex = minimum(text, end);

  let startIndex = maximum(start);
  let sliceOfString = '';

  return sliceReccursion(text, sliceOfString, startIndex, endIndex);
}

{ //--------------------- testing section starts from here -----------------

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
  testSliceFunction('', 0, 10, '');
  testSliceFunction('hello', 0, 0, 'h');
  testSliceFunction('hello world', 0, 4, 'hello');
  testSliceFunction('negative start', -1, 8, 'negative ');
}

testAll();
}


