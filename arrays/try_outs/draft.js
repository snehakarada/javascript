function sumOfElements(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
const a = [3, 4, 5, 6];
console.log(sumOfElements(a));