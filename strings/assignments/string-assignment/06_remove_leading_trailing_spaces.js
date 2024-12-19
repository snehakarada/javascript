// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "      abc  ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let newString = '';
let startIndex = 0;
let lastIndex = string.length;
while (string[startIndex] === ' ') {
    startIndex++;
}
while (string[lastIndex - 1] === ' ') {
    lastIndex--;
}
for (startIndex; startIndex < lastIndex; startIndex++) {
    newString = newString + string[startIndex];
}
console.log(newString);
