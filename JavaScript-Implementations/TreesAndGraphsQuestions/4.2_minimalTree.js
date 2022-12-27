const sortedArray = [];

sortedArray.push(10);
sortedArray.push(5);
sortedArray.push(130);
sortedArray.push(104);
sortedArray.push(1123);
sortedArray.push(1234);
sortedArray.push(1);
sortedArray.push(2);
sortedArray.push(1124);

sortedArray.sort((a, b) => a - b);

function createBinarySearchTreeFromSortedArray(array) {
  if (array.length === 0) {
    return null;
  }
  const middle = findMiddleElementIndex(array);
  return {
    data: array[middle],
    right: createBinarySearchTreeFromSortedArray(array.slice(middle + 1)),
    left: createBinarySearchTreeFromSortedArray(array.slice(0, middle)),
  };
}

// this has better space complexity - slice creates a copy of the array.
export function createBinarySearchTreeFromSortedArray_noSlice(
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
    right: createBinarySearchTreeFromSortedArray_noSlice(
      array,
      middle + 1,
      end
    ),
    left: createBinarySearchTreeFromSortedArray_noSlice(
      array,
      start,
      middle - 1
    ),
  };
}

function findMiddleElementIndex(array) {
  return Math.floor((array.length - 1) / 2);
}

// console.log(
//   JSON.stringify(createBinarySearchTreeFromSortedArray(sortedArray)) ===
//     JSON.stringify(createBinarySearchTreeFromSortedArray_noSlice(sortedArray))
// );

// console.log(
//   JSON.stringify(createBinarySearchTreeFromSortedArray_noSlice(sortedArray))
// );

// console.log(JSON.stringify(createBinarySearchTreeFromSortedArray(sortedArray)));

// console.log(sortedArray.length);
