function sumOfGP(firstTerm, ratio, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * ratio, ratio, noOfTerms - 1);
}

{ //-------------------------testing section starts from here---------------

  function getMark(actualResult, expectedResult) {
    return actualResult === expectedResult ? "✅" : "❌";
  }

  function getFirstDiffNumOfTerms(firstTerm, ratio, noOfTerms) {
    const border = '  |';

    return firstTerm + border + ratio + border + noOfTerms + border;
  }

  function getMessage(firsrTerm, ratio, noOfTerms, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;
    const input = getFirstDiffNumOfTerms(firsrTerm, ratio, noOfTerms);

    return mark + input + actual + border + expected;
  }

  function testSumOfGP(firstTerm, ratio, noOfTerms, expected) {
    const actual = sumOfGP(firstTerm, ratio, noOfTerms);

    console.log(getMessage(firstTerm, ratio, noOfTerms, actual, expected));
  }

  function heading() {
    console.log("right/wrong|", "a|", 'd|', 'N', "actual|", "expected|");
  }

  function testAll() {
    heading();
    testSumOfGP(3, 2, 1, 3);
    testSumOfGP(3, 2, 2, 9);
    testSumOfGP(3, 2, 3, 21);
    testSumOfGP(2, 5, 4, 312);
    testSumOfGP(7, 2, 1, 7);
    testSumOfGP(7, 2, 2, 21);
    testSumOfGP(7, 2, 0, 0);
  }

  testAll();
}