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
  return Math.max(...findMaxInMatrixBruteForceHelper(matrix));
}

// Alright, solved with memoizing! O(n) time and O(n) space, where n is the number of cells in the matrix.
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
  return Math.max(...result);
}

// I think 30 is the highest path here?
const testArray = [
  [9, 3, 4],
  [10, 4, 5],
  [5, 3, 2],
];

console.log(findMaxInMatrixBruteForce(testArray));
console.log(findMaxInMatrixMemoized(testArray));

// https://www.geeksforgeeks.org/maximum-sum-path-in-a-matrix-from-top-left-to-bottom-right/
// https://workat.tech/problem-solving/approach/mpsm/max-path-sum-matrix
// https://stackoverflow.com/questions/71759812/maximum-sum-path-from-top-left-to-bottom-right-in-a-grid-using-dynamic-programmi
