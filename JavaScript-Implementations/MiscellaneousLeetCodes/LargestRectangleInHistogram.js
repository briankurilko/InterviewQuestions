// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

// O(n^3) time, O(1) space! It's a solution! That's something!
function largestRectangleAreaBruteForce(heights) {
  let area = 0;
  let offset = 0;
  let walkingIndex = 0;
  while (offset <= heights.length) {
    if (walkingIndex >= heights.length) {
      offset++;
      walkingIndex = offset;
    } else {
      const currentArea =
        findMinOfArraySlice(heights, offset, walkingIndex) *
        (walkingIndex - offset + 1);
      if (currentArea > area) {
        area = currentArea;
      }
      ++walkingIndex;
    }
  }
  return area;
}

function findMinOfArraySlice(arr, index1, index2) {
  let min = Infinity;
  for (let i = index1; i <= index2; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// O(n^2) time, O(1) space.
function largestRectangleAreaSlightlyOptimized(heights) {
  let area = 0;
  let offset = 0;
  let walkingIndex = 0;
  let minHeight = Infinity;
  while (offset <= heights.length) {
    if (walkingIndex >= heights.length) {
      offset++;
      walkingIndex = offset;
      minHeight = heights[walkingIndex];
    } else {
      if (heights[walkingIndex] < minHeight) {
        minHeight = heights[walkingIndex];
      }
      const currentArea = minHeight * (walkingIndex - offset + 1);
      if (currentArea > area) {
        area = currentArea;
      }
      ++walkingIndex;
    }
  }
  return area;
}

// O(n log n) time! O(n) space, due to the recursion stack frames.
// Its n because we need to find the min element, and log n because of our binary search type thing.
// This is a dum
function largestRectangleDivideAndConquer(
  heights,
  l = 0,
  r = heights.length - 1
) {
  if (l > r) {
    return 0;
  }
  const minIndex = findMinElementIndex(heights, l, r);
  return Math.max(
    heights[minIndex] * (r - l + 1),
    largestRectangleDivideAndConquer(heights, l, minIndex - 1),
    largestRectangleDivideAndConquer(heights, minIndex + 1, r)
  );
}

function findMinElementIndex(heights, index1, index2) {
  let minIndex = index1;
  for (let i = index1; i <= index2; ++i) {
    if (heights[minIndex] > heights[i]) {
      minIndex = i;
    }
  }
  return minIndex;
}

console.log(largestRectangleAreaBruteForce([2, 1, 5, 6, 2, 3])); // should be 10
console.log(largestRectangleAreaBruteForce([2, 4])); // should be 4
console.log(largestRectangleAreaBruteForce([0, 9])); // should be 9.

console.log(largestRectangleAreaSlightlyOptimized([2, 1, 5, 6, 2, 3])); // should be 10
console.log(largestRectangleAreaSlightlyOptimized([2, 4])); // should be 4
console.log(largestRectangleAreaSlightlyOptimized([0, 9])); // should be 9.

console.log(largestRectangleDivideAndConquer([2, 1, 5, 6, 2, 3])); // should be 10
console.log(largestRectangleDivideAndConquer([2, 4])); // should be 4
console.log(largestRectangleDivideAndConquer([0, 9])); // should be 9.
