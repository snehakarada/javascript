function maximum(start) {
  return start < 0 ? 0 : start;
}

function minimum(text, end) {
  return end >= text.length ? text.length - 1 : end;
}

function _slice(text, start, end, sliceOfString) {
  if (start > end) {
    return sliceOfString;
  }

  return _slice(text, start + 1, end, sliceOfString + text[start]);
}

function slice(text, start, end) {
  const endIndex = minimum(text, end);
  const startIndex = maximum(start);
  const sliceOfString = '';

  return _slice(text, startIndex, endIndex, sliceOfString);
}

{ //--------------------- testing section starts from here -----------------

  function getMark(actualResult, expectedResult) {
    return actualResult === expectedResult ? '✅' : '❌';
  }

  function getTextStartEnd(text, start, end) {
    const border = '  |';

    return text + border + start + border + end + border;
  }

  function getMessage(text, start, end, actualResult, expectedResult) {
    const border = '   |';
    const mark = getMark(actualResult, expectedResult) + border;
    const textStartEnd = getTextStartEnd(text, start, end);

    return mark + textStartEnd + actualResult + border + expectedResult;
  }

  function testSliceFunction(text, start, end, expectedResult) {
    const actualResult = slice(text, start, end);

    console.log(getMessage(text, start, end, actualResult, expectedResult));
  }

  function heading() {
    console.log('✅/❌|', 'text|', 'start|', 'end|', 'actual|', 'expected|');
    console.log('----------------------------------------------');
  }

  function testAll() {
    heading();
    testSliceFunction('te', 0, 2, 'te');
    testSliceFunction('hello', -1, 20, 'hello');
    testSliceFunction('', 0, 10, '');
    testSliceFunction('hello', 0, 0, 'h');
    testSliceFunction('hello world', 0, 4, 'hello');
    testSliceFunction('negative start', -1, 8, 'negative ');
    testSliceFunction('', 1, 2, '');
  }

  testAll();
}


