// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function extractDigits(number) {
  let positiveNumber = Math.abs(number);
  const digits = [];
  
  if (positiveNumber === 0) {
    return [0];
  }

  while (positiveNumber > 0) {
    const lastDigit = positiveNumber % 10;
    digits.unshift(lastDigit);
    positiveNumber = Math.floor(positiveNumber / 10);
  }

  return digits;
}

// -------------* testing section starts from here *---------------

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function getMessage(actual, expected, number) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + number + line + actual + line + expected;
}

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);

  console.log(getMessage(actual, expected, number));
}

function heading() {
  console.log('right/wrong |', 'number |', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testExtractDigits((123), [1, 2, 3]);
  testExtractDigits((-123), [1, 2, 3]);
  testExtractDigits((-19003), [1, 9, 0, 0, 3]);
  testExtractDigits((0), [0]);
}

testAll();
