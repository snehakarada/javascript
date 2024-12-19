const width = 10;
const height = 10;

function makeScreen(char) {
  let screen = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row[j] = char;
    }
    screen.push(row);
  }
  return screen;
}

function convertScreenToString(screen) {
  let str = '';
  for (let i = 0; i < height; i++) {
    str += screen[i].join("");
  }
  return str;
}

const chars = ['@', '#'];
let frame = '';

for (let i = 0; i < chars.length; i++) {
  let screen = makeScreen(chars[i]);
  frame += convertScreenToString(screen);
}

console.log(width, height);
console.log(frame);

