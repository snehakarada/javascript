const numbers = [4, 12, 5, 1, 6, 3, 0, 24, 15];
const numbers1 = [[5, 4], [21, 1], [3, 1], [23, 1]];

const a = numbers1.map(function (element) {
  element.sort(function (a, b) {
    return a - b;
  });
});

numbers.sort(function (a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

// all sorted evens in left side and all odd evens in right side in an array

numbers.sort(function (a, b) {
  if (a % 2 === b % 2) {
    return a - b;
  }

  return a % 2 === 0 ? -1 : 1;
});

// console.log(numbers);

