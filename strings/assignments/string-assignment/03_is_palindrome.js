// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   abcba   ";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reverseString = '';

for (let index = string.length - 1; index > -1; index--) {
    reverseString = reverseString + string[index];
}

const isStringPalindrome = string === reverseString;
console.log(isStringPalindrome);
