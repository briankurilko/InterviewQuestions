function findLoopNode(head) {
  let node = head;
  let runner = node;

  while (runner !== null && runner.next !== null) {
    node = node.next;
    runner = runner.next.next;
    if (node === runner) {
      node = head;
      while (node !== runner) {
        node = node.next;
        runner = runner.next;
      }
      return node;
    }
  }
  return null;
}

function createLoopNode(head, data1, data2) {
  let nodeWithData1 = null;
  let nodeWithData2 = null;
  for (let node = head; node !== null; node = node.next) {
    if (node.data === data1) {
      nodeWithData1 = node;
    }
    if (node.data === data2) {
      nodeWithData2 = node;
    }
  }
  nodeWithData2.next = nodeWithData1;
  return head;
}

const myList = {
  data: "A",
  next: {
    data: "B",
    next: {
      data: "C",
      next: {
        data: "D",
        next: {
          data: "E",
          next: { data: "F", next: { data: "G", next: null } },
        },
      },
    },
  },
};

const myList2 = {
  data: "A",
  next: {
    data: "B",
    next: {
      data: "C",
      next: {
        data: "D",
        next: {
          data: "E",
          next: { data: "F", next: { data: "G", next: null } },
        },
      },
    },
  },
};

// console.log(createLoopNode(myList, "C", "G"));
console.log(findLoopNode(myList));
console.log(findLoopNode(createLoopNode(myList, "C", "G")));
console.log(findLoopNode(createLoopNode(myList2, "B", "G")));
