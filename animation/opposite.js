
const width = 4;
const height = 4;

function repeat(char, length) {
  let repeatedChar = '';
  for (let i = 0; i <= length; i++) {
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
    console.log(slice(screen, index, index + width));
  }
}

function move(iterate, j, screen) {
  // let index = iterate;
  // return slice(screen, 0, index - 1) + '@' + slice(screen, index + 1, height * width);
  let a = '';
  for (let i = 0; i < width * height; i++) {
    a += i === iterate ? '@' : screen[i];
    a += i === j ? '#' : screen[i];

  }
  return a;
}

function wait() {
  for (let i = 0; i < 100000000; i++) { }
}

const car = 'ō͡≡o˞̶';

