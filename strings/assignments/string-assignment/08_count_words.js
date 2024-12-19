// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = ' ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numberOfWords = 0;

for (let index = 0; index < string.length; index++) {
    if (string[index] === ' ') {
        continue;
    }
    while ((string[index] !== ' ') && (index < string.length)) {
        index++;
    }
    numberOfWords = numberOfWords + 1;
}

console.log(numberOfWords);