function makeScreen(char, width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(char);
    }
    screen.push(row);
  }

  return screen;
}

function putPixel(screen, char, x, y) {
  // console.log('char', char, x, y);
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    // console.log('i am in if');
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function drawHorizontalLine(screen, char, x1, x2, y) {
  for (let i = x1; i <= x2; i++) {
    putPixel(screen, char, i, y);
  }
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function putString(screen, str, x, y) {
  // console.log('PUTSTRING', str);
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join(' ');
  }

  return frame;
}

function moveRacer(racer) {
  // console.log('i enterd');
  // console.log('SF', racer)
  const position = racer[0];
  const speed = racer.at(-2);
  const acceleration = racer.at(-1);

  position[0] = position[0] + speed[0];
  position[1] = position[1] + speed[1];

  speed[0] = speed[0] + acceleration[0];
  speed[1] = speed[1] + acceleration[1];
  // console.log('EF', racer);
}

function putRacer(screen, walker) {
  // console.log('PUTRACER', walker);
  const position = walker[0];
  const name = walker[1];
  const x = position[0];
  const y = position[1];
  // console.log('puRacer2', walker);
  putString(screen, name, x + 1, y);
}

// const walker = [[0, 0], 'W', 5, [0.5, 0.5]];
// console.log(animate(screen, walker, 2));
let frames = '';


function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function main() {
  const width = 40;
  const height = 1;
  const walker = [[0, 0], 'A', [1, 0], [0.5, 0]];
  let screen = makeScreen(' ', width, height);
  for (let i = 0; i < 5; i++) {
    clearScreen(screen);
    drawHorizontalLine(screen, '-', 0, 20, 0);
    putRacer(screen, walker);
    moveRacer(walker);
    frames += screenToString(screen);
  }
  displayAnimFormat(width, height, frames);
}

main();
