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

const bstRoot = createBinarySearchTreeFromSortedArray([-3, -2, -1, 1, 2, 3, 4]);

function preOrderTraverseToCreateStringRepresentation(node, stringBuilder) {
  if (node === null) {
    stringBuilder.push("X");
  } else {
    stringBuilder.push(node.data);
    preOrderTraverseToCreateStringRepresentation(node.left, stringBuilder);
    preOrderTraverseToCreateStringRepresentation(node.right, stringBuilder);
  }
}

// This thing's time complexity is O(n + m) where n is the size of tree1 and m is the size of tree2.
// Its space complexity is also O(n + m), because the strings built here will be the size of each tree.
function checkSubtree(tree1, tree2) {
  const tree1String = [];
  const tree2String = [];

  preOrderTraverseToCreateStringRepresentation(tree1, tree1String);
  preOrderTraverseToCreateStringRepresentation(tree2, tree2String);

  return tree1String.toString().includes(tree2String.toString());
}

function matchTree(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }
  if (tree1 === null || tree2 === null) {
    return false;
  }
  if (tree1.data === tree2.data) {
    return (
      matchTree(tree1.left, tree2.left) && matchTree(tree1.right, tree2.right)
    );
  }
  return false;
}

// This is more intuitive to you, but maybe less elegant than the last solution?
// This thing's time complexity is O(n + km), where n is the size of tree1, m is the size of tree2, and k is the number
// of occurrences of tree2's root in tree1. The best case scenario here is better than the last solution, though.
// Also, this thing's space complexity is O(log(n) + log(m))?? I guess? I guess that makes sense IF the tree is balanced.
function checkSubtreeAlternate(tree1, tree2) {
  if (tree2 === null) {
    return true;
  }
  if (tree1 === null) {
    return false;
  }
  if (tree1.data === tree2.data) {
    if (matchTree(tree1, tree2)) {
      return true;
    }
  }
  return (
    checkSubtreeAlternate(tree1.left, tree2) ||
    checkSubtreeAlternate(tree1.right, tree2)
  );
}

console.log("String comparison approach");
console.log(checkSubtree(bstRoot, bstRoot.right)); // true
const differentTree = createBinarySearchTreeFromSortedArray([-1, 1, 2, 3, 4]);
console.log(checkSubtree(bstRoot, differentTree)); // false, because the tree structures are different.
const subtree = {
  data: 3,
  right: { data: 4, left: null, right: null },
  left: { data: 2, left: null, right: null },
};
console.log(checkSubtree(bstRoot, subtree)); // true
const completelyDifferentTree = {
  data: 100,
  right: { data: 5, left: null, right: null },
  left: { data: 165324, left: null, right: null },
};
console.log(checkSubtree(bstRoot, completelyDifferentTree)); // false

console.log("Recursive alternative approach");
console.log(checkSubtreeAlternate(bstRoot, bstRoot.right)); // true
console.log(checkSubtreeAlternate(bstRoot, differentTree)); // false
console.log(checkSubtreeAlternate(bstRoot, subtree)); // true
console.log(checkSubtreeAlternate(bstRoot, completelyDifferentTree)); // false
