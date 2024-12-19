// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// ['h', 'i', ' '] ==> ['h', 'i', '_'];

const reducer = function (intial, element) {
  if (element === ' ') {
    intial.push('_');
    return intial;
  }

  intial.push(element);
  return intial;
}

const replaceSpace = function (string) {
  const array = string.split('');
  return array.reduce(reducer, []).join('');
}

console.log(replaceSpace(' _hi  hello  '));