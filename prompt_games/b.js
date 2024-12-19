const width = 40;
const height = 5;

function repeat(char, length) {
  let repeatedChar = '';

  for (let iterate = 0; iterate <= length; iterate++) {
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

function updateScreen(screen, position) {
  let index = position;
  return slice(screen, 0, index - 1) + 'a' + slice(screen, index + 1, width * height);
}

let position = 49;
let screen1 = repeat('-', width * height);
screen1 = updateScreen(screen1, position);
display(screen1);

for (let i = 0; i < 3; i++) {
  let screen = repeat('-', width * height);
  console.log('select the direction to move the snake\n1. left\n2. right\n3. up\n4. down\n');
  const direction = +prompt('enter your choice');
  switch (direction) {
    case 1:
      position -= 1;
      break;
    case 2:
      position += 1;
      break;
    case 3:
      position -= width;
      break;
    case 4:
      position += width;
      break;
  }
  screen = updateScreen(screen, position);
  display(screen);
}