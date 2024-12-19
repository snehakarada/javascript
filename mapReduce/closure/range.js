const names = ['sita', 'rama', 'laxman', 'ravana', 'bhagya', 'shinchan'];
const fruits = ['orange', 'mango', 'apple'];

const cycle = function (end) {
  let counter = 0;
  return function () {
    if (counter === end) {
      counter = 0;
    }

    return counter++;
  };
};

const inc1 = function () {
  let x = -1;
  return function () {
    return x += 1;
  };
};

const range = function (from, to, step) {
  const numbers = [];
  for (let i = from; i < to; i += step) {
    numbers.push(i);
  }

  return numbers;
};

const inDc = function (max) {
  const incOrder = range(0, max, 1);
  const decOrder = incOrder.toReversed();
  const inDc = incOrder.concat(decOrder);
  let counter = -1;

  return function () {
    counter += 1;

    if (counter === inDc.length) {
      counter = 0;
    }

    return inDc[counter];
  };
};


const b = incrementDecremet(fruits.length);

const distrubute = function (fruits) {
  const index = b();
  // console.log('index', index);
  return fruits[index];
};

console.log('names', names, 'fruits', fruits);
console.log(names.map(function (name) { return name + ' ' + distrubute(fruits); }));
// 3
// 0 1 2 2 1 0 0 1 2 