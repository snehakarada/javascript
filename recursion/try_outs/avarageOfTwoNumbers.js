function avarageOfTwoReccursive(number1, number2) {
  if (number1 === number2) {
    return number1;
  }

  return avarageOfTwoReccursive(number1 - .5, number2 + .5);
}

function avarageOfTwoNumbers(number1, number2) {
  const biggerNumber = number1 > number2 ? number1 : number2;
  const smallerNumber = number1 < number2 ? number1 : number2;

  return avarageOfTwoReccursive(biggerNumber, smallerNumber);
}
{ // ------------------------testing Section starts from here--------------

function getMark(actualReasult, expectedResult) {
  return actualReasult === expectedResult ? "✅" : "❌" ;
}

function getMessage(number1, number2, actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult + border) + border;
  return mark + number1 + border + number2 + border + actualResult + expectedResult;
}

function testAvarageOfTwoNumbers(number1, number2, expectedResult) {
  const border = '   |'
  const actualResult = avarageOfTwoNumbers(number1, number2) + border;
  
  console.log(getMessage(number1, number2, actualResult, expectedResult))
}

function heading() {
  console.log("right/wrong|", "number1|", "number2|", "actual|", "expected|");
}

function testAll() {
  heading();
  testAvarageOfTwoNumbers(8, 4, 6);
  testAvarageOfTwoNumbers(8, 3, 5.5);
  testAvarageOfTwoNumbers(1, 1, 1);
  testAvarageOfTwoNumbers(1, 20, 10.5);
}

testAll();
}