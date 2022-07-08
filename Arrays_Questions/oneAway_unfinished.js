function createCharacterMap(str) {
  const map = new Map();
  for (const letter of str) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  return map;
}

function mapsAreEqual(map1, map2, stringLengthsAreDifferent) {
  let oneDiff = stringLengthsAreDifferent;
  for (const [letter, count] of map1) {
    if (count !== map2.get(letter)) {
      if (oneDiff) {
        return false;
      }
      oneDiff = true;
    }
  }
  return true;
}

function isOneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  const str1Map = createCharacterMap(str1);
  const str2Map = createCharacterMap(str2);
  if (str1.length < str2.length) {
      return mapsAreEqual(str1Map, str2Map, true);
  }
  if (str1.length > str2.length) {
      return mapsAreEqual(str2Map, str1Map, true);
  }
  return mapsAreEqual(str1Map, str2Map, false);
}

console.log(isOneAway("ple", "pale"));
console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pales", "pale"));
console.log(isOneAway("pale", "bale"));
console.log(isOneAway("pale", "bake"));
console.log(isOneAway("aabb", "bbaa"));
