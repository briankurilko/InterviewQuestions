import { arrayToList, listToArray, getLength } from "./utils.js";

function isPalindrome(head) {
  const array = [];
  for (let node = head; node !== null; node = node.next) {
    array.push(node.data);
  }
  let node = head;
  for (let i = array.length - 1; i >= Math.ceil((array.length - 1) / 2); --i) {
    if (node.data !== array[i]) {
      return false;
    }
    node = node.next;
  }
  return true;
}

function isPalindromeStack(head) {
  const stack = [];
  for (let node = head; node !== null; node = node.next) {
    stack.push(node.data);
  }
  let node = head;
  while (stack.length !== 0) {
    if (stack.pop() !== node.data) {
      return false;
    }
    node = node.next;
  }
  return true;
}

function isPalindromeRecursive(head) {
  const length = getLength(head);
  if (length < 1) {
    return false;
  }
  const { palindrome } = palindromeHelper(head, length, 0);
  return palindrome;
}

function palindromeHelper(leftNode, length, distance) {
  let rightNode;
  let palindrome = true;
  if (Math.ceil(length / 2) - 1 === distance) {
    if (length % 2 !== 0) {
      return { rightNode: leftNode.next, palindrome: true };
    }
    rightNode = leftNode.next;
  } else {
    const result = palindromeHelper(leftNode.next, length, distance + 1);
    palindrome = result.palindrome;
    rightNode = result.rightNode;
  }

  return {
    palindrome: palindrome && rightNode.data === leftNode.data,
    rightNode: rightNode.next,
  };
}

console.log(isPalindrome(arrayToList([1, 4, 3, 4, 1])));
console.log(isPalindromeStack(arrayToList([5, 4, 3, 4, 5])));
console.log(isPalindromeRecursive(arrayToList([5, 4, 3, 4, 5])));
console.log(isPalindromeRecursive(arrayToList([])));
