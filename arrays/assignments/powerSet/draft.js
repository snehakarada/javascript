function elements(arr, sets) {
  for (let index = 0; index < arr.length; index++) {
    const subSet = [];
    subSet.push(arr[index]);
    sets.push(subSet);
  }
  return sets;
}

function generatePowerSet(arr) {
  let sets = [];
  sets.push([]);
  // sets = elements(arr, setss);
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      const subSet = [];
      subSet.push(arr.slice(i, j));
      sets.push(subSet);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      const subSet = [];
      subSet.push(arr[i], arr[j]);
      sets.push(subSet);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const a = [];
    for (let j = i + 2; j < arr.length; j++) {
      const subSet = [];
      a.push(arr[i], arr.slice(j, arr.length));
      sets.push(a);
    }
  }

  return sets;
}

console.log(generatePowerSet([1, 2, 3, 4]));




function mappingBinaryToNumber(set, arr) {
  const subSet = [];
  for (let index = 0; index < set.length; index++) {
    if (set[index] === 1) {
      subSet.push(arr[index]);
    }
  }
  return subSet;
}