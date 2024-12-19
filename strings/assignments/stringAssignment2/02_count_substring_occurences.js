// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " i i ";
const subString = " ";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let count = 0;
let index = subString.length === 0 ? string.length+1 : 0;
const loopEnd = string.length - subString.length + 1;

for (index; index < loopEnd; index++) {
    let isSubstring = '';
    let subStringIndex = index + subString.length
    for (let traverse = index; traverse < subStringIndex; traverse++) {
        isSubstring = isSubstring + string[traverse];
    }
    if (isSubstring === subString) {
        count = count + 1;
    }
}

console.log(count);