function compressString(str) {
  let compressedStringArray = [];
  let repeatedCount = 0;
  let lastLetter = "";
  for (const letter of str) {
    if (lastLetter != letter && lastLetter != "") {
      compressedStringArray.push(lastLetter);
      compressedStringArray.push(repeatedCount);
      repeatedCount = 1;
    } else {
      repeatedCount++;
    }
    lastLetter = letter;
  }
  if (lastLetter != "") {
    compressedStringArray.push(lastLetter);
    compressedStringArray.push(repeatedCount);
  }
  const compressedString = compressedStringArray.join("");

  return compressedString.length > str.length ? str : compressedString;
}

console.log(compressString("aabcccccaaa")); // a2b1c5a3
console.log(compressString("abc"));
console.log(compressString("aaabaa"));
console.log(compressString(""));
// REMEMBER TO OPTIMIZE AFTER YOU FIND THE ANSWER!
// Also, this is the correct solution, but you can also check in advance if the compressed string will be bigger during the loop.
// Also the book's final solution finds the length of the compressed string before actually creating it, so we can avoid
// creating the stringbuilder if the length of the compressed string is too long - also it allows us to specify a size for the
// stringbuilder, which means that we don't have to worry about the stringbuilder growing behind the scenes.