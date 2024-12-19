
function getAllEvens(from, to, sum) {
  if (from === to || from > to) {
    return sum + from;
  }

  return getAllEvens(from + 2, to, sum + from);
}

function sumOfEvensInARange(from, to) {
  const sum = 0;

  return getAllEvens(from + (from % 2), to - (to % 2), sum);
}


console.log(sumOfEvensInARange(2, 10));
console.log(sumOfEvensInARange(3, 10));
console.log(sumOfEvensInARange(2, 9));
console.log(sumOfEvensInARange(1, 7));