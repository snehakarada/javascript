function generatePowerSet(arr) {
  let sets = [[]];
  for (let index = 0; index < arr.length; index++) {
    const a = sets.length;
    for (let j = 0; j < a; j++) {
      sets.push(sets[j].concat(arr[index]));
    }
  }
  return sets;
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



function checkingArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function getMark(actual, expected) {
  return checkingArraysEqual(actual, expected) ? '✅' : '❌';
}

function getMessage(actual, expected, array1) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + actual + line + expected;
}

function testPowerSet(array1, expected) {
  const actual = generatePowerSet(array1);
  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testPowerSet([], [[]]);
  testPowerSet([1], [[], [1]]);
  testPowerSet([1, 2], [[], [1], [2], [1, 2]]);
  testPowerSet([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], 
    [1, 2, 3]]);
  testPowerSet([1, 2, 3, 4], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], 
    [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], 
    [1, 2, 3, 4]]);
}

testAll();
