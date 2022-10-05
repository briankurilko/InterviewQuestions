function deleteMiddleNode(middleNode) {
  let node = middleNode;
  let runner = middleNode.next;
  while (runner !== null) {
    node.data = runner.data;
    node.next = runner;
    if (runner.next === null) {
      runner = null;
      node.next = null;
    } else {
      node = runner;
      runner = runner.next;
    }
  }
}

function deleteMiddleNode_noLoop(middleNode) {
  if (middleNode === null || middleNode.next === null) {
    return false;
  }
  const nextNode = middleNode.next;
  middleNode.data = nextNode.data;
  middleNode.next = nextNode.next;
  return true;
}

const myList = {
  data: 1,
  next: { data: 2, next: { data: 3, next: { data: 1000, next: null } } },
};

function nthNode(listNode, n, distance) {
  if (n === distance) {
    return listNode || null;
  }
  return nthNode(listNode.next, n, ++distance);
}

deleteMiddleNode_noLoop(nthNode(myList, 0, 0));

console.log(JSON.stringify(myList));
