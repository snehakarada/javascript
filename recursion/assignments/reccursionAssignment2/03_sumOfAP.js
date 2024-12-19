function sumOfAP(firstTerm, diff, noOfTrems) {
  if (noOfTrems === 0) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + diff, diff, noOfTrems - 1);
}

{ //-------------------------testing section starts from here---------------

  function getMark(actualResult, expectedResult) {
    return actualResult === expectedResult ? "✅" : "❌";
  }

  function getFirstDiffNumOfTerms(firstTerm, diff, noOfTerms) {
    const border = '  |';

    return firstTerm + border + diff + border + noOfTerms + border;
  }

  function getMessage(firstTerm, diff, noOfTerms, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;
    const diffNoOfTerms = getFirstDiffNumOfTerms(firstTerm, diff, noOfTerms);

    return mark + diffNoOfTerms + actual + border + expected;
  }

  function testSumOfAP(firstTerm, diff, noOfTerms, expected) {
    const actual = sumOfAP(firstTerm, diff, noOfTerms);

    console.log(getMessage(firstTerm, diff, noOfTerms, actual, expected));
  }

  function heading() {
    console.log("right/wrong|", "a|", 'd|', 'N', "actual|", "expected|");
  }

  function testAll() {
    heading();
    testSumOfAP(2, 2, 1, 2);
    testSumOfAP(2, 2, 2, 6);
    testSumOfAP(2, 2, 3, 12);
    testSumOfAP(10, 1, 3, 33);
    testSumOfAP(7, 2, 1, 7);
    testSumOfAP(7, 2, 2, 16);
    testSumOfAP(7, 2, 0, 0);
  }

  testAll();
}