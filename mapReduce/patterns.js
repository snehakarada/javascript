const STAR = '*';

function repeatChar(length, char) {
  return char.repeat(length);
}

function hollowLine(length) {
  if (length < 3) {
    return repeatChar(length, STAR);
  }

  return STAR + repeatChar(length - 2, ' ') + STAR;
}

function filledRectangle(column, rows) {
  const rectangle = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    rectangle.push(repeatChar(column, STAR));
  }

  return rectangle;
}

function hollowRectangle(column, rows) {
  const rectangle = [repeatChar(column, STAR)];

  for (let index = 1; index < rows - 1; index++) {
    rectangle.push(hollowLine(column));
  }

  rectangle.push(repeatChar(column, STAR));

  return rectangle;
}

function alternatingRows(column, rows, noOfChars) {
  const rectangle = [];
  const characters = [STAR, '-', ' '];

  for (let i = 0; i < rows; i++) {
    rectangle.push(repeatChar(column, characters[i % noOfChars]));
  }

  return rectangle;
}

function alternatingRectangle(column, rows) {
  return alternatingRows(column, rows, 2);
}

function spacedRectangle(column, rows) {
  return alternatingRows(column, rows, 3);
}

function getTriangle(size, length) {
  const array = [];

  for (let rowIndex = 1; rowIndex <= size; rowIndex++) {
    const stars = alignRight(repeatChar(rowIndex, STAR), length);
    array.push(stars);
  }

  return array;
}

function triangle(length) {
  return getTriangle(length, 0);
}

function rightAlignedTri(row) {
  return getTriangle(row, row);
}

function isEven(number) {
  return number % 2 === 0;
}

function convertNumToOdd(number) {
  return isEven(number) ? number - 1 : number;
}

function alignRight(string, size) {
  return string.padStart(size);
}

function getDiamond(size, funReference) {
  const length = convertNumToOdd(size);
  const array = [funReference(length, STAR)];
  let noOfSpaces = 1;

  for (let count = length - 2; count > 0; count -= 2) {
    const stars = funReference(count, STAR);
    const result = alignRight(stars, count + noOfSpaces);
    array.push(result);
    array.unshift(result);
    noOfSpaces += 1;
  }

  return array;
}

function diamond(size) {
  return getDiamond(size, repeatChar);
}

function hollowDiamond(size) {
  return getDiamond(size, hollowLine);
}



function getStylesAndRef() {
  const stylesAndFunctionRef = [
    ['filled-rectangle', filledRectangle],
    ['hollow-rectangle', hollowRectangle],
    ['alternating-rectangle', alternatingRectangle],
    ['triangle', triangle],
    ['right-aligned-triangle', rightAlignedTri],
    ['spaced-alternating-rectangle', spacedRectangle],
    ['diamond', diamond],
    ['hollow-diamond', hollowDiamond]
  ];

  return stylesAndFunctionRef;
}

function getPattern(givenStyle, dimensions, stylesAndFunctionRef) {
  for (const [styles, reference] of stylesAndFunctionRef) {
    if (styles === givenStyle) {
      return reference(dimensions[0], dimensions[1]);
    }
  }

  return '';
}

function combinedStyles(style1, style2) {
  const result = [];

  for (let index = 0; index < style1.length; index++) {
    const row = style1[index].padEnd(style1.length) + ' ' + style2[index];
    result.push(row);
  }

  return result.join('\n');
}

function generatePattern(style, dimensions, secondStyle) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return '';
  }

  const styleOne = getPattern(style, dimensions, getStylesAndRef());

  if (secondStyle === '' || secondStyle === undefined) {
    return styleOne.join('\n');
  }

  const styleTwo = getPattern(secondStyle, dimensions, getStylesAndRef());

  return combinedStyles(styleOne, styleTwo);
}

function testGeneratePattern(style, dimensions, secondStyle, expected, failed) {
  const actual = generatePattern(style, dimensions, secondStyle);
  if (actual !== expected) {
    return failed.push([style, dimensions, secondStyle, actual, expected]);
  }

}

function testCombinedStyles(failed) {
  testFilledRectangleAndOtherStyles(failed);
  testHollowRectangleAndOtherStyles(failed);
  testDiamondAndOtherStyles(failed);
  testGeneratePattern('spaced-alternating-rectangle', [4, 3],
    'filled-rectangle', '**** ****\n---- ****\n     ****', failed
  );
  testGeneratePattern('triangle', [3],
    'right-aligned-triangle', '*     *\n**   **\n*** ***', failed
  );
  testGeneratePattern('triangle', [3],
    'diamond', '*    *\n**  ***\n***  *', failed
  );
}

function testFilledRectangleAndOtherStyles(failed) {
  testGeneratePattern('filled-rectangle', [3, 2],
    'filled-rectangle', '*** ***\n*** ***', failed
  );
  testGeneratePattern('filled-rectangle', [2, 2],
    'alternating-rectangle', '** **\n** --', failed
  );
  testGeneratePattern('filled-rectangle', [4, 3],
    'hollow-rectangle', '**** ****\n**** *  *\n**** ****', failed
  );
  testGeneratePattern('filled-rectangle', [4, 3],
    'spaced-alternating-rectangle', '**** ****\n**** ----\n****     ', failed
  );
}

