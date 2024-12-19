function _isPrime(primeCandidate, factor) {
  if (primeCandidate % factor === 0) {
    return  factor === primeCandidate;
  }

  return _isPrime(primeCandidate, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }
  return _isPrime(primeCandidate, 2);
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

  function testIsPrime(number, expectedResult) {
    const actualResult = isPrime(number);

    console.log(getMessage(number, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testIsPrime(2, true);
    testIsPrime(4, false);
    testIsPrime(97, true);
    testIsPrime(91, false);
    testIsPrime(17, true);
    testIsPrime(18, false);
    testIsPrime(1, false);
  }

  testAll();
}