// Given a binary string s, return the minimum number of character swaps to make it alternating, or -1 if it is impossible.
// The string is called alternating if no two adjacent characters are equal. For example, the strings "010" and "1010" are alternating, while the string "0100" is not.
// Any two characters may be swapped, even if they are not adjacent.

function minSwapsOdd(binaryCharArray, oddZeros) {
  if (binaryCharArray.length === 1) {
    return 0;
  }
  const middleElement = Math.floor(binaryCharArray.length / 2);
  let prevIsOne = binaryCharArray[middleElement] === "1";
  let steps = 0;
  let left = middleElement - 1;
  let right = middleElement + 1;
  if ((prevIsOne && oddZeros) || (!prevIsOne && !oddZeros)) {
    steps++;
    const swapIndex = findSwapIndexOdd(
      binaryCharArray,
      middleElement,
      middleElement,
      prevIsOne
    );
    swap(binaryCharArray, middleElement, swapIndex);
    prevIsOne = !prevIsOne;
  }
  while (left >= 0 && right < binaryCharArray.length) {
    if (
      binaryCharArray[left] != prevIsOne &&
      binaryCharArray[right] != prevIsOne
    ) {
      prevIsOne = !prevIsOne;
    } else {
      if (binaryCharArray[right] == prevIsOne) {
        ++steps;
        const swapIndex = findSwapIndexOdd(
          binaryCharArray,
          left,
          right,
          prevIsOne
        );
        if (swapIndex === -1) {
          // Assumption - in this case, a "shift" would be the same as swapping the middle element with another element.
          if (!(left === 0 && right === binaryCharArray.length - 1)) {
            return -1;
          }
        }
        swap(binaryCharArray, swapIndex, right);
      }
      if (binaryCharArray[left] == prevIsOne) {
        ++steps;
        const swapIndex = findSwapIndexOdd(
          binaryCharArray,
          left,
          right,
          prevIsOne
        );
        if (swapIndex === -1) {
          if (!(left === 0 && right === binaryCharArray.length - 1)) {
            return -1;
          }
        }
        swap(binaryCharArray, swapIndex, left);
      }
      prevIsOne = !prevIsOne;
    }
    --left;
    ++right;
  }

  return steps;
}

function findSwapIndexOdd(binaryCharArray, left, right, prevIsOne) {
  let isOne = !prevIsOne;
  let k = right + 1;
  let j = left - 1;
  while (k < binaryCharArray.length && j >= 0) {
    if (binaryCharArray[j] == !isOne && binaryCharArray[k] == !isOne) {
      isOne = !isOne;
    } else {
      if (binaryCharArray[k] == isOne) {
        return k;
      }
      if (binaryCharArray[j] == isOne) {
        return j;
      }
      isOne = !isOne;
    }
    ++k;
    --j;
  }
  return -1;
}

function findSwapIndexEven(
  binaryCharArray,
  left,
  right,
  leftIsOne,
  indexToReplace
) {
  let j = left - 1;
  let k = right + 1;
  let prevIsOne = leftIsOne;
  while (j >= 0 && k < binaryCharArray.length) {
    if (!(binaryCharArray[j] != prevIsOne && binaryCharArray[k] == prevIsOne)) {
      if (
        binaryCharArray[k] != prevIsOne &&
        binaryCharArray[k] !== binaryCharArray[indexToReplace]
      ) {
        return k;
      } else if (
        binaryCharArray[j] == prevIsOne &&
        binaryCharArray[j] !== binaryCharArray[indexToReplace]
      ) {
        return j;
      }
    }
    --j;
    ++k;
    prevIsOne = !prevIsOne;
  }
  return -1;
}

