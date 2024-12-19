function squareRootOfANumberReccursive(number, squareRoot) {
  if (squareRoot * squareRoot > number) {
   return 0;
  }
  
  return 1 + squareRootOfANumberReccursive(number, squareRoot + 1);
}

function squareRootOfANumber(number) {
  const squareRoot = 1;

  return squareRootOfANumberReccursive(number, squareRoot);
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
  
  function testSquareRootOfANumber(number, expectedResult) {
    const actualResult = squareRootOfANumber(number);
    console.log(getMessage(number, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "number|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testSquareRootOfANumber(4, 2);
    testSquareRootOfANumber(5, 2);
    testSquareRootOfANumber(10, 3);
    testSquareRootOfANumber(2, 1);
    testSquareRootOfANumber(100, 10);
    testSquareRootOfANumber(1000, 31);
  }


  testAll();
}