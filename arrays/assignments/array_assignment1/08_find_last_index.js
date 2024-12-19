// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

// -----------------* testing section starts from here *-------------

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function getMessage(actual, expected, array1, value) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + value + line + actual + line + expected;
}

function testFindLastIndex(array1, element, expected) {
  const actual = findLastIndex(array1, element);

  console.log(getMessage(actual, expected, array1, element));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'value|', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testFindLastIndex(['o', 'a'], 'a', 1);
  testFindLastIndex(['a', 'o', 'a'], 'a', 2);
  testFindLastIndex(['hi', 'hello', 'bye', 'hi'], 'hi', 3);
  testFindLastIndex(['h', 'o'], 'b', -1);
  testFindLastIndex([2, 4, 2, 1], 2, 2);
  testFindLastIndex([2, 4, 2, 1], 9, -1);
}

testAll();
