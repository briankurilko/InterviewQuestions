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

const firstNode = bstRoot;
const secondNode = bstRoot.left;

// This is O(n) time, where n is the size of the tree. O(n) space due to the stack frames.
// We need to store the depth because it's also our "visited" bit. BUT, this solution isn't ideal.
// Because the space complexity is O(n)
function findFirstCommonAncestorUsingParentDFS(
  firstNode,
  secondNode,
  depth = 0
) {
  firstNode.depth = depth;
  if (firstNode === secondNode) {
    return firstNode;
  }
  if (firstNode === null) {
    return null;
  }

  if (firstNode.left?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParentDFS(
      firstNode.left,
      secondNode,
      depth + 1
    );
    if (highestNode) {
      return highestNode.depth < firstNode.depth ? highestNode : firstNode;
    }
  }
  if (firstNode.right?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParentDFS(
      firstNode.right,
      secondNode,
      depth + 1
    );
    if (highestNode) {
      return highestNode.depth < firstNode.depth ? highestNode : firstNode;
    }
  }
  if (firstNode.parent?.depth === null) {
    const highestNode = findFirstCommonAncestorUsingParentDFS(
      firstNode.parent,
      secondNode,
      depth - 1
    );
    if (highestNode) {
      return highestNode.depth < firstNode.depth ? highestNode : firstNode;
    }
  }
  return null;
}

function findNodeDepth(node) {
  let currentNode = node;
  let depth = 0;
  while (currentNode.parent != null) {
    depth++;
    currentNode = currentNode.parent;
  }
  return depth;
}

// This is O(n) time too, where n is the size of the tree. O(1) space. Better than your original solution.
function findFirstCommonAncestorWithParentOptimized(firstNode, secondNode) {
  const firstNodeDepth = findNodeDepth(firstNode);
  const secondNodeDepth = findNodeDepth(secondNode);
  let firstNodeRunner = firstNode;
  let secondNodeRunner = secondNode;
  if (firstNodeDepth > secondNodeDepth) {
    for (let i = 0; i < firstNodeDepth - secondNodeDepth; ++i) {
      firstNodeRunner = firstNodeRunner.parent;
    }
  } else if (firstNodeDepth < secondNodeDepth) {
    for (let i = 0; i < secondNodeDepth - firstNodeDepth; ++i) {
      secondNodeRunner = secondNodeRunner.parent;
    }
  }

  while (secondNodeRunner !== null && firstNodeRunner !== null) {
    if (firstNodeRunner === secondNodeRunner) {
      return firstNodeRunner;
    }
    firstNodeRunner = firstNodeRunner.parent;
    secondNodeRunner = secondNodeRunner.parent;
  }
  return null;
}

function findIfNodeDescendsFromParent(parent, node) {
  if (parent === null) {
    return false;
  }
  if (parent === node) {
    return true;
  }

  return (
    findIfNodeDescendsFromParent(parent.left, node) ||
    findIfNodeDescendsFromParent(parent.right, node)
  );
}

function findFirstCommonAncestorWithoutParent(root, firstNode, secondNode) {
  if (root === null) {
    return null;
  }
  const firstNodeDescendsFromParent = findIfNodeDescendsFromParent(
    root,
    firstNode
  );
  const secondNodeDescendsFromParent = findIfNodeDescendsFromParent(
    root,
    secondNode
  );
  if (firstNodeDescendsFromParent && secondNodeDescendsFromParent) {
    if (first)
  }
}

console.log(findFirstCommonAncestorUsingParentDFS(firstNode, secondNode).data);
console.log(
  findFirstCommonAncestorWithParentOptimized(firstNode, secondNode).data
);
