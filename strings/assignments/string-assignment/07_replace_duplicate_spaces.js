// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " c    d";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let newString = ''; 

for (let index = 0; index < string.length; index++) {
    if ((string[index] !== ' ') || (string[index + 1] !== ' ')) {
        newString = newString + string[index];
    }
}

console.log(newString);
