// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const isItVowel = function (char) {
  return 'aeiouAEIOU'.includes(char);
}

const vowelCount = function (string) {
  const arr = string.split('');
  return arr.filter(isItVowel).length;
}

console.log(vowelCount('hihellooo'));


