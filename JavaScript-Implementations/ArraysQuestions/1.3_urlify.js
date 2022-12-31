function urlify(characterArray, trueLength) {
  let index = characterArray.length;
  for (let i = trueLength - 1; i >= 0; --i) {
    if (characterArray[i] == " ") {
      characterArray[index - 1] = "0";
      characterArray[index - 2] = "2";
      characterArray[index - 3] = "%";
      index -= 3;
    } else {
      characterArray[index - 1] = characterArray[i];
      index--;
    }
  }
  return characterArray;
}

const string = "Mr John Smith    ".split("");

const expected = "Mr%20John%20Smith";
const thing = urlify(string, 13);
console.log(expected === string.join(""));
console.log(thing.join(""));