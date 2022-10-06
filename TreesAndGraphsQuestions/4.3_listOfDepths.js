import { createBinarySearchTreeFromSortedArray_noSlice } from "./4.2_minimalTree.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";
import { arrayToList, listToArray } from "../ListQuestions/utils.js";

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

// keep in mind that the tree isn't necessarily a BST. Just doing this because its easier.
const binarySortTree =
  createBinarySearchTreeFromSortedArray_noSlice(sortedArray);

function getListOfDepthsBFS(root) {
  const queue = new Queue();
  root.depth = 0;
  queue.add(root);

  const listOfDepths = {};

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    let listAtCurrentDepth = listOfDepths;
    for (let i = 0; i < r.depth; ++i) {
      if (!listAtCurrentDepth.next) {
        listAtCurrentDepth.next = { next: null };
      }
      listAtCurrentDepth = listAtCurrentDepth.next;
    }
    if (!listAtCurrentDepth.data) {
      listAtCurrentDepth.data = { data: r.data, next: null };
    } else {
      let endNodeOfCurrentDepthList = listAtCurrentDepth.data;
      while (endNodeOfCurrentDepthList.next !== null) {
        endNodeOfCurrentDepthList = endNodeOfCurrentDepthList.next;
      }
      endNodeOfCurrentDepthList.next = { data: r.data, next: null };
    }
    if (r.left !== null) {
      const n = r.left;
      n.depth = r.depth + 1;
      queue.add(n);
    }
    if (r.right !== null) {
      const n = r.right;
      n.depth = r.depth + 1;
      queue.add(n);
    }
  }
  return listOfDepths;
}

function getArrayOfDepthsBFS(treeNode) {
  const queue = new Queue();
  treeNode.depth = 0;
  queue.add(treeNode);

  const listOfDepths = [];

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    if (!listOfDepths[r.depth]) {
      listOfDepths[r.depth] = [];
    }
    listOfDepths[r.depth].push(r.data);
    if (r.left !== null) {
      const n = r.left;
      n.depth = r.depth + 1;
      queue.add(n);
    }
    if (r.right !== null) {
      const n = r.right;
      n.depth = r.depth + 1;
      queue.add(n);
    }
  }
//   const arrayOfLinkedLists = [];
//   for (let i = 0; i < listOfDepths.length; ++i) {
//     const linkedList = arrayToList(listOfDepths[i]);
//     arrayOfLinkedLists[i] = linkedList;
//   }
  return listOfDepths;
}

function getListOfDepthsDFS(treeNode, lists = [], depth = 0) {
  if (treeNode === null) {
    return null;
  }
  if (!lists[depth]) {
    lists[depth] = [];
  }
  lists[depth].push(treeNode.data);
  getListOfDepthsDFS(treeNode.left, lists, depth + 1);
  getListOfDepthsDFS(treeNode.right, lists, depth + 1);
}

function createdDepthLists(tree) {
  const lists = [];
  getListOfDepthsDFS(tree, lists);
  return lists;
}

// console.log(JSON.stringify(getListOfDepthsBFS(binarySortTree)));
console.log(JSON.stringify(getArrayOfDepthsBFS(binarySortTree)));
console.log(JSON.stringify(createdDepthLists(binarySortTree)));
