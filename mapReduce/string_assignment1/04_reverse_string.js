// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const reducer = function (intial, element) {
  intial.unshift(element);
  return intial;
}

const reverseTheStr = function (string) {
  const array = string.split('');
  return array.reduce(reducer, []).join('');
}

console.log(reverseTheStr('hi'));
console.log(reverseTheStr('malayalam'));
console.log(reverseTheStr('pop'));
console.log(reverseTheStr('hello'));