function isOdd(number) {
  if (number < 2) {
    return number === 1;
  }
  return isOdd(number - 2)
}

function getMark(actualReasult, expectedResult) {
  return actualReasult === expectedResult ? "✅" : "❌" ;
}

function getMessage(number, actualResult, expectedResult) {
  const border = '     |';
  const mark = getMark(actualResult, expectedResult) + border;
  return mark + number + border + actualResult + border + expectedResult;
}

function testIsEven(number, expectedResult) {
  const actualResult = isOdd(number);
  console.log(getMessage(number, actualResult, expectedResult))
}

function heading() {
  console.log("right/wrong|", "number|", "actual|", "expected|");
}

function testEvenCases() {
  testIsEven(2, false);
  testIsEven(4, false);
  testIsEven(46, false);
}

function testOddCases() {
  testIsEven(1, true);
  testIsEven(3, true);
  testIsEven(47, true)
}

function testAll() {
  heading();
  testOddCases();
  testEvenCases();
}

testAll();