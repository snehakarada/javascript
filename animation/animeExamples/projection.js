function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }
  return screen;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function putString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function updateParticle(particle) {
  const position = particle[0];
  position[1] = position[1] + 1;
  particle[1] = particle[1] + 1;

  console.log(particle);
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function putParticle(screen, particle, symbol) {
  const angle = particle[1];
  const velocity = particle[2];
  const time = particle[3];

  const x = velocity * Math.cos(angle) * time;
  const y = velocity * Math.sin(angle) * time - (0.5 * 9.8 * time * time);

  console.log('X', x, 'Y', y, 'time', time);
  putString(screen, symbol, x, y);
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function animate(screen, particle, steps) {
  let frames = '';
  let time = particle[3];

  for (time; time < steps; time++) {
    // clearScreen(screen);
    putParticle(screen, particle, '*');
    updateParticle(particle);
    frames += screenToString(screen);
  }

  return frames;
}

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function displayScreen(screen) {
  for (const line of screen) {
    console.log(line.join(''));
  }
}

function main() {
  const WIDTH = 10;
  const HEIGHT = 5;
  const angle = degreesToRadians(30);
  let screen = createScreen(WIDTH, HEIGHT);
  const end = Math.ceil((2 * 20 * Math.sin((angle)) / 9.8));
  const velocity = 20;
  // console.log(end);

  for (let time = 0; time < end; time += 0.1) {
    const x = Math.floor(velocity * Math.cos(angle) * time);
    const y = Math.floor(velocity * Math.sin(angle) * time - (0.5 * 9.8 * time * time));
    console.log(x, y, time, end);
    // putPixel(screen, '*', x , y);
    displayScreen(screen)
  }


}



main();
