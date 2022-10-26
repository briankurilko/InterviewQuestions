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
    depth: null,
  };
}

function assignTreeNodesParents(treeNode, parent = null) {
  if (!treeNode) {
    return;
  }
  treeNode.parent = parent;
  assignTreeNodesParents(treeNode.left, treeNode);
  assignTreeNodesParents(treeNode.right, treeNode);
  return;
}

const bstRoot = createBinarySearchTreeFromSortedArray([
  -2, -1, 1, 2, 3, 4, 10, 11, 12, 15,
]);
console.log(JSON.stringify(bstRoot));
assignTreeNodesParents(bstRoot);

const firstNode = bstRoot.right.right.right;
const secondNode = bstRoot.right.right;

// This is O(n) time, where n is the size of the tree. O(1) space (I guess? we record the depth in the node...)
function findFirstCommonAncestorUsingParent(startNode, endNode, depth = 0) {
  startNode.depth = depth;
  if (startNode === endNode) {
    return startNode;
  }
  if (startNode === null) {
    return null;
  }

  if (startNode.left?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParent(
      startNode.left,
      endNode,
      depth + 1
    );
    if (highestNode) {
      return highestNode.depth < startNode.depth ? highestNode : startNode;
    }
  }
  if (startNode.right?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParent(
      startNode.right,
      endNode,
      depth + 1
    );
    if (highestNode) {
      return highestNode.depth < startNode.depth ? highestNode : startNode;
    }
  }
  if (startNode.parent?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParent(
      startNode.parent,
      endNode,
      depth - 1
    );
    if (highestNode) {
      return highestNode.depth < startNode.depth ? highestNode : startNode;
    }
  }
  return null;
}

console.log(findFirstCommonAncestorUsingParent(firstNode, secondNode));
