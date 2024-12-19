function repeat(char, length) {
  let repeatedChar = '';
  for (let index = 0; index <= length; index++) {
    repeatedChar += char;
  }
  return repeatedChar;
}

function updateScreen(screen, i) {
  // let index = i;
  // return slice(screen, 0, index - 1) + string + slice(screen, index + 1, width * height);
  let a = '';
  for (let index = 0; index < screen.length; index++) {
    if (index === i) {
      a += string;
    }
    else {
      a += ' ';
    }
  }
  return a;
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

function wait() {
  for (let i = 0; i < 1000000000; i++) { }
}

let typeOfScreen = '';
const width = +prompt('enter width');
const height = +prompt('enter height');
const screen1 = +prompt('enter which screen you want\n 1.plain\n 2. broken-lines');
switch (screen1) {
  case 1:
    typeOfScreen = ' ';
    break;
  case 2:
    typeOfScreen = '-';
    break;
  default: 
    typeOfScreen = ' ';
}
const string = prompt('enter the string to move');


let screen = repeat(typeOfScreen, width * height);
for (let i = 0; i <= width * height; i++) {
  display(screen);
  wait();
  console.clear();
  screen = updateScreen(screen, i);
}