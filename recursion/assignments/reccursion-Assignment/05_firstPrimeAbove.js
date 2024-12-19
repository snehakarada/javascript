function _isPrime(primeCandidate, factor) {
  if (primeCandidate % factor === 0) {
    return factor === primeCandidate;
  }

  return _isPrime(primeCandidate, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }
  
  return _isPrime(primeCandidate, 2);
}

function firstPrimeAbove(number) {
  const primeCandidate = number + 1; 

  if(isPrime(primeCandidate)) {
    return primeCandidate;
  }

  return firstPrimeAbove(primeCandidate);
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

  function testFirstPrimeAbove(number, expectedResult) {
    const actualResult = firstPrimeAbove(number);

    console.log(getMessage(number, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testFirstPrimeAbove(0, 2);
    testFirstPrimeAbove(1, 2);
    testFirstPrimeAbove(2, 3);
    testFirstPrimeAbove(3, 5);
    testFirstPrimeAbove(17, 19);
    testFirstPrimeAbove(97, 101);
  }

  testAll();
}