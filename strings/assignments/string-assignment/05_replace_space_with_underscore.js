// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   d   ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let newString = '';

for (let index = 0; index < string.length; index++) {
    let condition = string[index] === ' ' ;
    newString = newString + (condition ? '_' : string[index]);
}

console.log(newString);