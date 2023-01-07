// You are given a binary string, s, consisting of characters '0' and '1'.
// Transform this string into a palindrome by performing some operations.
// In one operation, swap *any* two characters, s[i] and s[j].
// Determine the minimum number of swaps required to make the string a palindrome.
// If it is impossible to do so, then return -1.

// Note: A palindrome is a string that reads the same backward as forward.
// For example: strings "0", "111", "010", "10101" are palindromes.
// But, strings "001", "10", "11101" are not.

// Example: Let string s = "0100101".
// The following shows the minimum number of steps required.
// It uses 1-based indexing.
// 1. Swap characters with indices (4, 5).
// "0101001".
// 2. Swap characters with indices (1, 2).
// "1001001".
// And there we go. Palindrome in 2 steps.

// brian notes section: How do we tell if a string can't be made into a palindrome? We use the 2 pointer solution like before?
// Idk. Maybe lets just try coding it.

// O(n^2) time, O(1) space. O(n) time if the string can't become a palindrome, or already is one.
function stepsToPalindrome(binaryString) {
  let zeroCount = 0,
    oneCount = 0;
  for (let char of binaryString) {
    if (char === "0") {
      ++zeroCount;
    }
    if (char === "1") {
      ++oneCount;
    }
  }
  if (
    (oneCount === 0 && zeroCount == 0) ||
    (oneCount % 2 !== 0 && zeroCount % 2 !== 0)
  ) {
    return -1;
  }
  if (oneCount === 0 || zeroCount === 0) {
    return 0;
  }

  let left = 0;
  let right = binaryString.length - 1;
  let k = right - 1;
  let j = left + 1;
  let steps = 0;

  while (left < right) {
    if (binaryString[left] !== binaryString[right]) {
      k = right - 1;
      j = left + 1;
      const swapIndex = findSwapIndex(binaryString, k, j, left);
      if (binaryString[swapIndex] === binaryString[left]) {
        swap(binaryString, swapIndex, right);
      } else {
        // don't really have to do anything here, I'm just swapping so that the string looks like a palindrome.
        swap(binaryString, swapIndex, left);
      }
      ++steps;
    }
    ++left;
    --right;
  }
  return steps;
}

function findSwapIndex(binaryString, k, j, left) {
  while (j < k) {
    if (binaryString[j] !== binaryString[k]) {
      if (binaryString[j] === binaryString[left]) {
        return j;
      }
      if (binaryString[k] === binaryString[left]) {
        return k;
      }
    }
    --k;
    ++j;
  }
  return k;
}

function swap(binaryString, index1, index2) {
  const temp = binaryString[index1];
  binaryString[index1] = binaryString[index2];
  binaryString[index2] = temp;
}

console.log(stepsToPalindrome("0100101".split("")) === 2); // should be 2.
console.log(stepsToPalindrome("010001101".split("")) === 2); // should be 2.
console.log(stepsToPalindrome("000101101".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("010000000001010".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("00001".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("11100".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("01".split("")) === -1); // should be -1.
console.log(stepsToPalindrome("111".split("")) === 0); // should be 0.
console.log(stepsToPalindrome("001".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("11101".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("101100".split("")) === -1); // should be -1.
console.log(stepsToPalindrome("11110000".split("")) === 2); // should be 2.
console.log(stepsToPalindrome("1000000".split("")) === 1); // should be 1.
console.log(stepsToPalindrome("101100000".split("")) === 2); // should be 2.
