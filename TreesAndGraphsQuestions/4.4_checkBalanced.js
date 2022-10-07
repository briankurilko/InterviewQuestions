function getTreeDepth(node, depth = 1) {
  let leftDepth = null,
    rightDepth = null;
  if (node === null) {
    return depth - 1;
  }
  if (!node.left && !node.right) {
    return depth;
  }

  if (node.left) {
    leftDepth = getTreeDepth(node.left, depth + 1);
  }
  if (node.right) {
    rightDepth = getTreeDepth(node.right, depth + 1);
  }
  if (leftDepth > rightDepth) {
    return leftDepth;
  }
  return rightDepth;
}

// O(n log n) time, since it checks the top node, then checks all the nodes beneath it, then all the nodes beneath that one,
// over and over again. It'll traverse each node "log n" times, where n is the number of nodes. It's log n because each node is
// touched once per node above it.
function checkBalancedBruteForce(root) {
  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }
  const leftDepth = getTreeDepth(root.left);
  const rightDepth = getTreeDepth(root.right);

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }
  if (!checkBalancedBruteForce(root.left)) {
    return false;
  }
  if (!checkBalancedBruteForce(root.right)) {
    return false;
  }
  return true;
}

function checkHeight(treeNode, depth = 0) {
  if (!treeNode) {
    return depth;
  }
  const leftHeight = checkHeight(treeNode.left, depth + 1);
  if (leftHeight < 0) {
    return -1;
  }
  const rightHeight = checkHeight(treeNode.right, depth + 1);
  if (rightHeight < 0) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  const height = leftHeight > rightHeight ? leftHeight : rightHeight;
  return height;
}

// O(n) time, because we start with the bottom nodes. We only check each node once, and we pass the height that we calculated up
// to the node above us.
// Yours and the book's solution is slightly different - you calculate a node's height from the absolute depth of the node,
// while the book calculates the relative height of the node. Both seem to work but you had to do the null root check thing in the
// beginning.
function checkBalancedOptimized(root) {
  if (root === null) {
    return true;
  }
  const height = checkHeight(root);
  return height > 0;
}

class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(3);
const rightTwo = new TreeNode(4);
const rightThree = new TreeNode(5);
const leftTwo = new TreeNode(6);

root.left = left;
root.right = right;
right.right = rightTwo;
right.left = rightThree;
left.left = leftTwo;

console.log(checkBalancedBruteForce(root));
console.log(checkBalancedOptimized(root));
console.log(checkBalancedOptimized(new TreeNode(7)));
console.log(checkBalancedOptimized(null));
