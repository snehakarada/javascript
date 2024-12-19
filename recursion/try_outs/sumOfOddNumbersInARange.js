
function getAllOdds(from, to, sum) {
  if (from === to || from > to) {
    return sum + from;
  }

  return getAllOdds(from + 2, to, sum + from);
}

function sumOfOddInARange(from, to) {
  const sum = 0;
  const start = from % 2 === 0 ? from + 1 : from;
  const end = to % 2 === 0 ? to - 1 : to;

  return getAllOdds(start, end, sum);
}


console.log(sumOfOddInARange(1, 3));
console.log(sumOfOddInARange(3, 10));
console.log(sumOfOddInARange(2, 9));
console.log(sumOfOddInARange(1, 7));