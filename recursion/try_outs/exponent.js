function multiplication(number1, number2) {
  if (number2 === 0) {
    return 0;
  }

  return number1 + multiplication(number1, number2 - 1);
}


function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  return multiplication(base , exponent(base, power - 1));
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌" ;
  }
  
  function getMessage(base, power, actualResult, expectedResult) {
    const border = '   |';
    const mark = getMark(actualResult, expectedResult) + border;
    return mark + base + border + power + border + actualResult + expectedResult;
  }
  
  function testExponent(base, power, expectedResult) {
    const border = '   |'
    const actualResult = exponent(base, power) + border;
    console.log(getMessage(base, power, actualResult, expectedResult + border));
  }
  
  function heading() {
    console.log("right/wrong|", "base|", "power|" + "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testExponent(2, 3, 8);
    testExponent(1, 4, 1);
    testExponent(2, 0, 1);
    testExponent(0, 3, 0);
  }
  
  testAll();
}
