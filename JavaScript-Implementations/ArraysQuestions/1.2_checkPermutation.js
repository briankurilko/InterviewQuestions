// Question 1.2: Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

// O(A + B) time, O(A) space.
function isPermutationMapSolution(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1Map = createCharacterMap(string1);

  for (let letter of string2) {
    // This if statement is how we handle characters existing in s2 that don't exist in s1.
    if (!string1Map.has(letter)) {
      return false;
    }

    string1Map.set(letter, string1Map.get(letter) - 1);
    if (string1Map.get(letter) < 0) {
      return false;
    }
  }
  return true;
}

function createCharacterMap(string) {
  const map = new Map();

  for (let letter of string) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  return map;
}

// O(A log A + B log B) time, O(A + B) space.
function isPermutationSortedSolution(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}


console.log(isPermutationMapSolution("abcdef", "fdabce")); // true
console.log(isPermutationMapSolution("abcdef", "hijklm")); // false
console.log(isPermutationMapSolution("poiuhbh", "poiubobbb")); // false

console.log(isPermutationSortedSolution("abcdef", "fdabce")); // true
console.log(isPermutationSortedSolution("abcdef", "hijklm")); // false
console.log(isPermutationSortedSolution("poiuhbh", "poiubobbb")); // false