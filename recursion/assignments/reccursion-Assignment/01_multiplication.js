function multiply(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actual, expected) {
    return actual === expected ? "✅" : "❌";
  }

  function getMessage(number1, number2, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;
    
    return mark + number1 + border + number2 + border + actual + expected;
  }

  function testMultiply(number1, number2, expected) {
    const border = '  |';
    const actual = multiply(number1, number2) + border;

    console.log(getMessage(number1, number2, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "number1|", "number2|", "actual|", "expected|");
    console.log('----------------------------------------');
  }

  function testAll() {
    heading();
    testMultiply(1, 6, 6);
    testMultiply(11, 11, 121);
    testMultiply(4, 2, 8);
    testMultiply(2, 0, 0);
    testMultiply(2, 10, 20);
    testMultiply(2, 100, 200);
  }

  testAll();
}