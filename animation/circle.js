const width = 30;
const height = 30;
let h = 15;
let r = 14; // 196

function delay() {
  for (let i = 0; i < 200000000; i++) {}
}

function repeat(char, length) {
  let repeatedChar = '';
  for (let index = 0; index <= length; index++) {
    repeatedChar += char;
  }

  return repeatedChar;
}

console.log(width, height);

for (let x = 0; x < width; x += 2) {
  let c = repeat(' ', 20);
  for (let y = 0; y < height; y++) {
    const circle = ((x - h) ** 2) + ((y - h) ** 2);
    // if (circle >= 150 && circle < 196) {
    //   c += '*';
    // }
    if(circle >= 100 && circle < 149) {
      c += '@';
    }
    // else if(circle >= 50 && circle < 99) {
    //   c += '-'
    // }
    // else if(circle >= 0 && circle < 49) {
    //   c += '$'
    // }
    // else {
    //   c += ' ';
    // }
  }
  delay()
  console.log(c);
}