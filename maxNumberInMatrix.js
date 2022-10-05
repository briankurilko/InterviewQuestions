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

// first convert matrix to tree I guess? Or adjacency list? How would you do that...
// 9: 3, 10.
// 3: 4, 4.
// 4: 5
// 10: 4, 5
// 4: 5, 3
// 5: 2
// 5: 3
// 3: 2
// 2: []
function convertToAdjacencyList(matrix) {
  const adjacencyList = [];
  // maybe loop through matrix backwards?
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[0].length - 1; j >= 0; ++j) {
      let newNode = { value: matrix[i][j], adjacent: [] };
      if (matrix[i][j + 1] !== undefined) {
        newNode.adjacent.push(new Node()); // idk man.
      }
      adjacencyList.unshift(newNode);
    }
  }
}
