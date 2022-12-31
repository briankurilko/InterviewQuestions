// Question 1.1
// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// O(n) time, O(n) space.
function isUniqueSetImpl(string) {
    const charSet = new Set();

    for (let char of string) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

// O(n^2) time, O(1) space
function isUniqueNoSetImpl(string) {
    for (let i = 0; i < string.length; ++i) {
        for (let j = i + 1; j < string.length; ++j) {
            if (string.charAt(i) === string.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}

// O(n log n) time, O(n) space (would be O(1) space if we were passed char array and could make changes in place, though)
function isUniqueSortedImpl(string) {
    const sortedString = string.split('').sort().join('');
    for (let i = 0; i + 1 < string.length; ++i) {
        if (sortedString.charAt(i) === sortedString.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}

console.log(isUniqueSetImpl("abcd"));
console.log(isUniqueNoSetImpl("abcd"));
console.log(isUniqueSortedImpl("abcd"));

console.log(isUniqueSetImpl("abcdefadfasd"));
console.log(isUniqueNoSetImpl("abcdefadfasd"));
console.log(isUniqueSortedImpl("abcdefadfasd"));
