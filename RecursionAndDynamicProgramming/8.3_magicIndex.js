// O(n) time, O(1) space.
function magicIndexBruteForce(array) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === i) {
      return i;
    }
  }
  return null;
}

// O(log n) time, .... I think this is tail recursive? So O(1) space because of tail recursion.
function magicIndexBinarySearch(array, min = 0, max = array.length - 1) {
  if (min > max) {
    return null;
  }

  const mid = Math.floor((min + max) / 2);
  if (array[mid] === mid) {
    return mid;
  } else if (array[mid] < mid) {
    return magicIndexBinarySearch(array, mid + 1, max);
  } else {
    return magicIndexBinarySearch(array, min, mid - 1);
  }
}

// O(log n) time best case, O(n) time worst case. Same thing with space complexity.
function magicIndexBinarySearchHandleNonDistinct(
  array,
  min = 0,
  max = array.length - 1
) {
  if (min > max) {
    return null;
  }

  const midIndex = Math.floor((max + min) / 2);
  const midValue = array[midIndex];

  if (midIndex === midValue) {
    return midIndex;
  }

  const leftIndex = Math.min(midIndex - 1, midValue);
  const left = magicIndexBinarySearchHandleNonDistinct(array, min, leftIndex);
  if (left !== null) {
    return left;
  }

  const rightIndex = Math.max(midIndex + 1, midValue);
  return magicIndexBinarySearchHandleNonDistinct(array, rightIndex, max);
}

const sortedArray = [-1, 0, 1, 2, 4];
const sortedArray2 = [-1, 0, 3, 4, 4];

console.log(magicIndexBinarySearch(sortedArray));
console.log(magicIndexBinarySearchHandleNonDistinct(sortedArray2));
