// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this is cool";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reversedSentence = '';

for (let lastIndex = sentence.length - 1; lastIndex > -1; lastIndex--) {
    let reversedWord = '';
    if (sentence[lastIndex] !== ' ') {
        reversedWord = sentence[lastIndex] + reversedWord;
        lastIndex--;
    }
    console.log(reversedWord);
    reversedSentence = reversedSentence + reversedWord;
    if (sentence[lastIndex] === ' ') {
        reversedSentence = reversedSentence + ' ';
    }
}

console.log(reversedSentence);