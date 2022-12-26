function findMaxInMatrixBruteForceHelper(
  matrix,
  coordinate = [0, 0],
  runningSum = 0
) {
  const rightwardCoord = [coordinate[0], coordinate[1] + 1];
  const canMoveRight = rightwardCoord[1] < matrix[0].length;

  const downwardCoord = [coordinate[0] + 1, coordinate[1]];
  const canMoveDown = downwardCoord[0] < matrix.length;

  const currentValue = matrix[coordinate[0]][coordinate[1]];
  runningSum += currentValue;

  if (!canMoveDown && !canMoveRight) {
    return [runningSum];
  }

  let listOfPathSums = [];
  if (canMoveRight) {
    listOfPathSums = listOfPathSums.concat(
      findMaxInMatrixBruteForceHelper(matrix, rightwardCoord, runningSum)
    );
  }
  if (canMoveDown) {
    listOfPathSums = listOfPathSums.concat(
      findMaxInMatrixBruteForceHelper(matrix, downwardCoord, runningSum)
    );
  }
  return listOfPathSums;
}

// This is probably around O(2^(number of paths)) time complexity, and O(number of paths) space complexity. Idk how to find the number of paths.
function findMaxInMatrixBruteForce(matrix) {
  return getMax(findMaxInMatrixBruteForceHelper(matrix));
}

// Alright, solved with memoizing! O(number of paths) time complexity/space complexity. Could probably save memory still...
function findMaxInMatrixMemoizedHelper(
  matrix,
  coordinate = [0, 0],
  memo = new Map()
) {
  const rightwardCoord = [coordinate[0], coordinate[1] + 1];
  const canMoveRight = rightwardCoord[1] < matrix[0].length;

  const downwardCoord = [coordinate[0] + 1, coordinate[1]];
  const canMoveDown = downwardCoord[0] < matrix.length;

  const currentValue = matrix[coordinate[0]][coordinate[1]];

  if (!canMoveDown && !canMoveRight) {
    memo.set(coordinate.toString(), currentValue);
    return [currentValue];
  }

  let listOfPathSums = [];
  if (canMoveRight) {
    if (memo.has(rightwardCoord.toString())) {
      const results = memo.get(rightwardCoord.toString());
      results.forEach((result) => listOfPathSums.push(currentValue + result));
    } else {
      const results = findMaxInMatrixMemoizedHelper(
        matrix,
        rightwardCoord,
        memo
      );
      memo.set(rightwardCoord.toString(), results);
      results.forEach((result) => listOfPathSums.push(result + currentValue));
    }
  }

  if (canMoveDown) {
    if (memo.has(downwardCoord.toString())) {
      const results = memo.get(downwardCoord.toString());
      results.forEach((result) => listOfPathSums.push(currentValue + result));
    } else {
      const results = findMaxInMatrixMemoizedHelper(
        matrix,
        downwardCoord,
        memo
      );
      memo.set(downwardCoord.toString(), results);
      results.forEach((result) => listOfPathSums.push(result + currentValue));
    }
  }
  return listOfPathSums;
}

function findMaxInMatrixMemoized(matrix) {
  const result = findMaxInMatrixMemoizedHelper(matrix);
  return getMax(result);
}

function getMax(arr) {
  let len = arr.length;
  let max = -Infinity;

  while (len--) {
    max = arr[len] > max ? arr[len] : max;
  }
  return max;
}

function findMaxInMatrixOptimizedMemoized(
  matrix,
  rowIndex = matrix.length - 1,
  colIndex = matrix[0].length - 1,
  memo = []
) {
  if (rowIndex < 0 || colIndex < 0) {
    return 0;
  }

  if (memo[rowIndex][colIndex] !== undefined) {
    return memo[rowIndex][colIndex];
  }

  memo[rowIndex][colIndex] =
    Math.max(
      findMaxInMatrixOptimizedMemoized(matrix, rowIndex - 1, colIndex, memo),
      findMaxInMatrixOptimizedMemoized(matrix, rowIndex, colIndex - 1, memo)
    ) + matrix[rowIndex][colIndex];
  return memo[rowIndex][colIndex];
}

// O(n * m) time, O(n * m) space. n is length, m is width of matrix.
function findMaxInMatrix(matrix) {
  const memo = new Array(matrix.length);
  for (let i = 0; i < memo.length; ++i) {
    memo[i] = new Array(matrix[0].length);
  }

  return findMaxInMatrixOptimizedMemoized(
    matrix,
    matrix.length - 1,
    matrix[0].length - 1,
    memo
  );
}

function findGreatestValue(rightValue, downValue) {
  let greatestValue = 0;
  if (downValue !== undefined && rightValue !== undefined) {
    greatestValue = downValue > rightValue ? downValue : rightValue;
  } else if (downValue !== undefined) {
    greatestValue = downValue;
  } else if (rightValue !== undefined) {
    greatestValue = rightValue;
  }
  return greatestValue;
}

// I think the best way to do this is to go through the array and go backwards, and only memoize the max length path, maybe? Idk.

// I think 30 is the highest path here?
const testArray = [
  [
    0, 1, 2, 3, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
  ],
  [
    5, 6, 7, 8, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
  ],
  [
    10, 11, 12, 13, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14,
  ],
  [
    15, 16, 17, 18, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 19,
  ],
  [
    20, 21, 22, 23, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24,
  ],
  [
    25, 26, 27, 28, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 29,
  ],
  [
    30, 31, 32, 33, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34,
  ],
  [
    35, 36, 37, 38, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 39,
  ],
  [
    40, 41, 42, 43, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 44,
  ],
  [
    45, 46, 47, 48, 13, 43, 53, 123, 34243, 5432, 43221, 231541324543, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 49,
  ],
];

const testArray2 = [
  [9, 3, 4],
  [10, 4, 5],
  [5, 3, 2],
];

const testArray3 = [
  [9, 323, 4, 1234],
  [121340, 432, 52, 5432],
  [5, 3, 234, 12354],
];

// console.log(findMaxInMatrixMemoized(testArray));
console.log(findMaxInMatrix(testArray2));
console.log(findMaxInMatrixBruteForce(testArray2));

// https://www.geeksforgeeks.org/maximum-sum-path-in-a-matrix-from-top-left-to-bottom-right/
// https://workat.tech/problem-solving/approach/mpsm/max-path-sum-matrix
// https://stackoverflow.com/questions/71759812/maximum-sum-path-from-top-left-to-bottom-right-in-a-grid-using-dynamic-programmi
