function hasPalindrome(str) {
  const myMap = new Map();
  const testString = str.toLowerCase().replace(/\s/g, "");
  for (const letter of testString) {
    if (letter !== " ") {
      if (!myMap.has(letter)) {
        myMap.set(letter, 1);
      } else {
        myMap.set(letter, myMap.get(letter) + 1);
      }
    }
  }
  let hasOneOdd = false;
  for (const count of myMap.values()) {
    if (count % 2 !== 0) {
      if (!hasOneOdd) {
        hasOneOdd = true;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(hasPalindrome("tact coa"));
