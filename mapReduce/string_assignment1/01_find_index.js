// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE


const reducer = function (intial, element, index) {
  if (element === intial[0]) {
    intial[1] = index;
    return intial;
  }

  return intial;
}

const findIndex = function (string, charToFind) {
  const array = string.split('');
  const index = array.reduceRight(reducer, [charToFind, -1]);
  return index[1];
}

console.log(findIndex('hjj', 'j'))

