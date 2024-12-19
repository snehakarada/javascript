function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actual, expectedResult) {
    return actual === expectedResult ? "✅" : "❌";
  }

  function getMessage(number1, number2, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;

    return mark + number1 + border + number2 + border + actual + expected;
  }

  function testQuotient(number1, number2, expected) {
    const border = '  |';
    const actual = quotient(number1, number2) + border;

    console.log(getMessage(number1, number2, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "number1|", "number2|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testQuotient(12, 6, 2);
    testQuotient(11, 11, 1);
    testQuotient(4, 2, 2);
    testQuotient(2, 10, 0);
    testQuotient(1, 2, 0);
    testQuotient(0, 100, 0);
    testQuotient(1000, 100, 10);
  }

  testAll();
}