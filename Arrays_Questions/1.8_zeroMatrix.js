function zeroMatrixNaive(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  const coordsList = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === 0) {
        coordsList.push([i, j]);
      }
    }
  }
  for (let [xCoord, yCoord] of coordsList) {
    for (let y = 0; y < m; ++y) {
      matrix[xCoord][y] = 0;
    }
    for (let x = 0; x < n; ++x) {
      matrix[x][yCoord] = 0;
    }
  }
  return matrix;
}

function zeroMatrixWithSet(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const xCoordsToZero = new Set();
  const yCoordsToZero = new Set();

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === 0) {
        xCoordsToZero.add(i);
        yCoordsToZero.add(j);
      }
    }
  }

  [...xCoordsToZero].forEach((xCoord) => {
    for (let y = 0; y < m; ++y) {
      matrix[xCoord][y] = 0;
    }
  });
  [...yCoordsToZero].forEach((yCoord) => {
    for (let x = 0; x < n; ++x) {
      matrix[x][yCoord] = 0;
    }
  });
  return matrix;
}

function zeroMatrixNoStorage(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = null;
        matrix[0][j] = null;
      }
    }
  }

  for (let x = 0; x < n; ++x) {
    if (matrix[x][0] === null) {
      for (let y = 0; y < m; ++y) {
        if (matrix[x][y] !== null) {
          matrix[x][y] = 0;
        }
      }
      matrix[x][0] = 0;
    }
  }
  for (let y = 0; y < m; ++y) {
    if (matrix[0][y] === null) {
      for (let x = 0; x < n; ++x) {
        matrix[x][y] = 0;
      }
    }
  }
  return matrix;
}

// console.log(
//   zeroMatrixNoStorage([
//     [5, 1, 2, 3, 4, 5],
//     [8, 9, 10, 4, 1, 2],
//     [5, 6, 7, 8, 9, 10],
//     [2, 3, 4, 5, 6, 7],
//     [10, 0, 1, 2, 3, 4],
//     [7, 8, 9, 10, 0, 1],
//     [4, 5, 6, 7, 8, 9],
//   ])
// );

// console.log(
//   zeroMatrixWithSet([
//     [5, 1, 2, 3, 4, 5],
//     [8, 9, 10, 4, 1, 2],
//     [5, 6, 7, 8, 9, 10],
//     [2, 3, 4, 5, 6, 7],
//     [10, 0, 1, 2, 3, 4],
//     [7, 8, 9, 10, 0, 1],
//     [4, 5, 6, 7, 8, 9],
//   ])
// );

console.log(
  JSON.stringify(
    zeroMatrixNaive([
      [5, 1, 2, 3, 4, 5],
      [8, 9, 10, 4, 1, 2],
      [5, 6, 7, 8, 9, 10],
      [2, 3, 4, 5, 6, 7],
      [10, 0, 1, 2, 3, 4],
      [7, 8, 9, 10, 0, 1],
      [4, 5, 6, 7, 8, 9],
    ])
  ) ===
    JSON.stringify(
      zeroMatrixWithSet([
        [5, 1, 2, 3, 4, 5],
        [8, 9, 10, 4, 1, 2],
        [5, 6, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7],
        [10, 0, 1, 2, 3, 4],
        [7, 8, 9, 10, 0, 1],
        [4, 5, 6, 7, 8, 9],
      ])
    )
);


console.log(
    JSON.stringify(
      zeroMatrixNaive([
        [5, 1, 2, 3, 4, 5],
        [8, 9, 10, 4, 1, 2],
        [5, 6, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7],
        [10, 0, 1, 2, 3, 4],
        [7, 8, 9, 10, 0, 1],
        [4, 5, 6, 7, 8, 9],
      ])
    ) ===
      JSON.stringify(
        zeroMatrixNoStorage([
          [5, 1, 2, 3, 4, 5],
          [8, 9, 10, 4, 1, 2],
          [5, 6, 7, 8, 9, 10],
          [2, 3, 4, 5, 6, 7],
          [10, 0, 1, 2, 3, 4],
          [7, 8, 9, 10, 0, 1],
          [4, 5, 6, 7, 8, 9],
        ])
      )
  );