// O(n) time, O(1) space.
function magicIndexBruteForce(array) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === i) {
      return i;
    }
  }
  return null;
}

// O(log n) time, .... I think this is tail recursive? So O(1) space.
// You need to be able to explain how this binary search thing works better. I think this works I'm just confused as to why.
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

// O(log n) time, .... I think this is tail recursive? So O(1) space.
function magicIndexBinarySearchHandleNonDistinct(
  array,
  min = 0,
  max = array.length - 1
) {
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

// const sortedArray = [-1, 0, 1, 2, 4];
const sortedArray = [-1, 0, 1, 4, 4];

console.log(magicIndexBruteForce(sortedArray));
console.log(magicIndexBinarySearchHandleNonDistinct(sortedArray));
