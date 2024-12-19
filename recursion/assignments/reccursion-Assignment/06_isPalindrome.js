function _palindrome(string, startIndex, endIndex) {
  if (startIndex > endIndex) {
    return true;
  }

  if (string[startIndex] !== string[endIndex]) {
    return false;
  }

  return _palindrome(string, startIndex + 1, endIndex - 1);
}

function isPalindrome(palindromeCandidate) {
  return _palindrome(palindromeCandidate, 0, palindromeCandidate.length - 1);
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
    const actualResult = isPalindrome(string);
    console.log(getMessage(string, actualResult, expectedResult));
  }

  function heading() {
    console.log("right/wrong|", "string|", "actual|", "expected|");
  }

  function testAll() {
    heading();
    testReverse('hi', false);
    testReverse('malayalam', true);
    testReverse('pop', true);
    testReverse('he', false);
    testReverse('hhh', true);
    testReverse('', true);
  }

  testAll();
}
