// Do not rename minefield, use it as input for your program.
const minefield = "--*-\n---*\n***-\n";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let defusedField = '';
for(let index = 0; index < minefield.length; index++) {
    if (minefield[index] === '*') {
        defusedField = defusedField + '+';
    }
    else {
        defusedField = defusedField + minefield[index];
    }
    //console.log(defusedField);
}
console.log(defusedField);
console.log(minefield);
