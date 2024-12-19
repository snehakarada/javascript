function slice(string, start, end) {
  let sliceOfString = '';

  for (let index = start; index < end; index++) {
    sliceOfString += string[index];
  }

  return sliceOfString;
}

function isSubStringMatch(string, otherString, strIndex) {
  if (strIndex === string.length || otherString.length === 0) {
    return false;
  }
  const sliceOfString = slice(string, strIndex, otherString.length + strIndex);

  if (sliceOfString === otherString) {
    return true;
  }

  return isSubStringMatch(string, otherString, strIndex + 1);
}

function isSubString(string, otherString) {
  return isSubStringMatch(string, otherString, 0);
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

  function testIsSubString(string, subStr, expected) {
    const border = '  |';
    const actual = isSubString(string, subStr) + border;

    console.log(getMessage(string, subStr, actual, expected + border));
  }

  function heading() {
    console.log("✅/❌|", "str|", "substr|", "actual|", "expected|");
    console.log("-------------------------------------------------");
  }

  function testAll() {
    heading();
    testIsSubString('hi', 'h', true);
    testIsSubString('hi', 'o', false);
    testIsSubString('hello world', ' worl', true);
    testIsSubString('hell0 0', '0 0', true);
    testIsSubString('hi hello', 'hi hellw', false);
    testIsSubString('hi hello', '', false);
    testIsSubString('hello world', 'lo wo', true);
  }

  testAll();
}