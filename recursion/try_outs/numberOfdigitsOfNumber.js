function countDigitsOfNumber(number, count) {
  if (number === 0) {
    return 0;
  }

  const rightMostDigit = number % 10;

  return count + countDigitsOfNumber((number - rightMostDigit) / 10, count);
}

function numberOfDigitsInANumber(number) {
  const count = 1;
  if (number === 0) {
    return count;
  }
  return countDigitsOfNumber(number, count);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌" ;
  }
  
  function getMessage(number, actualResult, expectedResult) {
    const border = '     |';
    const mark = getMark(actualResult, expectedResult) + border;
    return mark + number + border + actualResult + border + expectedResult;
  }
  
  function testNumberOfDigitsInANumber(number, expectedResult) {
    const actualResult = numberOfDigitsInANumber(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testNumberOfDigitsInANumber(12, 2);
    testNumberOfDigitsInANumber(121, 3);
    testNumberOfDigitsInANumber(46424, 5);
    testNumberOfDigitsInANumber(1, 1);
    testNumberOfDigitsInANumber(0, 1);
  }
  
  testAll();
}