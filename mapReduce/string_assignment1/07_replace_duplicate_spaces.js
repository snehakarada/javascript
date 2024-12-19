// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const getUniqueElements = function (accumulator, element) {
  if (accumulator.at(-1) === ' ' && element === ' ') {
    return accumulator;
  }

  accumulator.push(element);
  return accumulator;
}

const removeDuplicates = function (string) {
  const arr = string.split('');
  return arr.reduce(getUniqueElements, []);
}

console.log(removeDuplicates('hi  h   e  llo'));
