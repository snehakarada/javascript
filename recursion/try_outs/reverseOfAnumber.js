
function reverseReccursive(number, reverse) {
  if (number <= 0) {
    return reverse;
  }
  let remainder = number % 10;
  
  return reverseReccursive((number - remainder) / 10, reverse * 10 + remainder);
}

function reverseOfANumber(number) {
  let reverse = 0;
  return reverseReccursive(number, reverse);
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

function testReverseOfANumber(number, expectedResult) {
  const actualResult = reverseOfANumber(number);
  console.log(getMessage(number, actualResult, expectedResult))
}

function heading() {
  console.log("right/wrong|", "number|", "actual|", "expected|");
}

function testAll() {
  heading();
  testReverseOfANumber(12, 21);
  testReverseOfANumber(121, 121);
  testReverseOfANumber(46, 64);
  testReverseOfANumber(100, 1);
}

testAll();
}