/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
  } else if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x + queen.y === king.x + king.y ||
    queen.x - queen.y === king.x - king.y
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  switch (num) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    case 10:
      return 'X';
    case 11:
      return 'XI';
    case 12:
      return 'XII';
    case 13:
      return 'XIII';
    case 14:
      return 'XIV';
    case 15:
      return 'XV';
    case 16:
      return 'XVI';
    case 17:
      return 'XVII';
    case 18:
      return 'XVIII';
    case 19:
      return 'XIX';
    case 20:
      return 'XX';
    case 21:
      return 'XXI';
    case 22:
      return 'XXII';
    case 23:
      return 'XXIII';
    case 24:
      return 'XXIV';
    case 25:
      return 'XXV';
    case 26:
      return 'XXVI';
    case 27:
      return 'XXVII';
    case 28:
      return 'XXVIII';
    case 29:
      return 'XXIX';
    case 30:
      return 'XXX';
    case 31:
      return 'XXXI';
    case 32:
      return 'XXXII';
    case 33:
      return 'XXXIII';
    case 34:
      return 'XXXIV';
    case 35:
      return 'XXXV';
    case 36:
      return 'XXXVI';
    case 37:
      return 'XXXVII';
    case 38:
      return 'XXXVIII';
    case 39:
      return 'XXXIX';
    default:
      return NaN;
  }
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function map(char) {
    switch (char) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '-':
        return 'minus';
      case '.':
        return 'point';
      case ',':
        return 'point';
      default:
        return null;
    }
  }
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i === numberStr.length - 1) {
      result += `${map(numberStr[i])}`;
    } else {
      result += `${map(numberStr[i])} `;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 1; i < Math.ceil(str.length / 2); i += 1) {
    if (str[i - 1] !== str[str.length - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (num === 0) {
    return false;
  }
  if (num % 10 === digit) {
    return true;
  }
  return isContainNumber(Math.trunc(num / 10), digit);
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let sumRight = 0;
    let sumLeft = 0;
    for (let j = 0; j < i; j += 1) {
      sumLeft += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      sumRight += arr[k];
    }
    if (sumRight === sumLeft) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let num = 1;
  const arr = [];
  while (arr.length < size) {
    arr[arr.length] = [];
  }

  let x = 0;
  let y = size - 1;

  while (num <= size ** 2) {
    for (let i = x; i <= y; i += 1) {
      arr[x][i] = num;
      num += 1;
    }
    for (let i = x + 1; i <= y; i += 1) {
      arr[i][y] = num;
      num += 1;
    }
    for (let i = y - 1; i >= x; i -= 1) {
      arr[y][i] = num;
      num += 1;
    }
    for (let i = y - 1; i > x; i -= 1) {
      arr[i][x] = num;
      num += 1;
    }
    x += 1;
    y -= 1;
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    for (let j = 0; j < rotatedMatrix[i].length; j += 1) {
      rotatedMatrix[i][j] = matrix[matrix.length - 1 - j][i];
    }
  }

  const result = matrix;
  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result[i].length; j += 1) {
      result[i][j] = rotatedMatrix[i][j];
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
  // const quicksort = (original) => {
  //   if (original.length <= 1) {
  //     return original;
  //   }
  //   const middle = original[0];
  //   const leftArr = [];
  //   const rightArr = [];
  //   for (let i = 1; i < original.length; i += 1) {
  //     if (original[i] < middle) {
  //       leftArr[leftArr.length] = original[i];
  //     } else {
  //       rightArr[rightArr.length] = original[i];
  //     }
  //   }
  //   return [...quicksort(leftArr), middle, ...quicksort(rightArr)];
  // };
  // const sorted = quicksort(arr);
  // const result = arr;
  // for (let i = 0; i < result.length; i += 1) {
  //   result[i] = sorted[i];
  // }
  // return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const getNewIndex = (index, length) => {
    if (index % 2 === 0) {
      return index / 2;
    }
    return Math.floor(length / 2 + index / 2);
  };
  const result = [...str];
  let intermediateResult = [...str];
  for (let i = 0; i < iterations; i += 1) {
    for (let j = 0; j < intermediateResult.length; j += 1) {
      result[getNewIndex(j, str.length)] = intermediateResult[j];
    }
    intermediateResult = [...result];
  }
  let resultStr = '';
  for (let i = 0; i < result.length; i += 1) {
    resultStr += result[i];
  }
  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 *
 * 321321   => 322113
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function findIndex(arr, x) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === x) return i;
    }
    return -1;
  }

  let copy = number;
  let nextDigit = 0;

  const divide = 10;
  let previousDigit = copy % divide;
  const store = [previousDigit];
  while (copy / divide > 1) {
    copy = Math.trunc(copy / divide);
    nextDigit = copy % divide;
    if (previousDigit > nextDigit) {
      copy = Math.trunc(copy / divide);

      store.push(nextDigit);
      let multiple = 10 ** store.length;

      store.sort((a, b) => a - b);
      let index = findIndex(store, nextDigit);
      let biggerDigit = 0;
      while (nextDigit >= biggerDigit) {
        biggerDigit = store[index + 1];
        index += 1;
      }
      store.splice(findIndex(store, biggerDigit), 1);

      copy *= multiple;
      multiple /= 10;
      copy += biggerDigit * multiple;
      multiple /= 10;
      let i = 0;
      while (multiple > 1) {
        copy += store[i] * multiple;
        multiple /= 10;
        i += 1;
      }
      return copy + store[i];
    }
    store.push(nextDigit);
    previousDigit = nextDigit;
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
