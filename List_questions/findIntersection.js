import { getLength, arrayToList } from "./utils.js";

function findIntersection(head1, head2) {
  if (hasIntersection(head1, head2)) {
    const length1 = getLength(head1);
    const length2 = getLength(head2);
    const diff = length1 - length2;
    if (diff >= 0) {
      return findIntersectingNode(advanceList(head1, diff), head2);
    }
    return findIntersectingNode(head1, advanceList(head2, Math.abs(diff)));
  }
  return null;
}

function findIntersectingNode(head1, head2) {
  let node1 = head1;
  let node2 = head2;
  while (node1 !== null && node2 !== null) {
    if (node1 === node2) {
      return node1;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  throw new Error("List sizes are not equal.");
}

function advanceList(head, distance) {
  let counter = distance;
  let node = head;
  while (counter > 0) {
    node = node.next;
    --counter;
  }
  return node;
}

function hasIntersection(head1, head2) {
  return getFinalNodeOfList(head1) === getFinalNodeOfList(head2);
}

function getFinalNodeOfList(head) {
  let finalNode = null;
  for (let node = head; node !== null; node = node.next) {
    finalNode = node;
  }
  return finalNode;
}

const listIntersection = {
  data: 5000,
  next: {
    data: 50,
    next: { data: 123, next: null },
  },
};

const myList = {
  data: 1,
  next: {
    data: 2,
    next: { data: 3, next: listIntersection },
  },
};

const myList2 = {
  data: 12,
  next: {
    data: 13,
    next: { data: 14, next: listIntersection },
  },
};

const myList3 = {
  data: 13,
  next: { data: 14, next: listIntersection },
};

const myList4 = {
  data: 12,
  next: {
    data: 13,
    next: { data: 14, next: { data: 543, next: listIntersection } },
  },
};

const myList5 = {
  data: 13,
  next: { data: 14, next: null },
};

const myList6 = {
  data: 1456,
  next: myList5,
};

console.log(findIntersection(myList, myList2));
console.log(findIntersection(myList3, myList4));
console.log(findIntersection(myList4, myList3));
console.log(
  findIntersection(arrayToList([1, 3, 4, 5]), arrayToList([8, 9, 10, 12]))
);
console.log(findIntersection(myList5, myList6));
console.log(findIntersection(myList6, myList6));
