function reverseOfStringReccursive(string, reversedString, index) {
  if (index < 0) {
    return reversedString;
  }
  reversedString = reversedString + string[index];

  return reverseOfStringReccursive(string, reversedString, index - 1);
}

function reverseOfString(string) {
  let reversedString = '';
  
  return reverseOfStringReccursive(string, reversedString, string.length - 1);
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
  
  function testReverseOfString(string, expectedResult) {
    const actualResult = reverseOfString(string);
    console.log(getMessage(string, actualResult, expectedResult))
  }
  
  function heading() {
    console.log("right/wrong|", "string|", "actual|", "expected|");
  }
  
  function testAll() {
    heading();
    testReverseOfString('hi', 'ih');
    testReverseOfString('121', '121');
    testReverseOfString('malayalam', 'malayalam');
    testReverseOfString('hello 001', '100 olleh');
  }
  
  testAll();
  }
