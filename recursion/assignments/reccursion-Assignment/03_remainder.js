function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌";
  }

  function getMessage(number1, number2, actual, expected) {
    const line = '  |';
    const mark = getMark(actual, expected) + line;

    return mark + number1 + line + number2 + line + actual + expected;
  }

  function testRemainder(number1, number2, expected) {
    const border = '  |';
    const actual = remainder(number1, number2) + border;

    console.log(getMessage(number1, number2, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "number1|", "number2|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testRemainder(2, 6, 2);
    testRemainder(4, 4, 0);
    testRemainder(5, 2, 1);
    testRemainder(63, 12, 3);
  }

  testAll();
}