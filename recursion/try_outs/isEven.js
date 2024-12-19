function isEven(number) {
  if (number < 2) {
    return number === 0;
  }
  return isEven(number - 2);
}

{ //-------------------------testing section starts from here---------------
  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌";
  }

  function getMessage(number, actualResult, expectedResult) {
    const border = '     |';
    const mark = getMark(actualResult, expectedResult) + border;
    return mark + number + border + actualResult + border + expectedResult;
  }

  function testIsEven(number, expectedResult) {
    const actualResult = isEven(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }

  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }

  function testEvenCases() {
    testIsEven(2, true);
    testIsEven(4, true);
    testIsEven(46, true);
  }

  function testOddCases() {
    testIsEven(1, false);
    testIsEven(3, false);
    testIsEven(47, false)
  }

  function testAll() {
    heading();
    testEvenCases();
    testOddCases();
  }

  testAll();
}