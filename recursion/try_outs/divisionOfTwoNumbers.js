function divisionOfTwoNumbersReccursive(number1, number2, quotient) {
  if (number1 < number2 || number2 === 0) {
    return quotient;
  }

  if (number1 === number2) {
    return quotient + 1;
  }

  return 1 + quotient + divisionOfTwoNumbersReccursive(number1 - number2, number2, quotient);
}

function divisionOfTwoNumbers(number1, number2) {
  const quotient = 0;
  
  return divisionOfTwoNumbersReccursive(number1, number2, quotient);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌" ;
  }
  
  function getMessage(number1, number2, actualResult, expectedResult) {
    const border = '  |';
    const mark = getMark(actualResult, expectedResult) + border;
    return mark + number1 + border + number2 + border + actualResult + expectedResult;
  }
  
  function testDivisionOfTwoNumbers(number1, number2, expectedResult) {
    const border = '  |'
    const actualResult = divisionOfTwoNumbers(number1, number2) + border;

    console.log(getMessage(number1, number2, actualResult, expectedResult + border));
  }
  
  function heading() {
    console.log("right/wrong|", "number1|", "number2|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testDivisionOfTwoNumbers(12, 6, 2);
    testDivisionOfTwoNumbers(121, 11, 11);
    testDivisionOfTwoNumbers(4, 2, 2);
    testDivisionOfTwoNumbers(2, 0, 0);
    testDivisionOfTwoNumbers(2, 10, 0);
  }
  
  testAll();
}