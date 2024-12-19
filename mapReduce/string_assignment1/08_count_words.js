// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const isItNonEmptyWord = function (word) {
  return word !== ''
}


const multipleWords = function (string) {
  const arr = string.split(' ');

  return arr.filter(isItNonEmptyWord).length;
}

console.log(multipleWords('hi  hello hi'));