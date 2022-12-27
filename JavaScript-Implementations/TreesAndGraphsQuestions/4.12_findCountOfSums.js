function createBinarySearchTreeFromSortedArray(
  array,
  start = 0,
  end = array.length - 1
) {
  if (end < start) {
    return null;
  }
  const middle = Math.floor((end + start) / 2);
  return {
    data: array[middle],
    right: createBinarySearchTreeFromSortedArray(array, middle + 1, end),
    left: createBinarySearchTreeFromSortedArray(array, start, middle - 1),
  };
}

const bstRoot = createBinarySearchTreeFromSortedArray([
  -2, -1, 1, 2, 3, 4, 10, 11, 12, 15,
]);

function findCountOfSumsBruteForce(root, sum) {
  if (root === null) {
    return 0;
  }

  const pathsFromRoot = findCountOfSumsFromNode(root, sum, 0);

  const pathsFromLeftNode = findCountOfSumsBruteForce(root.left, sum);
  const pathsFromRightNode = findCountOfSumsBruteForce(root.right, sum);
  return pathsFromRoot + pathsFromLeftNode + pathsFromRightNode;
}

function findCountOfSumsFromNode(node, sum, runningSum) {
  if (node === null) {
    return 0;
  }
  let totalPaths = 0;
  const newRunningSum = node.data + runningSum;
  if (newRunningSum === sum) {
    totalPaths++;
  }
  totalPaths += findCountOfSumsFromNode(node.left, sum, newRunningSum);
  totalPaths += findCountOfSumsFromNode(node.right, sum, newRunningSum);
  return totalPaths;
}

console.log(JSON.stringify(bstRoot));
console.log(findCountOfSumsBruteForce(bstRoot, 3));
