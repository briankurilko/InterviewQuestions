// https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/description/

// You are given a string s consisting only of lowercase English letters.
// In one move, you can select any two adjacent characters of s and swap them.
// Return the minimum number of moves needed to make s a palindrome.
// Note that the input will be generated such that s can always be converted to a palindrome.

function stepsToPalindrome(charArray) {
  let left = 0;
  let right = charArray.length - 1;
  let k = right;
  let steps = 0;
  let middleIndex = null;

  while (left < right) {
    if (charArray[left] !== charArray[right]) {
      k = right;
      while (k !== left) {
        if (charArray[k] == charArray[left]) {
          break;
        }
        --k;
      }
      if (k === left) {
        middleIndex = k;
        left++;
        continue;
      } else {
        while (k < right) {
          let temp = charArray[k + 1];
          charArray[k + 1] = charArray[k];
          charArray[k] = temp;
          ++steps;
          ++k;
        }
      }
    }
    ++left;
    --right;
  }
  if (middleIndex !== null) {
    steps += Math.floor(charArray.length / 2) - middleIndex;
  }
  return steps;
}

console.log(stepsToPalindrome("accabb".split("")));
console.log(stepsToPalindrome("scpcyxprxxsjyjrww".split("")));
