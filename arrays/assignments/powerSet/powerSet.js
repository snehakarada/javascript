function getSubSet(arr, start, end) {
  const subSet = [];
  for (let index = start; index <= end; index++) {
    subSet.push(arr[index]);
  }
  return subSet;
}

function lastElements(arr, start, end, sets) {
  for (let index = arr.length - 1; index > end; index--) {
    const subSet = [];
    subSet.push(arr[start], arr[index]);
    sets.push(subSet);
  }
  return sets;
}

function lastElements1(arr, start, end, sets) {
  for (let index = arr.length - 1; index > end; index--) {
    const subSet = [];
    subSet.push(arr[start], arr[start + 1], arr[index]);
    sets.push(subSet);
  }
  return sets;
}

function extractElements(arr, sets) {
  for (let index = 0; index < arr.length - 2; index++) {
    lastElements(arr, index, index + 1, sets);
    lastElements1(arr, index, index + 2, sets);
  }
  return sets;
}



// console.log(extractElements([1, 2, 3, 4], []));


function generatePowerSet(arr) {
  let sets = [];
  sets.push([]);
  for (let index = 0; index < arr.length; index++) {
    for (let i = index; i < arr.length; i++) {
      sets.push(getSubSet(arr, index, i));
    }
  }
  if (arr.length > 2) {
    sets = extractElements(arr, sets);
  }
  return sets;
}



// console.log(generatePowerSet([]));
// console.log(generatePowerSet([1]));
// console.log(generatePowerSet([1, 2]));
// console.log(generatePowerSet([1, 2, 3]));
console.log(generatePowerSet([1, 2, 3, 4]));