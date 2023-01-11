// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n log n) time, O(n) space. Could do O(n^2) time, O(1) space, as well.
const twoSumSorted = function (nums, target) {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (indexMap.has(nums[i])) {
      const arr = indexMap.get(nums[i]);
      arr.push(i);
      indexMap.set(nums[i], arr);
    } else {
      indexMap.set(nums[i], [i]);
    }
  }

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (target === nums[left] + nums[right]) {
      if (nums[left] === nums[right]) {
        return [indexMap.get(nums[left])[0], indexMap.get(nums[left])[1]];
      }
      return [indexMap.get(nums[left])[0], indexMap.get(nums[right])[0]];
    } else if (target > nums[left] + nums[right]) {
      ++left;
    } else {
      --right;
    }
  }
  return [];
};

const twoSumOptimized = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i);
  }
  return [];
}



console.log(twoSumSorted([3, 2, 4], 6)); // should be [1, 2]
console.log(twoSumSorted([2, 7, 11, 15], 9)); // should be [0, 1]
console.log(twoSumSorted([3, 3], 6)); // should be [0, 1]
console.log(twoSumSorted([3, 2, 3], 6)); // should be [0, 2]

console.log(twoSumOptimized([3, 2, 4], 6)); // should be [1, 2]
console.log(twoSumOptimized([2, 7, 11, 15], 9)); // should be [0, 1]
console.log(twoSumOptimized([3, 3], 6)); // should be [0, 1]
console.log(twoSumOptimized([3, 2, 3], 6)); // should be [0, 2]
