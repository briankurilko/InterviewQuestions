// Close to O(3^n) time complexity. 
// The tree makes it look like there's going to be O(n) space complexity, because the depth is never greater than n.
function findStepsBruteForce(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return (
    findStepsBruteForce(n - 1) +
    findStepsBruteForce(n - 2) +
    findStepsBruteForce(n - 3)
  );
}

// O(n) time complexity, O(n) space complexity.
function findStepsTopDown(n, memo = []) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  if (memo[n] == undefined) {
    memo[n] =
      findStepsTopDown(n - 1, memo) +
      findStepsTopDown(n - 2, memo) +
      findStepsTopDown(n - 3, memo);
  }
  return memo[n];
}

// O(n) time, O(1) space.
function findStepsBottomUp(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }

    // base cases - if n is less than 0, then its no steps (a), and if its equal to 0 its 1 steps. If its 1, then its also 1 step.
    let a = 0;
    let b = 1;
    let c = 1;
    for (let i = 2; i < n; ++i) {
        const d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return a + b + c;
}

console.log(findStepsTopDown(3)); // should be 274.
console.log(findStepsBottomUp(3)); // should be 274.
console.log(findStepsBruteForce(5)); // should be 13.
