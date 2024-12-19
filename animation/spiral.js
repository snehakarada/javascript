const width = 6;
const height = 6;

function repeat(char, length) {
  let repeatedChar = '';
  for (let index = 0; index <= length; index++) {
    repeatedChar += char;
  }
  return repeatedChar;
}

function slice(screen, startIndex, endIndex) {
  let sliceOfString = '';
  for (let index = startIndex; index <= endIndex; index++) {
    sliceOfString += screen[index];
  }
  return sliceOfString;
}

function display(screen) {
  for (let index = 0; index < width * height; index += width) {
    console.log(slice(screen, index, index + width))
  }
}

function putScreen(screen, X, Y) {
  let index = 21
  
  return slice(screen, 0, index - 1) + 'A' + slice(screen, index + 1, width * height);
}

function updateScreen(screen) {
  const X = width / 2;
  const Y = height / 2;
  return putScreen(screen, X, Y)
}

//const A = height / 2;
let screen = repeat('-', width * height);
for (let i = 0; i <= 0; i += 0.25) {
  display(screen);
  screen = updateScreen(screen);
  //display(screen);
}
