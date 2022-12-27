// So this is just a recursive function, no memoizing needed. Huh.
// This takes O(n * 2^n) time and space.
// It takes that much space because we recurse once for each element in the list (n)...
// And there are twice as as many sets in the power as the length goes up by one. So 2^n.
// I guess also it doesn't matter if the set is ordered forward or backwards?
function getSubsetsRecursive(list, index = 0) {
  let allSubsets;
  if (list.length === index) {
    // So this is the base case - once we get to the index at the end of the set, we just return an empty set (since every set has that).
    allSubsets = [];
    allSubsets.push([]);
  } else {
    allSubsets = getSubsetsRecursive(list, index + 1);
    const item = list[index];
    const moreSubsets = [];

    for (let subSet of allSubsets) {
      let newSubset = [];
      newSubset = newSubset.concat(subSet);
      newSubset.push(item);
      moreSubsets.push(newSubset);
    }
    allSubsets = allSubsets.concat(moreSubsets);
  }
  return allSubsets;
}

// Base case: list is empty, just return empty set.
// case n = 1: list has one element, return empty set and the list.
// case n = 2: list has two elements, return empty set, single list, whatever. This is hard.
function getSubsetsBrianSolution(list, index = 0) {
  if (list.length === index) {
    const allSubsets = [];
    allSubsets.push([]);
    return allSubsets;
  } else {
    let allSubsets = getSubsetsBrianSolution(list, index + 1);
    const element = list[index];

    const moreSubsets = [];
    for (let subset of allSubsets) {
      const newSubset = [...subset];
      newSubset.push(element);
      moreSubsets.push(newSubset);
    }
    return allSubsets.concat(moreSubsets);
  }
}

console.log(getSubsetsRecursive([1, 2, 3]));
console.log(getSubsetsBrianSolution([1, 2]));
