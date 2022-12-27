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
bstRoot.right.right.data = 13;
bstRoot.right.right.left = {
  data: 12,
  left: null,
  right: null,
};
assignTreeNodesParents(bstRoot);

// O(n) time worst case I think? Also O(n) space worst case, because of the visited set.
// n being the number of nodes in the tree.
function findSuccessorSetSolution(
  treeNode,
  data = treeNode.data,
  visited = new Set()
) {
  if (treeNode === null) {
    return null;
  }
  visited.add(treeNode);
  if (treeNode.data > data) {
    // we've potentially found our successor, but does it have a left node? If so, check the left node.
    if (treeNode.left && !visited.has(treeNode.left)) {
      const leftNode = findSuccessorSetSolution(treeNode.left, data, visited);
      if (leftNode.data < treeNode.data) {
        return leftNode;
      }
    }
    return treeNode;
  }
  // made it to root node and we still haven't found anything.
  if (treeNode.parent === null) {
    return null;
  }

  let childSuccessor = null;
  if (treeNode.right && !visited.has(treeNode.right)) {
    childSuccessor = findSuccessorSetSolution(treeNode.right, data, visited);
  }
  let parentSuccessor = null;
  if (!visited.has(treeNode.parent) && !childSuccessor) {
    parentSuccessor = findSuccessorSetSolution(treeNode.parent, data, visited);
  }
  if (parentSuccessor) {
    return parentSuccessor;
  }
  return childSuccessor;
}

// O(n) time, O(1) space. This takes advantage of the left->current->right "in-order traversal" that must happen for
// binary search trees. left <= current < right. If we have a right node, then the leftmost node of the right node
// must be our successor. So, we're at left -> (we are here) -> right subtree. Once we find the deepest left node of the right
// subtree, then we know that's our successor.

// If we don't have a right node, then for our current subtree, we're at left <= parent < (where we're at now).
// In that case, we should check our parent again. If we're at left <= newParent < (the last subtree we checked), then we check our next
// parent. If we're at (the last subtree we checked) <= newParent < right, then newParent is our successor, since left <= current < right.

// This is hard to come up with on your own. To remember this, just remember that left <= current < right thing for binary trees.

// Also remember that you don't actually have to compare any data here. If it really is a binary search tree, then left -> current -> right
// should cover it - just always assume that your right subtree contains nodes that are greater than your current node.
function findSuccessorOptimal(treeNode) {
  if (treeNode) {
    if (treeNode.right) {
      return getLeftMostNodeRecursive(treeNode.right);
    } else {
      let current = treeNode;
      let parent = current.parent;
      while (parent !== null && parent.right === current) {
        current = current.parent;
        parent = parent.parent;
      }
      return parent;
    }
  }
  return null;
}

// Just loop through the nodes, like you would in a linked list. No need for recursion (although I think you could make this tail recursive).
function getLeftMostNode(root) {
  if (root === null) {
    return null;
  }
  let node = root;
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

// This is a fine way to do the above code as well, since its tail recursive, I guess.
function getLeftMostNodeRecursive(root) {
  if (root === null) {
    return null;
  }
  if (root.left === null) {
    return root;
  }
  return getLeftMostNodeRecursive(root.left);
}

console.log("Non-optimal:");
console.log(findSuccessorSetSolution(bstRoot.right.left.right).data); // 11
console.log(findSuccessorSetSolution(bstRoot.right).data); // 12
console.log(findSuccessorSetSolution(bstRoot.right.right.right)); // null
console.log(findSuccessorSetSolution(bstRoot.left.right.right).data); // 3
console.log(findSuccessorSetSolution(bstRoot.left.right).data); // 2
console.log(findSuccessorSetSolution(bstRoot.left.left).data); // -1
console.log(findSuccessorSetSolution(bstRoot.left).data); // 1

console.log("\nOptimal:");
console.log(findSuccessorOptimal(bstRoot.right.left.right).data); // 11
console.log(findSuccessorOptimal(bstRoot.right).data); // 12
console.log(findSuccessorOptimal(bstRoot.right.right.right)); // null
console.log(findSuccessorOptimal(bstRoot.left.right.right).data); // 3
console.log(findSuccessorOptimal(bstRoot.left.right).data); // 2
console.log(findSuccessorOptimal(bstRoot.left.left).data); // -1
console.log(findSuccessorOptimal(bstRoot.left).data); // 1
