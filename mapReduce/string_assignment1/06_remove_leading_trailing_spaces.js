// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const getIndexOfNonSpaceChar = function (accumulator, element, index) {
  if (element !== ' ') {
    return index;
  }

  return accumulator;
}

const getArray = function ([newArr, start, end], element, index, array) {
  if (start >= end) {
    return [newArr, start, end];
  }

  newArr.push(array[start]);
  start += 1;

  return [newArr, start, end];
}

const trialingSpaces = function (string) {
  const array = string.split('');
  const end = array.reduce(getIndexOfNonSpaceChar, 0);
  const start = array.reduceRight(getIndexOfNonSpaceChar, 0);

  const a = array.reduce(getArray, [[], start, end + 1]);
  return a[0].join('');
}


console.log(trialingSpaces('    n c b   c    hi'));