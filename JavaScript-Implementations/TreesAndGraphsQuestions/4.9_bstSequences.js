function createBinarySearchTreeFromSortedArray(
  array,
  start = 0,
  end = array.length - 1
) {
  if (end < start) {
    return null;
  }
  const middle = Math.floor((end + start) / 2);
  return {
    data: array[middle],
    right: createBinarySearchTreeFromSortedArray(array, middle + 1, end),
    left: createBinarySearchTreeFromSortedArray(array, start, middle - 1),
    depth: null,
  };
}

const bstRoot = createBinarySearchTreeFromSortedArray([-3, -2, -1, 1, 2, 3, 4]);

console.log(JSON.stringify(bstRoot));

// This could be made more optimal by using linked lists where we remove elements, but this is the gist of weave.
// For solutions that are reliant on linked lists like this to be fully optimal, it might be better to implement it with Java.
// Also, to save on space, rather than copying the "first" list and shifting it like I do, we could modify the existing list (shift it),
// then unshift it after the recursive call.
function weave(first, second, prefix) {
  if (first.length === 0) {
    return [prefix.concat(second)];
  }
  if (second.length === 0) {
    return [prefix.concat(first)];
  }
  const listOfArrays = [];

  const firstResult = [...first];
  const firstElement = firstResult[0];
  firstResult.shift();
  listOfArrays.push(...weave(firstResult, second, [...prefix, firstElement]));

  const secondResult = [...second];
  const secondElement = secondResult[0];
  secondResult.shift();
  listOfArrays.push(...weave(first, secondResult, [...prefix, secondElement]));
  return listOfArrays;
}

// Wow the weave lists method was hard enough to come up with. This method was also hard.
// So here, if our node is null, then we return a list of lists with only 1 empty list in it. That way, our "prefix"
// is just the root's data, and that's it. So we get deeper into our recursion, and with each recursion we return
// a result with 1 element bigger (that new element is the new prefix). When we finally make it back up to the top level
// we're just putting a prefix on all of the lists we've created beneath us.
// This makes sense but geez very complicated. I don't even know the time complexity of this, seems to be quadratic at least.
function allBstSequences(root) {
  if (root === null) {
    return [[]];
  }
  const result = [];
  const prefix = [root.data];

  const leftSequence = allBstSequences(root.left);
  const rightSequence = allBstSequences(root.right);

  for (let left of leftSequence) {
    for (let right of rightSequence) {
      result.push(...weave(left, right, prefix));
    }
  }
  return result;
}

// console.log(weave([1, 2], [3, 4], []));
const simpleBst = createBinarySearchTreeFromSortedArray([1, 2, 3]);
console.log(allBstSequences(simpleBst));
// console.log(allBstSequences(bstRoot).length);
