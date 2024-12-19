// Do not rename minefield, use it as input for your program.
const minefield = "--*-\n---*\n";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function findingNumberOfColumns(minefield) {
  let numberOfColumns = 0;

  while (minefield[numberOfColumns] !== '\n') {
    numberOfColumns = numberOfColumns + 1;
  }

  return numberOfColumns;
}
let rowEnd = findingNumberOfColumns(minefield);
let rowLength = -1;
let columnLength = -1;
for (let column = 0; column < minefield.length; column++) {
  
  for (let i = 0; i < rowEnd; i++) {
    if (minefield[i] === '*') {
      column = 
    }
  }
}