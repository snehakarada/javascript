function isPrimeReccursive(number, factor) {
  if (factor === number) {
    return true;
  }

  if (number % factor === 0 || factor > number) {
    return false;
  }

  return isPrimeReccursive(number, factor + 1);
}

function isPrime(number) {
  const factor = 2;

  return isPrimeReccursive(number, factor);
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
    console.log(getMessage(number, actualResult, expectedResult))
  }

  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testIsPrime(2, true);
    testIsPrime(4, false);
    testIsPrime(1, false);
    testIsPrime(17, true);
    testIsPrime(22, false);
  }

  testAll();
}