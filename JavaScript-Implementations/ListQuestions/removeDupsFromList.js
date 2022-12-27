function removeDupsWithSet(listNode) {
  const elementsFound = new Set();
  let previous = null;
  for (let node = listNode; node !== null; node = node.next) {
    if (elementsFound.has(node.data)) {
      previous.next = node.next;
    } else {
      elementsFound.add(node.data);
      previous = node;
    }
  }
  return listNode;
}

function removeDupsWithoutSet(listNode) {
  let previous = null;
  for (let node = listNode; node !== null; node = node.next) {
    previous = node;
    for (let runner = node.next; runner !== null; runner = runner.next) {
      if (node.data === runner.data) {
        previous.next = runner.next;
      } else {
        previous = runner;
      }
    }
  }
  return listNode;
}

const myList = {
  data: 1,
  next: {
    data: 4,
    next: { data: 3, next: { data: 2, next: { data: 3, next: null } } },
  },
};

const myOtherList = {
  data: 1,
  next: {
    data: 2,
    next: { data: 1, next: { data: 2, next: null } },
  },
};
console.log(JSON.stringify(removeDupsWithoutSet(myOtherList)));
