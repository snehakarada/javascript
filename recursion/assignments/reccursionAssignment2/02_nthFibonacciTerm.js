function nthFibonacciTerm(number) {
  if (number === 1) {
    return 0;
  }

  if (number === 2) {
    return 1;
  }

  return nthFibonacciTerm(number - 1) + nthFibonacciTerm(number - 2);
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

  function testNthFibonacciSeries(number, expectedResult) {
    const actualResult = nthFibonacciTerm(number);

    console.log(getMessage(number, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testNthFibonacciSeries(1, 0);
    testNthFibonacciSeries(2, 1);
    testNthFibonacciSeries(3, 1);
    testNthFibonacciSeries(4, 2);
    testNthFibonacciSeries(5, 3);
    testNthFibonacciSeries(6, 5);
    testNthFibonacciSeries(20, 4181);
  }

  testAll();
}