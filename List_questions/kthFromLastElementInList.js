function kthToLast_iterativeNoRunner(listNode, k) {
  let length = 1;
  for (let node = listNode; node !== null; node = node.next) {
    ++length;
  }
  let currentDistance = 1;
  for (let node = listNode; node !== null; node = node.next) {
    if (length - k === currentDistance) {
      if (listNode === null) {
        return null;
      }
      return node.data;
    }
    ++currentDistance;
  }
  return null;
}

function kthToLast_withRunner(listNode, k) {
  if (listNode === null) {
    return null;
  }
  let { runner, lastNode } = getRunner(listNode, k, 0);
  if (runner === null && !lastNode) {
    throw new Error("errrorrrr"); // throw error in future.
  }
  let node = listNode;
  while (runner !== null) {
    runner = runner.next;
    node = node.next;
  }
  return node.data;
}

function getRunner(listNode, k, distance) {
  if (listNode === null || k === distance) {
    return { runner: listNode, lastNode: k === distance };
  }
  return getRunner(listNode.next, k, ++distance);
}

function kthToLast_recursive(listNode, k) {
  const length = findLengthRecursive(listNode, 0);
  if (k > length) {
    return null;
  }
  return kthToLastRecursiveHelper(listNode, k, length, 0);
}

function findLengthRecursive(listNode, length) {
  if (listNode === null) {
    return length;
  }
  return findLengthRecursive(listNode.next, ++length);
}

function kthToLastRecursiveHelper(listNode, k, length, distance) {
  if (length - k === distance) {
    if (listNode === null) {
      return null;
    }
    return listNode.data;
  }
  return kthToLastRecursiveHelper(listNode.next, k, length, ++distance);
}

function nthNode(listNode, n, distance) {
  if (n === distance) {
    return listNode || null;
  }
  return nthNode(listNode.next, n, ++distance);
}

const myList = {
  data: 1,
  next: { data: 2, next: { data: 3, next: { data: 1000, next: null } } },
};

const myOtherList = {
  data: 1,
  next: { data: 2, next: { data: 3, next: null } },
};

function kthToLastBookHelper(listNode, k, counter) {
  if (listNode === null) {
    return { node: null, updatedCounter: counter };
  }
  let { node, updatedCounter } = kthToLastBookHelper(listNode.next, k, counter);
  let newCounter = updatedCounter + 1;
  if (newCounter === k) {
    return { node: listNode, updatedCounter: newCounter };
  }
  return { node, updatedCounter: newCounter };
}

function kthToLast_weirdBookWay(listNode, k) {
  const { node } = kthToLastBookHelper(listNode, k, 0);
  return node;
}

console.log(kthToLast_recursive(myList, 2));
console.log(kthToLast_iterativeNoRunner(myList, 2));
// console.log(findLengthRecursive(myList, 0));
console.log(kthToLast_withRunner(myList, 1));
console.log(kthToLast_weirdBookWay(myList, 2));
