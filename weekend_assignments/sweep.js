// Do not rename minefield, use it as input for your program.
const minefield = "-*--\n---*\n*---\n-*--\n";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function sort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let i = index + 1; i < array.length; i++) {
      if (array[index] > array[i]) {
        const temp = array[index];
        array[index] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

function holdinglengths(index, minefield, rows, columns, distances, noOfColumns, noOfRows) {
  if (index === minefield.length) {
    return [];
  }

  if (minefield[index] === '*') {
    rows.push(noOfRows);
    columns.push(noOfColumns);
    distances.push(noOfColumns + noOfRows);
  }

  if (minefield[index] === '\n') {
    noOfColumns = -1;
    noOfRows += 1;
  }

  return holdinglengths(index + 1, minefield, rows, columns, distances, noOfColumns + 1, noOfRows);
}

function defusingMines(minefield) {
  let distances = [];
  const rows = [];
  const columns = [];

  holdinglengths(0, minefield, rows, columns, distances,0, 0);
  distances = sort(distances);
  let defusedField = '';
  let dabba = minefield;
  console.log(rows, columns, distances);

  for (let index = 0; index < minefield.length; index++) {
    console.log(index);
    if (dabba[index] === '*') {
      if (draft(distances, rows, columns) === '*') {
        defusedField += '*';
        continue;
      }
      defusedField += '+';
      for (let iterate = index + 1; iterate < dabba.length; iterate++) {
        defusedField += dabba[iterate];
      }
      console.log(defusedField);
      dabba = defusedField;
      defusedField = '';
      index = -1;
    }
    else {
      defusedField += dabba[index];
    }
  }
}

let i = -1;
let k = 0;



function draft(distances, rows, columns) {
  i = i + 1;
  if (i === distances.length) {
    i = 0;
  }
  console.log(rows[i], columns[i], distances[k]);
  if (rows[i] + columns[i] === distances[k]) {
    k += 1;
    return '+'
  }

  return '*';
}
console.log(defusingMines(minefield));
