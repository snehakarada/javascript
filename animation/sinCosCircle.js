// pending

const width = 20;
const height = 20;
const radius = 8;

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
    console.log(slice(screen, index, index + width));
  }
}

function putScreen(screen, X, Y) {
  console.log('x:', X, 'Y', Y);
  const index = Y * width + X;
  //console.log(index);
  return slice(screen, 0, index - 1) + '*' + slice(screen, index + 1, width * height);
}
// function putScreen1(screen, X, Y) {
//   for (let x = 0; x < width; x++) {
//     for (let y = 0;)
//   }
// }
function update() {
  let screen = repeat('-', width * height);
  // let side1 = 0;
  // let side2 = 0;
  display(screen);

  for (let angle = 0; angle < 10; angle += .1) {
    const side1 = width / 2 - radius * Math.floor(Math.sin(angle));
    const side2 = height / 2 + radius * Math.floor(Math.cos(angle));

    // let Y = a - side1;
    // const X = b + side2;
    screen = putScreen(screen, side1, side2);
    console.log();
    display(screen);
  }
  // return screen1;
}

update();

// const a = width / 2;
// const b = height / 2;


// for (let i = 0; i < 5; i++) {
//   console.log();
//   display(screen);
// }
