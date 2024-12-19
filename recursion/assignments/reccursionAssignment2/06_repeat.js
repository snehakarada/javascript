function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return '';
  }

  return string + repeat(string, noOfTimes - 1);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actual, expected) {
    return actual === expected ? "✅" : "❌";
  }

  function getMessage(string, noOfTimes, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;

    return mark + string + border + noOfTimes + border + actual + expected;
  }

  function testRepeat(string, noOfTimes, expected) {
    const border = '  |';
    const actual = repeat(string, noOfTimes) + border;

    console.log(getMessage(string, noOfTimes, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "str|", "n times|", "actual|", "expected|");
    console.log('------------------------------------------------');
  }

  function testAll() {
    heading();
    testRepeat('hi', 2, 'hihi');
    testRepeat('i', 3, 'iii');
    testRepeat('g', 1, 'g');
    testRepeat('ka', 4, 'kakakaka');
    testRepeat('', 4, '');
    testRepeat('hi', 0, '');
  }

  testAll();
}