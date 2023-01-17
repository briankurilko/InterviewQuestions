// Question: Given n non-negative integers a1, a2... an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// Note that you may not slant the container.

// Example:
// Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49.
// Explanation: The above vertical lines are represented by array [1, 8, 6, 2, 5, 4, 8, 3, 7].
//              In this case, the max area of water (blue section) the container can contain is 49.

// Link: https://leetcode.com/problems/container-with-most-water/description/

// O(n) time, O(1) space.
function largestContainer(height) {
    let largestArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let currentArea = (right - left) * Math.min(height[left], height[right]);
        if (currentArea > largestArea) {
            largestArea = currentArea;
        }
        if (height[left] >= height[right]) {
            --right;
        } else if (height[right] > height[left]) {
            ++left;
        }
    }
    return largestArea;
} 

console.log(largestContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
console.log(largestContainer([1, 1]) === 1);
console.log(largestContainer([4, 3, 2, 1, 4]) === 16);
console.log(largestContainer([1, 2, 1]) === 2);

console.log(largestContainer([4, 70, 2, 90, 4]));
