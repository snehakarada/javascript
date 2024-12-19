// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters
function mapLengths(words) {
  const arrayOfLengths = [];

  for (let index = 0; index < words.length; index++) {
    arrayOfLengths.push(words[index].length);
  }

  return arrayOfLengths;
}

// -----------------* testing section starts from here *-------------

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

function getMessage(actual, expected, array1) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + actual + line + expected;
}

function testMapLengths(array1, expected) {
  const actual = mapLengths(array1);

  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testMapLengths(['h', 'hi'], [1, 2]);
  testMapLengths(['hi', 'hello'], [2, 5]);
  testMapLengths(['459', 'hell0'], [3, 5]);
  testMapLengths(['459', ''], [3, 0]);
  testMapLengths(['', ''], [0, 0]);
}

testAll();