function testHollowRectangleAndOtherStyles(failed) {
  testGeneratePattern('hollow-rectangle', [4, 3],
    'hollow-rectangle', '**** ****\n*  * *  *\n**** ****', failed
  );
  testGeneratePattern('hollow-rectangle', [0, 3],
    'filled-rectangle', '', failed
  );
  testGeneratePattern('hollow-rectangle', [4, 3],
    'alternating-rectangle', '**** ****\n*  * ----\n**** ****', failed
  );
  testGeneratePattern('hollow-rectangle', [4, 3],
    'spaced-alternating-rectangle', '**** ****\n*  * ----\n****     ', failed
  );
}


function testDiamondAndOtherStyles(failed) {
  testGeneratePattern('diamond', [2],
    'diamond', '* *', failed
  );
  testGeneratePattern('diamond', [3],
    'diamond', ' *   *\n*** ***\n *   *', failed
  );
}
function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [5, 0], '', '', failed);
  testGeneratePattern('filled-rectangle', [0, 8], '', '', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '', '**\n**', failed);
  testGeneratePattern('filled-rectangle', [5, 3], '', '*****\n*****\n*****', failed);
  testGeneratePattern('filled-rectangle', [3, 5], '', '***\n***\n***\n***\n***', failed);
  testGeneratePattern('filled-rectangle', [4, 2], '', '****\n****', failed);
}

function testHollowTriangle(failed) {
  testGeneratePattern('hollow-rectangle', [6, 0], '', '', failed);
  testGeneratePattern('hollow-rectangle', [0, 4], '', '', failed);
  testGeneratePattern('hollow-rectangle', [5, 4], '', '*****\n*   *\n*   *\n*****', failed);
  testGeneratePattern('hollow-rectangle', [4, 3], '', '****\n*  *\n****', failed);
  testGeneratePattern('hollow-rectangle', [6, 2], '', '******\n******', failed);
  testGeneratePattern('hollow-rectangle', [2, 3], '', '**\n**\n**', failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern('alternating-rectangle', [0, 4], '', '', failed);
  testGeneratePattern('alternating-rectangle', [9, 0], '', '', failed);
  testGeneratePattern('alternating-rectangle', [4, 1], '', '****', failed);
  testGeneratePattern('alternating-rectangle', [3, 3], '', '***\n---\n***', failed);
  testGeneratePattern('alternating-rectangle', [5, 4], '', '*****\n-----\n*****\n-----', failed);
  testGeneratePattern('alternating-rectangle', [2, 3], '', '**\n--\n**', failed);
}

function testTriangle(failed) {
  testGeneratePattern("triangle", [3], '', '*\n**\n***', failed);
  testGeneratePattern("triangle", [5], '', '*\n**\n***\n****\n*****', failed);
  testGeneratePattern("triangle", [1], '', '*', failed);
  testGeneratePattern("triangle", [2], '', '*\n**', failed);
  testGeneratePattern("triangle", [0], '', '', failed);
}

function testRightAlignedTri(failed) {
  testGeneratePattern("right-aligned-triangle", [3], '', '  *\n **\n***', failed);
  testGeneratePattern("right-aligned-triangle", [0], '', '', failed);
  testGeneratePattern("right-aligned-triangle", [1], '', '*', failed);
}

function testSpacedRectangle(failed) {
  testGeneratePattern(
    'spaced-alternating-rectangle', [2, 3], '',
    '**\n--\n  ', failed
  );
  testGeneratePattern(
    'spaced-alternating-rectangle', [5, 6], '',
    '*****\n-----\n     \n*****\n-----\n     ', failed
  );
  testGeneratePattern(
    'spaced-alternating-rectangle', [4, 3], '',
    '****\n----\n    ', failed
  );
  testGeneratePattern(
    'spaced-alternating-rectangle', [4, 0], '',
    '', failed
  );
  testGeneratePattern(
    'spaced-alternating-rectangle', [0, 9], '',
    '', failed
  );
}

function testDiamond(failed) {
  testGeneratePattern("diamond", [3], '', ' *\n***\n *', failed);
  testGeneratePattern("diamond", [4], '', ' *\n***\n *', failed);
  testGeneratePattern("diamond", [1], '', '*', failed);
  testGeneratePattern("diamond", [5], '', '  *\n ***\n*****\n ***\n  *', failed);
  testGeneratePattern("diamond", [7], '',
    '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
  testGeneratePattern("diamond", [0], '', '', failed);
}

function testHollowDiamond(failed) {
  testGeneratePattern("hollow-diamond", [3], '', ' *\n* *\n *', failed);
  testGeneratePattern("hollow-diamond", [5], '', '  *\n * *\n*   *\n * *\n  *', failed);
  testGeneratePattern("hollow-diamond", [6], '', '  *\n * *\n*   *\n * *\n  *', failed);
  testGeneratePattern("hollow-diamond", [0], '', '', failed);
  testGeneratePattern("hollow-diamond", [1], '', '*', failed);
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowTriangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);
  testRightAlignedTri(failed);
  testSpacedRectangle(failed);
  testDiamond(failed);
  testHollowDiamond(failed);
  testCombinedStyles(failed);
  console.table(failed);
}

testAll();