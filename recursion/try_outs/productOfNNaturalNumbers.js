function productOfNNaturalNumbers(number) {
  if (number === 1) {
    return 1;
  }

  return number * productOfNNaturalNumbers(number - 1);
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
  
  function testProductOfNNaturalNumbers(number, expectedResult) {
    const actualResult = productOfNNaturalNumbers(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testProductOfNNaturalNumbers(3, 6);
    testProductOfNNaturalNumbers(1, 1);
    testProductOfNNaturalNumbers(5, 120);
    testProductOfNNaturalNumbers(4, 24);
    testProductOfNNaturalNumbers(6, 720);
  }
  
  testAll();
}