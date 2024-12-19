// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " sub string";
const start = 3;
const end = 11;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let substring = '';
let startOfSubstring = start;
let endOfSubstring = end;

if (startOfSubstring < 0) {
  startOfSubstring = 0;
}

if (endOfSubstring > string.length - 1) {
  endOfSubstring = string.length - 1;
}

for (startOfSubstring; startOfSubstring <= endOfSubstring; startOfSubstring++) {
  substring = substring + string[startOfSubstring];
}

console.log(substring);

