// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array
function dropLast(array, number) {
  const remainingArray = [];
  const startIndex = array.length - 1 - number;

  for (let index = startIndex; index >= 0; index--) {
    remainingArray.unshift(array[index]);
  }

  return remainingArray;
}

// ----------------* testing section starts from here *-----------

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

function getMessage(actual, expected, array1, value) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + value + line + actual + line + expected;
}

function testDropLast(array1, value, expected) {
  const actual = dropLast(array1, value);

  console.log(getMessage(actual, expected, array1, value));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'value', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3, 4, 5], 3, [1, 2]);
  testDropLast([1, 2, 3, 4, 5], 6, []);
  testDropLast([1, 2, 3], 0, [1, 2, 3]);
}

testAll();
