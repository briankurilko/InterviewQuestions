function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return oneAwayReplace(str1, str2);
  } else if (str1.length > str2.length) {
    return oneAwayInsert(str1, str2);
  }
  return oneAwayInsert(str2, str1);
}

function oneAwayInsert(str1, str2) {
  for (
    let shortIndex = 0, longIndex = 0;
    shortIndex < str2.length;
    ++shortIndex, ++longIndex
  ) {
    if (str2[shortIndex] !== str1[longIndex]) {
      longIndex++;
      if (longIndex - shortIndex > 1) {
        return false;
      }
    }
  }
  return true;
}

function oneAwayReplace(str1, str2) {
  let mismatches = 0;
  for (let i = 0; i < str2.length; ++i) {
    if (str1[i] !== str2[i]) {
      mismatches++;
      if (mismatches > 1) {
        return false;
      }
    }
  }
  return true;
}
// Complexity is O(N) where N is the length of the shortest string.
console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("palelhbhb", "bake"));
console.log(oneAway("pale", "pale"));
console.log(oneAway("aabb", "bbaa"));