function minSwapsEven(binaryCharArray) {
  let middle = Math.floor(binaryCharArray.length / 2);
  let left = middle - 1;
  let right = middle;
  let leftIsOne = binaryCharArray[left] === "1";
  let steps = 0;
  // assuming left is correct.
  while (left >= 0 && right < binaryCharArray.length) {
    if (steps === 30) {
      console.log("hey");
    }
    if (
      !(
        binaryCharArray[left] == leftIsOne &&
        binaryCharArray[right] != leftIsOne
      )
    ) {
      if (binaryCharArray[right] == leftIsOne) {
        // explore right side for 0? Shouldn't explore left side...
        const swapIndex = findSwapIndexEven(
          binaryCharArray,
          left,
          right,
          leftIsOne,
          right
        );
        if (swapIndex !== -1) {
          swap(binaryCharArray, swapIndex, right);
          ++steps;
        } else {
          swap(binaryCharArray, left, right);
          ++steps;
        }
      }
      if (binaryCharArray[left] != leftIsOne) {
        const swapIndex = findSwapIndexEven(
          binaryCharArray,
          left,
          right,
          leftIsOne,
          left
        );
        if (swapIndex !== -1) {
          swap(binaryCharArray, swapIndex, left);
          ++steps;
        } else {
          swap(binaryCharArray, left, right);
          ++steps;
        }
      }
    }

    leftIsOne = !leftIsOne;
    --left;
    ++right;
  }
  return steps;
}

function swap(binaryCharArray, index1, index2) {
  const temp = binaryCharArray[index1];
  binaryCharArray[index1] = binaryCharArray[index2];
  binaryCharArray[index2] = temp;
}

function minSwapsToAlternatingString(s) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let letter of s) {
    if (letter === "0") {
      zeroCount++;
    }
    if (letter === "1") {
      oneCount++;
    }
  }
  if (Math.abs(oneCount - zeroCount) >= 2) {
    return -1;
  }
  const binaryCharArray = s.split("");
  if (binaryCharArray.length % 2 === 0) {
    return minSwapsEven(binaryCharArray);
  }
  return minSwapsOdd(binaryCharArray, zeroCount % 2 !== 0);
}

function minSwapsAnotherShot(s) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let letter of s) {
    if (letter === "0") {
      zeroCount++;
    }
    if (letter === "1") {
      oneCount++;
    }
  }
  if (Math.abs(oneCount - zeroCount) >= 2) {
    return -1;
  }
  if (oneCount > zeroCount) {
    return helper(s, "1");
  }
  if (zeroCount > oneCount) {
    return helper(s, "0");
  }
  return Math.min(helper(s, "1"), helper(s, "0"));
}

function helper(binaryString, c) {
  let steps = 0;
  for (let char of binaryString) {
    if (char !== c) {
      ++steps;
    }
    if (c === "0") {
      c = "1";
    } else if (c === "1") {
      c = "0";
    }
  }
  return steps / 2;
}

console.log(minSwapsAnotherShot("1101000") === 1); // should be 1. 0101010
console.log(minSwapsAnotherShot("1111000") === 2); // should be 2? 1010101. But, it forces a swap of the middle element, unless we can shift...
console.log(minSwapsAnotherShot("11110") === -1); // should be -1
console.log(minSwapsAnotherShot("01100") === 1); // should be 1.
console.log(minSwapsAnotherShot("0110") === 1); // should be 1.
console.log(minSwapsAnotherShot("1110") === -1); // should be -1.
console.log(minSwapsAnotherShot("1010") === 0); // should be 0.
console.log(minSwapsAnotherShot("111000") === 1); // should be 1.
console.log(minSwapsAnotherShot("000111") === 1); // should be 1.
console.log(minSwapsAnotherShot("010") === 0); // should be 0.
console.log(minSwapsAnotherShot("00110011") === 2); // should be 2.
console.log(minSwapsAnotherShot("1000101011") === 1); // should be 2.
console.log(minSwapsAnotherShot("00110") === 1); // should be 1.
console.log(minSwapsAnotherShot("01101") === 1); // should be 1.
console.log(
  minSwapsAnotherShot(
    "101111001000101101111100111011100010010000001010010001100010100001111111100111111010001011001010010110111100101100011110010100101110100110101100000000000000010100001011100011110100001111001110101001101100010111001110011001111011100001001110110011101010011111001010001001110001000111001"
  ) === 80
);
