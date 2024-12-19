function logarithm(number) {
  if (number < 10) {
    return 0;
  }

  return 1 + logarithm(number / 10);
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
  
  function testLogarithm(number, expectedResult) {
    const actualResult = logarithm(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testLogarithm(10, 1);
    testLogarithm(100, 2);
    testLogarithm(102, 2);
    testLogarithm(10002, 4);
  }
  
  testAll();
}






