function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return oneAwayReplace(str1, str2);
  } else if (str1.length > str2.length) {
    return oneAwayInsert(str1, str2);
  }
  return oneAwayInsert(str2, str1);
}

function oneAwayInsert(longer, shorter) {
  let longIndex = 0;
  let shortIndex = 0;
  while (longIndex < longer.length && shortIndex < shorter.length) {
    if (longer[longIndex] !== shorter[shortIndex]) {
      if (Math.abs(longIndex - shortIndex) >= 1) {
        return false;
      }
      ++longIndex;
    } else {
      ++shortIndex;
      ++longIndex;
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
console.log(oneAway("ple", "pade"));
