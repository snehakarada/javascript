// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
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

function testFindIndex(array1, element, expected) {
  const actual = findIndex(array1, element);

  console.log(getMessage(actual, expected, array1, element));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'value|', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testFindIndex(['o', 'a'], 'a', 1);
  testFindIndex(['o'], 'a', -1);
  testFindIndex(['a', 'b', 'a'], 'a', 0);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], 'tea', 2);
  testFindIndex([1, 4, 5, 1], 1, 0);
}

testAll();
