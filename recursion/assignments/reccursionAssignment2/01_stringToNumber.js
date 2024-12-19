function _stringToNumber(string, index, number, units) {
  if (index < 0) {
    return number;
  }

  if (string[index] === '-') {
    return number * -1;
  }

  const sum = number + (string[index] * units);

  return _stringToNumber(string, index - 1, sum, units * 10);
}

function stringToNumber(string) {
  return _stringToNumber(string, string.length - 1, 0, 1);
}

{ //-------------------------testing section starts from here---------------

  function getMark(actualResult, expectedResult) {
    return actualResult === expectedResult ? "✅" : "❌";
  }

  function getMessage(string, actualResult, expectedResult) {
    const border = '     |';
    const mark = getMark(actualResult, expectedResult) + border;

    return mark + string + border + actualResult + border + expectedResult;
  }

  function testStringToNumber(string, expectedResult) {
    const actualResult = stringToNumber(string);

    console.log(getMessage(string, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "string|", "actual|", "expected|");
    console.log('-------------------------------------');
  }

  function testAll() {
    heading();
    testStringToNumber('2', 2);
    testStringToNumber('234', 234);
    testStringToNumber('-27', -27);
    testStringToNumber('-110', -110);
    testStringToNumber('0', 0);
  }

  testAll();
}

