import { arrayToList, listToArray } from "./utils.js";

function listToString(listNode) {
  let strBuilder = [];
  for (let node = listNode; node !== null; node = node.next) {
    strBuilder.unshift(node.data);
  }
  return strBuilder.join("");
}

function stringToList(str) {
  let list = null;
  for (let i = 0; i < str.length; ++i) {
    list = { data: str[i], next: list };
  }
  return list;
}

function sumLists(list1, list2) {
  const list1Num = Number.parseInt(listToString(list1));
  const list2Num = Number.parseInt(listToString(list2));

  const sum = list1Num + list2Num;
  return stringToList(sum.toString());
}

function stringToListReverse(str) {
  let list = null;
  for (let i = str.length - 1; i >= 0; --i) {
    list = { data: str[i], next: list };
  }
  return list;
}

function listToStringReverse(listNode) {
  const stringBuilder = [];
  for (let node = listNode; node !== null; node = node.next) {
    stringBuilder.push(node.data);
  }
  return stringBuilder.join("");
}

function sumListsReverse(list1, list2) {
  const list1Num = Number.parseInt(listToStringReverse(list1));
  const list2Num = Number.parseInt(listToStringReverse(list2));

  const sum = list1Num + list2Num;
  return stringToListReverse(sum.toString());
}

function reverseList(head) {
  let previous = null;
  let current = head;
  let runner = head;

  while (current !== null) {
    runner = runner.next;
    current.next = previous;
    previous = current;
    current = runner;
  }
  return previous;
}

function sumListNoConversion(list1, list2) {
  let sumList = null;
  let node1 = list1,
    node2 = list2;
  let carryOver = 0;
  while (node1 !== null || node2 !== null) {
    let sum = 0;
    if (node1 === null) {
      sum = node2.data + carryOver;
      node2 = node2.next;
    } else if (node2 === null) {
      sum = node1.data + carryOver;
      node1 = node1.next;
    } else {
      sum = node1.data + node2.data + carryOver;
      node1 = node1.next;
      node2 = node2.next;
    }
    carryOver = Math.floor(sum / 10);
    sumList = { data: sum % 10, next: sumList };
  }
  if (carryOver !== 0) {
    sumList = { data: carryOver, next: sumList };
  }
  return reverseList(sumList);
}

function sumListsRecursive(head1, head2) {
  return sumListsHelper(head1, head2, 0);
}
function sumListsHelper(head1, head2, carryOver) {
  if (head1 === null && head2 === null) {
    if (carryOver !== 0) {
      return { data: carryOver, next: null };
    }
    return null;
  }
  let sum = 0;
  if (head1 === null) {
    sum = head2.data + carryOver;
    return {
      data: sum % 10,
      next: sumListsHelper(head1, head2.next, Math.floor(sum / 10)),
    };
  }
  if (head2 === null) {
    sum = head1.data + carryOver;
    return {
      data: sum % 10,
      next: sumListsHelper(head1.next, head2, Math.floor(sum / 10)),
    };
  }
  sum = head1.data + head2.data + carryOver;
  return {
    data: sum % 10,
    next: sumListsHelper(head1.next, head2.next, Math.floor(sum / 10)),
  };
}

function length(head) {
  let length = 0;
  for (let node = head; node !== null; node = node.next) {
    length++;
  }
  return length;
}
function padList(list, distance) {
  let newList = list;
  for (let i = 0; i < distance; ++i) {
    newList = { data: 0, next: newList };
  }
  return newList;
}
function sumListsHelperReverse(head1, head2) {
  if (head1 === null && head2 === null) {
    return { carry: 0, nextNode: null };
  }
  let { carry, nextNode } = sumListsHelperReverse(head1.next, head2.next);
  const sum = head1.data + head2.data + carry;
  return {
    carry: Math.floor(sum / 10),
    nextNode: { data: sum % 10, next: nextNode },
  };
}

function sumListsReverseNoConversion(head1, head2) {
  const len1 = length(head1);
  const len2 = length(head2);
  let newList1 = head1;
  let newList2 = head2;
  if (len1 > len2) {
    newList2 = padList(head2, len1 - len2);
  }
  if (len2 > len1) {
    newList1 = padList(head1, len2 - len2);
  }

  const { carry, nextNode } = sumListsHelperReverse(newList1, newList2);
  if (carry !== 0) {
    return { data: carry, next: nextNode };
  }
  return nextNode;
}

console.log(
  JSON.stringify(
    sumListsReverse(arrayToList([6, 1, 7]), arrayToList([2, 9, 5]))
  )
);
console.log(
    JSON.stringify(
      sumListsReverseNoConversion(arrayToList([9, 9, 9]), arrayToList([1]))
    )
  );