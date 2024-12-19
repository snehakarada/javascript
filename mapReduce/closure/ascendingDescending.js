const numbers = [3, 2, 1, 9, 8, 7];
const ascendingOrder = function (a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
};


numbers.sort(function (a, b) {
  if (a >= 5 || b >= 5) {
    return ascendingOrder(a, b);
  }

  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
});


console.log(numbers);




// if (a < 5 || b < 5) {
//   return function (a, b) {
//     console.log('hello');
//     if (a === b) {
//       return 0;
//     }
//     return a < b ? 1 : -1;
//   };
// }
