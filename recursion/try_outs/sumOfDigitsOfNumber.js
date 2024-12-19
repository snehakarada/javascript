function sumOfDigitsInANumber(number) {
  if (number === 0) {
    return 0;
  }

  const rightMostDigit = number % 10;

  return rightMostDigit + sumOfDigitsInANumber((number - rightMostDigit) / 10);
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
  
  function testSumOfDigitsInANumber(number, expectedResult) {
    const actualResult = sumOfDigitsInANumber(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testSumOfDigitsInANumber(34, 7);
    testSumOfDigitsInANumber(1, 1);
    testSumOfDigitsInANumber(50, 5);
    testSumOfDigitsInANumber(0, 0);
    testSumOfDigitsInANumber(659, 20);
  }
  
  testAll();
}