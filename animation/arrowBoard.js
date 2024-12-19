const width = 150;
const height = 150;
let h = 75;
let r = 74; // 11250

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

for (let x = 0; x < width; x += 2) {
  let c = repeat(' ', 20);
  for (let y = 0; y < height; y++) {
    const circle = ((x - h) ** 2) + ((y - h) ** 2);
    if (circle >= 10000 && circle < 11250) {
      c += '🍊';
      y++;
    }
    else if(circle >= 8000 && circle < 10000) {
      c += '🟡';
      y++;
    }
    else if(circle >= 6000 && circle < 8000) {
      c += '🔵';
      y++;
    }
    else if(circle >= 4000 && circle < 6000) {
      c += '✅';
      y++;
    }
    else if(circle >= 2000 && circle < 4000) {
      c += '🌺';
      y++;
    }
    else {
      c += '💜';
      y++;
    }
  }
  delay()
  console.log(c);
}