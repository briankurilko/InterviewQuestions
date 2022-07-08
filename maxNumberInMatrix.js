function findMaxInMatrix(matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0];
  }

  const work = [{ max: matrix[0][0], at: [0, 0] }];

  for (let i = 0; i < work.length; ++i) {
    let { at, route } = work[i];
    for (let i = at[0], j = at[1]; i < matrix.length; ++i) {
      if (
        spot === matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]
      ) {
        // do not add work, calculate max.
        work[i].max += spot;
      } else {
        work.push({ max: work[i].max + spot, at: [] });
      }
    }
  }
}

const testArray = [
  [9, 3, 4],
  [10, 4, 5],
  [5, 3, 2],
];

findMaxInMatrix(array, [0, 0]);
