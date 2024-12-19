function compoundInterest(principle, rate, time) {
  if (time === 0) {
    return 0;
  }
  const interest = (principle * rate / 100);

  return interest + compoundInterest(principle + interest, rate, time - 1);
}

{ //-------------------------testing section starts from here---------------

  function getMark(actualResult, expectedResult) {
    return actualResult === expectedResult ? "✅" : "❌";
  }

  function getFirstDiffNumOfTerms(principle, rate, time) {
    const border = '  |';

    return principle + border + rate + border + time + border;
  }

  function getMessage(principle, rate, time, actual, expected) {
    const border = '  |';
    const mark = getMark(actual, expected) + border;
    const input = getFirstDiffNumOfTerms(principle, rate, time);

    return mark + input + actual + border + expected;
  }

  function testCompundIntrest(principle, rate, time, expected) {
    const actual = compoundInterest(principle, rate, time);

    console.log(getMessage(principle, rate, time, actual, expected));
  }

  function heading() {
    console.log("right/wrong|", "p|", 'r|', 't', "actual|", "expected|");
  }

  function testAll() {
    heading();
    testCompundIntrest(100, 50, 2, 125);
    testCompundIntrest(100, 5, 2, 10.25);
    testCompundIntrest(100, 5, 3, 15.7625);
    testCompundIntrest(0, 0.01, 10, 0);
    testCompundIntrest(1000, 1, 0, 0);
    testCompundIntrest(1000, 5, 3, 157.625);
  }

  testAll();
}