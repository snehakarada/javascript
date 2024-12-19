function _reverse(string, index, revStr) {
  if (index < 0) {
    return revStr;
  }

  return revStr + string[index] + _reverse(string, index - 1, revStr);
}

function reverse(string) {
  return _reverse(string, string.length - 1, '');
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actualReasult, expectedResult) {
    return actualReasult === expectedResult ? "✅" : "❌";
  }

  function getMessage(number, actualResult, expectedResult) {
    const border = '     |';
    const mark = getMark(actualResult, expectedResult) + border;

    return mark + number + border + actualResult + border + expectedResult;
  }

  function testReverse(string, expectedResult) {
    const actualResult = reverse(string);

    console.log(getMessage(string, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "string|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testReverse('hi', 'ih');
    testReverse('malayalam', 'malayalam');
    testReverse('', '');
    testReverse('pop', 'pop');
    testReverse('olleh', 'hello');
  }

  testAll();
}