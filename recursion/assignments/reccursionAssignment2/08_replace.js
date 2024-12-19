function getChar(char, target, replacement) {
  return char === target ? replacement : char;
}

function _replace(text, target, replacement, index) {
  if (index === text.length) {
    return '';
  }

  const char = getChar(text[index], target, replacement);

  return char + _replace(text, target, replacement, index + 1);
}

function replace(text, target, replacement) {
  return _replace(text, target, replacement, 0);
}

{ // ------------------------testing Section starts from here--------------

  function getMark(actual, expected) {
    return actual === expected ? "✅" : "❌";
  }

  function getStrTargetReplace(string, target, replacement) {
    const border = '  |';

    return string + border + target + border + replacement + border;
  }

  function getMessage(string, target, repalcement, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;
    const StrTargetReplace = getStrTargetReplace(string, target, repalcement);

    return mark + StrTargetReplace + actual + border + expected + border;
  }

  function testReplace(string, target, replacement, expected) {
    const actual = replace(string, target, replacement);

    console.log(getMessage(string, target, replacement, actual, expected));
  }

  function heading() {
    console.log("✅/❌|", "str|", "goal|", 'replace|', "actual|", "expected|");
    console.log('------------------------------------------------');
  }

  function testAll() {
    heading();
    testReplace('hi', 'i', 'e', 'he');
    testReplace('hello world', 'l', 'z', 'hezzo worzd');
    testReplace('  ', ' ', 'z', 'zz');
    testReplace('wow', 'w', 'p', 'pop');
  }

  testAll();
}