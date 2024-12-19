function convertScreenToString(screen) {
  return screen.join('');
}

function makeScreen(char, length) {
  return char.repeat(length).split('');
}

function clearScreen(screen) {
  for (const index in screen) {
    screen[index] = '-';
  }
}

function wait() {
  for (let index = 0; index < 100000000; index++) {}
}

let screen = makeScreen('-', 100);
let index = 0;

while (index < screen.length) {
  let car2Index = screen.length - 1 - index;
  if (car2Index < index){
    screen[index] = '💥';
    screen[index - 1] = 'ō͡≡o˞̶';
    screen[index + 1] = '🚗';
    console.clear();
    console.log(convertScreenToString(screen));
    break;
  }
  console.clear();
  screen[index] = 'ō͡≡o˞̶';
  index = index + 1;
  screen[car2Index] = '🚗';
  index = index + 1;
  console.log(convertScreenToString(screen));
  clearScreen(screen);
  wait();
  index++
}

// console.log(10, 1);
// console.log(frame);
