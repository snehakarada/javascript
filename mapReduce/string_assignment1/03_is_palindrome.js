// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const reducer = function (intial, element) {
  intial.unshift(element);
  return intial;
}

const isPalindrome = function (string) {
  const array = string.split('');
  return array.reduce(reducer, []).join('') === string;
}

console.log(isPalindrome('malayalam'));
console.log(isPalindrome('hello'));