function _findIndex(string, char, index) {
  if (index === string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return _findIndex(string, char, index + 1);
}

function findLastIndex(string, char) {
  return _findIndex(string, char, 0);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actual, expected) {
    return actual === expected ? "✅" : "❌";
  }

  function getMessage(string, subStr, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;

    return mark + string + border + subStr + border + actual + expected;
  }

  function testFindLastIndex(string, subStr, expected) {
    const border = '  |';
    const actual = findLastIndex(string, subStr) + border;

    console.log(getMessage(string, subStr, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "str|", "substr|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testFindLastIndex('hi', 'i', 1);
    testFindLastIndex('hi', 'h', 0);
    testFindLastIndex('hi', 'w', -1);
    testFindLastIndex('hello', 'l', 2);
  }

  testAll();
}