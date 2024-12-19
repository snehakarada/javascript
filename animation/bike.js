// add slide

const width = 130;
const height = 130;

function repeat(char, length) {
  let repeatedChar = '';
  for (let i = 0; i <= length; i++) {
    repeatedChar += char;
  }
  return repeatedChar;
}

const b = repeat('-', 90);

function move(a, iterate, symbol) {
  for (let i = 0; i < width; i++) {
    if (i === iterate) {
      a = a + symbol;
    }
    if (i > 128) {
      a = a + '/';
    }
    a = a + '-';

  }

  return a;
}

function wait() {
  for (let i = 0; i < 200000000; i++) { }
}

const nature = '.-. _______|\n|=|/     /  |\n| |_____|_""_|\n|_|_[X]_|____|\n';
const car = 'ō͡≡o˞̶';
const slide = ' -\n/ |\n/ |\n';

let screen = repeat(' ', width * height);
for (let i = 0; i < width; i++) {
  console.clear();
  screen = nature + '\n' + move('', i, car);
  console.log(screen);
  wait();
}

