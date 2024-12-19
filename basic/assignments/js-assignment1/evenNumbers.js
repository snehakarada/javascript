// Do not rename startOfTheRange, endOfTheRange, use them as input for your program.
// While testing we will change their values.
const startOfTheRange = 10;
const endOfTheRange = 100;
// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let actualEvenNumber = startOfTheRange + (startOfTheRange % 2);
for (let evenNumber = actualEvenNumber; evenNumber <= endOfTheRange ; evenNumber = evenNumber + 2) {
    console.log(evenNumber);
}
