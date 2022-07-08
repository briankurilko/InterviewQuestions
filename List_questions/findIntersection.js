function findIntersectionSetImpl(list1, list2) {
  const list1Elements = generateElementsSet(list1);
  let list1HasIntersection = hasIntersection(list2, list1Elements);
  if (list1HasIntersection) {
    const elementsList = [...list1Elements];
    return elementsList[elementsList.length - 1];
  }
  let list2Elements = generateElementsSet(list2);
  let list2HasIntersection = hasIntersection(list1, list2Elements);
  if (list2HasIntersection) {
    const elementsList = [...list2Elements];
    return elementsList[elementsList.length - 1];
  }
  return null;
}

function hasIntersection(list, elementsSet) {
  let listHasIntersection = false;
  for (let node = list; node !== null; node = node.next) {
    if (elementsSet.has(node)) {
      listHasIntersection = true;
      elementsSet.delete(node);
    } else {
      elementsSet.add(node);
    }
  }
  return listHasIntersection;
}

function generateElementsSet(list) {
  const elements = new Set();
  let lastNode = null;
  for (let node = list; node !== null; node = node.next) {
    elements.add(node);
  }
  return elements;
}

function findIntersectionIterativeImpl(list1, list2) {
  return (
    findIntersectingNode(list1, list2) || findIntersectingNode(list2, list1)
  );
}

function findIntersectingNode(list1, list2) {
  let previous = null;
  for (let i = list1; i !== null; i = i.next) {
    for (let j = list2; j !== null; j = j.next) {
      if (i === j) {
        return previous;
      }
    }
    previous = i;
  }
  return null;
}

const myOtherList = {
  data: 1,
  next: { data: 2, next: { data: 3, next: null } },
};
const anotherIntersectingNode = {
  data: 10000,
  next: myOtherList,
};
const intersectingNode = {
  data: 5000,
  next: anotherIntersectingNode,
};

const myList = {
  data: 1,
  next: {
    data: 2,
    next: { data: 3, next: { data: 1000, next: null } },
  },
};

console.log(findIntersectionSetImpl(myList, myOtherList));
console.log(findIntersectionSetImpl(myOtherList, intersectingNode));
console.log(findIntersectionSetImpl(intersectingNode, myOtherList));
console.log(findIntersectionIterativeImpl(myList, myOtherList));
console.log(findIntersectionIterativeImpl(myOtherList, intersectingNode));
console.log(findIntersectionSetImpl(intersectingNode, myOtherList));
