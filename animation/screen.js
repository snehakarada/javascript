const WIDTH = 110;
const HEIGHT = 30;

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

function put(x, screen) {
  return slice(screen, 0, x - 1) + '🚀' + '\n' + slice(screen, x + 2, WIDTH * HEIGHT);
}

function updateScreen(screen) {
  let x = HEIGHT * WIDTH + WIDTH;
  return put(x, screen)
}

function display(screen) {
  for (let index = 0; index < WIDTH * HEIGHT; index += WIDTH) {
    console.log(slice(screen, index, index + WIDTH));
  }
}

function move(a, iterate) {
  for (let i = 0; i < screen.length; i++) {
    if (i === iterate) {
      a = a + '🚀';
    }
    a = a + screen[i];
  }
  return a;
}

function wait() {
  for (let i = 0; i <= 10000000000; i++) { }
}

let screen = repeat('-', WIDTH * HEIGHT);
display(screen);
const value = (WIDTH * HEIGHT) - WIDTH;

for (let i = value; i === 3190; i += 5) {
  console.log(move('', i));
}
//screen = updateScreen(screen);