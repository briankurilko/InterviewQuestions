function partitionList(listNode, x) {
  for (let node = listNode; node != null; node = node.next) {
    if (node.data >= x) {
      for (let runner = node.next; runner !== null; runner = runner.next) {
        if (runner.data < x) {
          let temp = runner.data;
          runner.data = node.data;
          node.data = temp;
          break;
        }
      }
    }
  }
  return listNode;
}

function partitionListOptimized(listNode, x) {
  let runner = undefined;
  for (let node = listNode; node != null; node = node.next) {
    if (node.data >= x) {
      if (runner === undefined) {
        runner = node.next;
      }
      if (runner === null) {
        break;
      }
      while (runner !== null) {
        if (runner.data < x) {
          let temp = runner.data;
          runner.data = node.data;
          node.data = temp;
          runner = runner.next;
          break;
        }
        runner = runner.next;
      }
    }
  }
  return listNode;
}

function arrayToList(array) {
  let list = { data: null, next: null };
  let nextElement = null;
  for (let i = array.length - 1; i >= 0; --i) {
    list.data = array[i];
    list.next = nextElement;
    nextElement = list;
    if (i !== 0) {
      list = { data: null, next: list };
    }
  }
  return list;
}

function arrayToListRecursive([data, ...array]) {
  if (data === undefined) {
    return null;
  }
  const next = arrayToListRecursive(array);
  return { data, next };
}

function listToArray(list) {
  let array = [];
  for (let node = list; node !== null; node = node.next) {
    array.push(node.data);
  }
  return array;
}

console.log(
  listToArray(partitionList(arrayToList([3, 5, 8, 5, 10, 2, 1]), 10))
);
console.log(
  listToArray(partitionListOptimized(arrayToList([11, 5, 8, 5, 10, 2, 1]), 10))
);
