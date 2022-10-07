import { createBinarySearchTreeFromSortedArray_noSlice } from "./4.2_minimalTree.js";

function treeToList(treeNode, list = []) {
  if (!treeNode) {
    return;
  }
  treeToList(treeNode.left, list);
  list.push(treeNode.data);
  treeToList(treeNode.right, list);
  return;
}

// This is O(n) time but also O(n) space, so its not ideal. Also, it can't handle duplicates on the right side of the node.
function validateBstUsingList(treeNode) {
  let treeAsList = [];
  treeToList(treeNode, treeAsList);

  for (let i = 0; i < treeAsList.length - 1; ++i) {
    if (treeAsList[i] > treeAsList[i + 1]) {
      return false;
    }
  }
  return true;
}

function checkIfTreeIsBst(treeNode, isRight = false) {
  if (!treeNode.left && !treeNode.right) {
    return { data: treeNode.data, invalid: false };
  }
  let leftData = null;
  if (treeNode.left) {
    const { data, invalid } = checkIfTreeIsBst(treeNode.left, false);
    if (invalid || data > treeNode.data) {
      return { data: null, invalid: true };
    }
    leftData = data;
  }
  let rightData = null;
  if (treeNode.right) {
    const { data, invalid } = checkIfTreeIsBst(treeNode.right, true);
    if (invalid || data <= treeNode.data) {
      return { data: null, invalid: true };
    }
    rightData = data;
  }
  if (isRight) {
    const arrayOfNonNullValues = [treeNode.data];
    leftData && arrayOfNonNullValues.push(leftData);
    rightData && arrayOfNonNullValues.push(rightData);
    return {
      data: Math.min(...arrayOfNonNullValues),
      invalid: false,
    };
  }
  return { data: Math.max(treeNode.data, leftData, rightData), invalid: false };
}

// This is O(n) time and O(h) space (where h is the tree height), but looks pretty bad. Very bad in fact. 
// Next time REMEMBER TO TERMINATE WHEN TREENODE IS NULL. Below code is just cleaned up.
function validateBstWithoutList(root) {
  const { invalid } = checkIfTreeIsBst(root);
  return !invalid;
}

// O(n) time, O(h) space (where h is the tree height). Same as solution above but cleaner looking.
// If the tree is balanced, then we get O(log n) space.
function validateBstWithoutListClean(
  treeNode,
  minRange = -Infinity,
  maxRange = Infinity
) {
  if (!treeNode) {
    return true;
  }
  if (treeNode.data <= minRange || treeNode.data > maxRange) {
    return false;
  }
  if (!validateBstWithoutListClean(treeNode.left, minRange, treeNode.data)) {
    return false;
  }
  if (!validateBstWithoutListClean(treeNode.right, treeNode.data, maxRange)) {
    return false;
  }
  return true;
}

const sortedArray = [];

sortedArray.push(10);
sortedArray.push(5);
sortedArray.push(130);
sortedArray.push(104);
sortedArray.push(1123);
sortedArray.push(1234);
sortedArray.push(1);
sortedArray.push(2);
sortedArray.push(1124);

sortedArray.sort((a, b) => a - b);

const tree = createBinarySearchTreeFromSortedArray_noSlice(sortedArray);

console.log(validateBstUsingList(tree));
console.log(validateBstWithoutList(tree));
console.log(validateBstWithoutListClean(tree));
tree.left.right.right = { data: 5, right: null, left: null };
// console.log(JSON.stringify(tree));
console.log(validateBstUsingList(tree));
console.log(validateBstWithoutList(tree));
console.log(validateBstWithoutListClean(tree));
tree.right.right.left = { data: 100, right: null, left: null };
console.log(validateBstUsingList(tree));
console.log(validateBstWithoutList(tree));
console.log(validateBstWithoutListClean(tree));
